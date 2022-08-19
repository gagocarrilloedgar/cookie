const API_URL =
  'https://3002-gagocarrill-flaskrestex-io5f6dfemab.ws-eu62.gitpod.io'

const login = async () => {
  const resp = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'test', password: 'test' })
  })

  if (!resp.ok) throw Error('There was a problem in the login request')

  if (resp.status === 401) throw new Error('Invalid credentials')
  if (resp.status === 400) throw new Error('Invalid email or password format')

  const data = await resp.json()
  // save your token in the localStorage
  //also you should set your user into the store using the setStore function
  localStorage.setItem('jwt-token', data.access_token)

  console.log(data)
}

const protectedRequest = async () => {
  const token = localStorage.getItem('jwt-token')

  const resp = await fetch(`${API_URL}/protected`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token // ⬅⬅⬅ authorization token
    }
  })

  if (!resp.ok) throw Error('There was a problem in the login request')

  const data = await resp.json()
  console.log('This is the data you requested', data)
  alert('Your are authorized: ' + data.logged_in_as)
}

const radmonCall = async () => {
  const resp = await fetch(`${API_URL}/random`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!resp.ok) throw Error('There was a problem in the login request')

  const data = await resp.json()

  alert('Your data is: ' + data.users)
}

export const JWTComponent = () => {
  return (
    <>
      <button onClick={login}> Generate token </button>
      <button onClick={protectedRequest}>Perform operation with token</button>
      <button onClick={radmonCall}>Random</button>
    </>
  )
}
