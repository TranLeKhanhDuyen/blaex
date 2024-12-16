import Avatar from "components/@ui/Avatar";
import CenterItemContainer from "components/@ui/Container/CenterItemContainer";
import Divider from "components/@ui/Divider";
import NumberInput from "components/NumberInput";
import React, { FC, useState } from "react";
import styled from "styled-components";
import { Button } from "theme/Buttons";
import LayoutCollapseButton from "theme/Buttons/LayoutCollapseButton";
import { InputWrapper } from "theme/Input";
import Tabs, { TabHeader, TabPane } from "theme/Tab";
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

const InputGroup = styled.div`
  margin: 20px 0;
  background: #1f1f1f;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SwapButton = styled.button`
  background: #b5ff00;
  border: none;
  color: black;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  margin: 10px auto;
  display: block;
`;
// ================

const Liquidity: FC = () => {
  const [pay, setPay] = useState("");
  const [receive, setReceive] = useState("");

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
        <CenterItemContainer
          sx={{
            with: "50%",
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
            <Avatar url="../../assets/images/avatar_default.png" size={48} />
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
        </CenterItemContainer>
        {/* ==================================================== */}

        <CenterItemContainer
          sx={{
            with: "50%",
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
              <Box mb={3}>
                <label>Pay</label>

                <InputWrapper>
                  <NumberInput
                    placeholder="Nhập số tiền"
                    maxLength={10}
                    onFocus={() => console.log("Input được focus")}
                    onBlur={() => console.log("Input mất focus")}
                    className="number-input"
                  />
                </InputWrapper>

                <span>ETH ▼</span>
              </Box>

              <Button variant="primary" size="large" block>
                Buy
              </Button>
            </TabPane>

            {/* Tab 2: Short */}
          </Tabs>
        </CenterItemContainer>
      </Flex>
    </>
  );
};

export default Liquidity;
