import Avatar from "components/@ui/Avatar";
import Divider from "components/@ui/Divider";
import { FC } from "react";
import { Box, Flex, Type } from "theme/base";

interface KeyValueRowProps {
  label: string;
  value: string | number;
  boldValue?: boolean;
}
const KeyValueRow: FC<KeyValueRowProps> = ({
  label,
  value,
  boldValue = true,
}) => (
  <Flex justifyContent="space-between" sx={{ width: "100%" }}>
    <Type.Caption color="neutral4">{label}</Type.Caption>
    {boldValue ? (
      <Type.CaptionBold color="neutral1">{value}</Type.CaptionBold>
    ) : (
      <Type.Caption color="neutral1">{value}</Type.Caption>
    )}
  </Flex>
);

export const LiquidityInfo: FC = () => (
  <Box sx={{width: "548px"}}>
    <Flex
      sx={{
        flexDirection: "column",
        backgroundColor: "background2",
        p: "16px",
        gap: "16px",
      }}
    >
      <Flex sx={{ gap: "16px", width: "fit-content" }}>
        <Avatar url="@assets/images/avatar_default.png" size={48} />
        <Flex sx={{ flexDirection: "column", justifyContent: "center" }}>
          <Type.BodyBold color="neutral1">BLI</Type.BodyBold>
          <Type.Caption color="neutral5">Blaex Liquidity Index</Type.Caption>
        </Flex>
      </Flex>
      <Divider color="neutral6" />
      <Flex sx={{ flexDirection: "column", gap: "8px" }}>
        <KeyValueRow label="Price" value="$1.216" />
        <KeyValueRow
          label="Total Supply"
          value="109,485,249 BLI ($133,148,955.26)"
        />
      </Flex>
      <Divider color="neutral6" />
      <Flex sx={{ flexDirection: "column", gap: "8px" }}>
        <KeyValueRow label="Protocol Yield APR" value="12.20%" />
        <KeyValueRow label="Blast Native Yield APR" value="2.21%" />
      </Flex>
    </Flex>
  </Box>
);
