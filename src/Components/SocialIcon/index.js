import React from "react";
import SocialIcon from "./styled/SocialIcon";
import SocialIconWrapper from "./styled/SocialIconWrapper";

export default ({ ...props }) => (
  <SocialIconWrapper>
    <SocialIcon {...props} />
  </SocialIconWrapper>
);
