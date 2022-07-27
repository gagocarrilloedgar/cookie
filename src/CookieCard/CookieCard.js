//** Custom-cookie components
import {
  CookieCardLayout,
  CookieCardBody,
  CustomButton,
  CookieCardFooter
} from "./components";

//

export const CookieCard = () => {
  return (
    <div style={{ backgroundColor: "transparent" }}>
      <CookieCardLayout>
        <CookieCardBody />
        <CookieCardFooter>
          <CustomButton title="🍪 Accept cookies" isPrimary />
          <CustomButton title="Decline" />
        </CookieCardFooter>
      </CookieCardLayout>
    </div>
  );
};
