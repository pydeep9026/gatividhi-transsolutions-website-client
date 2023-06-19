import React from "react";
import { CustomButton } from "./ButtonStyles";

const Button = ({ primary, secondary, blocked, outline, hoverPrimary, event, link, spaced, children }) => {
  
  return (
    <CustomButton
      primary={primary}
      blocked={blocked}
      outline={outline}
      hoverPrimary={hoverPrimary}
      onClick={event}
      link={link}
      spaced={spaced}
      secondary={secondary}
      
    >
      {children}
    </CustomButton>
  );
};

export default Button;
