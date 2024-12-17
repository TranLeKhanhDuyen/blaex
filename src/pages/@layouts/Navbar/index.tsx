import { DesktopNavLinks } from "./NavLinks";
import { LARGE_BREAK_POINT } from "./config";
import { LogoWrapper, Main, Wrapper } from "./styled";
import Avatar from "components/@ui/Avatar";
import Logo, { LogoWithText } from "components/@ui/Logo";
import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Flex } from "theme/base";
import { generateHomeRoute } from "utils/helpers/generateRoute";

export default function Navbar({ height }: { height: number }): ReactElement {
  return (
    <>
      <Box as="header" sx={{ zIndex: [101, 101, 101, 11] }}>
        <Wrapper height={height}>
          <Main>
            <Flex height="100%" alignItems="center" sx={{ gap: 2 }}>
              <Link to={generateHomeRoute({ params: { tab: "swap" } })}>
                <LogoWrapper>
                  <LogoWithText size={20} />
                </LogoWrapper>
              </Link>
              <Box
                alignItems="center"
                px={3}
                sx={{
                  display: "flex",
                  textAlign: "center",
                  gap: 24,
                  height: "100%",
                  "& > *": { flexShrink: 0 },
                  [`@media all and (max-width: ${LARGE_BREAK_POINT}px)`]: {
                    display: "none",
                  },
                }}
              >
                <DesktopNavLinks />
              </Box>
            </Flex>
          </Main>
        </Wrapper>
      </Box>
    </>
  );
}
