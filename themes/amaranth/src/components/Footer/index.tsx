import React from "react";

import { useConfig } from "gatsby-theme-advanced";

import UserLinks from "../UserLinks";
import { Caption } from "../../theme";
import { AnimatedLink } from "../Links";

import * as S from "./styles";

const Footer = (): JSX.Element => {
  const config = useConfig();

  return (
    <S.Wrapper>
      <S.LinkGrid>
        <UserLinks includeRss />
      </S.LinkGrid>
      <S.Info>
        <Caption>
          Source code available on{" "}
          <AnimatedLink to="https://github.com/Nathan13888/PhysicsPhair">
            Github
          </AnimatedLink>
        </Caption>
        <Caption>{config.website.copyright}</Caption>
      </S.Info>
    </S.Wrapper>
  );
};

export default Footer;
