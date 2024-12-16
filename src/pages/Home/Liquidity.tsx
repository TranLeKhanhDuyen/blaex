import Avatar from "components/@ui/Avatar";
import ChainLogo from "components/@ui/ChainLogo";
import CenterItemContainer from "components/@ui/Container/CenterItemContainer";
import Divider from "components/@ui/Divider";
import NumberInput from "components/NumberInput";
import { FC, useState } from "react";
import { Button } from "theme/Buttons";
import EthereumIcon from "theme/Icons/EthereumIcon";
import { InputWrapper } from "theme/Input";
import Tabs, { TabPane } from "theme/Tab";
import { Flex, Type } from "theme/base";
import { CHAINS } from "utils/web3/chains";

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

const Liquidity: FC = () => {
  return (
    <>
      <Flex sx={{ flexDirection: "column", mb: "16px" }}>
        <Type.H2 color="neutral1" fontWeight="700" mt="24px" mb="8px">
          Liquidity
        </Type.H2>
        <Type.Body color="neutral5">
          Purchase BLI tokens to earn ETH fees from swaps and leverage trading.
        </Type.Body>
      </Flex>

      <Flex sx={{ justifyContent: "center", gap: "8px" }}>
        <Flex
          sx={{
            flexDirection: "column",
            backgroundColor: "background2",
            p: "16px",
            gap: "16px",
          }}
        >
          <Flex
            sx={{
              gap: "16px",
              width: "fit-content",
            }}
          >
            <Avatar url="@assets/images/avatar_default.png" size={48} />
            <Flex sx={{ flexDirection: "column", justifyContent: "center" }}>
              <Type.BodyBold color="neutral1">BLI</Type.BodyBold>
              <Type.Caption color="neutral5">
                Blaex Liquidity Index
              </Type.Caption>
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

        {/* ===== FORM ===== */}
        <Flex
          sx={{
            flexDirection: "column",
            backgroundColor: "background2",
            p: "16px",
            gap: "16px",
          }}
        >
          <Tabs
            defaultActiveKey="buy"
            onChange={(key) => console.log("Tab Changed to:", key)}
            inactiveHasLine
          >
            {/* Tab 1: Buy BLI */}
            <TabPane key="buy" tab="Buy BLI">
              <InputWrapper
                clipPathType="2"
                diffX={20}
                diffY={10}
                sx={{ flexDirection: "column", p: "16px" }}
              >
                <Flex sx={{ width: "100%", justifyContent: "space-between" }}>
                  <label>Pay</label>
                  <label>Balance</label>
                </Flex>
                <Flex sx={{ width: "100%", justifyContent: "space-between" }}>
                  <NumberInput />
                  {
                    <ChainLogo
                      chain={CHAINS[11155111]}
                      active={true}
                      sx={{
                        margin: 4,
                        backgroundColor: "rgba(249, 249, 249, 1)",
                        padding: "10px",
                        borderRadius: "50%",
                        borderColor: "primary1",
                      }}
                    />
                  }
                </Flex>
              </InputWrapper>
            </TabPane>
            {/* Tab 2: Short */}
          </Tabs>

          <Button variant="primary" size="large" block>
            Buy
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Liquidity;
