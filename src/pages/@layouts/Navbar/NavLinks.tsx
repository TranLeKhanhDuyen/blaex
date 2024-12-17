import { Trans } from "@lingui/react";
import Avatar from "components/@ui/Avatar";
import { Link, NavLink, NavLinkProps } from "react-router-dom";
import styled from "styled-components";
import { Box, Flex } from "theme/base";
import ROUTES from "utils/config/routes";
import {
  generateFaucetRoute,
  generateLiquidityRoute,
} from "utils/helpers/generateRoute";

export function DesktopNavLinks() {
  return (
    <DesktopWrapper>
        <BaseNavLinks isMobile={false} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Avatar
            size={32}
            url="https://example.com/avatar.jpg"
            shape="circle"
          />
          <Box sx={{ fontSize: "16px", color: "neutral2" }}>0x3B3f...A75e</Box>
        </Box>
    </DesktopWrapper>
  );
}
export function MobileNavLinks({ onClose }: { onClose?: () => void }) {
  return (
    <MobileWrapper>
      <BaseNavLinks isMobile onClose={onClose} />
    </MobileWrapper>
  );
}

function BaseNavLinks({
  isMobile,
  onClose,
}: {
  isMobile: boolean;
  onClose?: () => void;
}) {
  const onClickNavItem = () => {
    onClose?.();
  };

  return (
    <>
      {baseNavConfigs.map((config, index) => (
        <NavItem
          key={config.matchpath}
          to={config.routeFactory({ params: undefined })}
          label={config.label}
          isMobile={isMobile}
          onClick={onClickNavItem}
        />
      ))}
    </>
  );
}

function NavItem({
  to,
  label,
  isMobile,
  onClick,
}: {
  to: string;
  label: React.ReactNode;
  isMobile: boolean;
  onClick: () => void;
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      style={
        !isMobile
          ? { display: "flex", height: "100%", color: "#777E90" }
          : undefined
      }
    >
      {isMobile ? (
        label
      ) : (
        <Flex sx={{ alignItems: "center", gap: 1 }}>
          <Box>{label}</Box>
        </Flex>
      )}
    </NavLink>
  );
}

const baseNavConfigs = [
  {
    routeFactory: (configs: { params?: any }) =>
      generateLiquidityRoute({ params: configs.params }),
    label: "Liquidity",
    matchpath: ROUTES.LIQUIDITY.path,
  },
  {
    routeFactory: (configs: { params?: any }) =>
      generateFaucetRoute({ params: configs.params }),
    label: "Faucet",
    matchpath: ROUTES.FAUCET.path,
  },
];

const DesktopWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  height: 100%;
  .navlink-default {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 13px;
    padding: 0 8px;
    color: ${({ theme }) => theme.colors.neutral5};
    border-bottom: 1px solid transparent;
    background-position: bottom;
    background-color: ${({ theme }) => theme.colors.background2};
    transition: 0.3s;
  }
  .navlink-active {
    color: ${({ theme }) => theme.colors.primary1};
    background-size: 100%;
    background-position: bottom;
    background-repeat: no-repeat;
    background-position: bottom;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary1};
  }
  .navlink-default:hover {
    color: ${({ theme }) => theme.colors.primary1};
  }
`;

const MobileWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  .navlink-default {
    display: block;
    font-weight: 600;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.neutral1};
  }
  .navlink-active {
    color: ${({ theme }) => theme.colors.primary1};
  }
`;
