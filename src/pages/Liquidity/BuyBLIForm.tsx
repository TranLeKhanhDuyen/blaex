import ChainLogo from "components/@ui/ChainLogo";
import NumberInput from "components/NumberInput";
import { FC, useState } from "react";
import { Button } from "theme/Buttons";
import CaretDownIcon from "theme/Icons/CaretDownIcon";
import { InputWrapper } from "theme/Input";
import Tabs, { TabPane } from "theme/Tab";
import { Flex, Type } from "theme/base";
import { CHAINS } from "utils/web3/chains";

export const BuyBLIForm: FC = () => {
  const [ethValue, setEthValue] = useState<number>();
  const [bliValue, setBliValue] = useState<number>();
  const ethToBliRate = 10027338631029.62;

  const handleEthChange = (value: string) => {
    const eth = parseFloat(value) || 0;
    setEthValue(eth);
    setBliValue(eth * ethToBliRate); // Convert ETH to BLI
  };

  return (
    <Flex
      sx={{
        flexDirection: "column",
        backgroundColor: "background2",
        p: "16px",
        gap: "16px",
      }}
    >
      <Tabs defaultActiveKey="buy" inactiveHasLine>
        {/* Tab 1: Buy BLI */}
        <TabPane key="buy" tab="Buy BLI">
          <Flex sx={{ flexDirection: "column", gap: "16px" }}>
            <InputWrapper
              clipPathType="2"
              diffX={20}
              diffY={10}
              sx={{ flexDirection: "column", p: "16px", width: "100%" }}
            >
              <Flex sx={{ width: "100%", justifyContent: "space-between" }}>
                <label>Pay</label>
                <label>Balance</label>
              </Flex>
              <Flex
                sx={{
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: "16px 0",
                }}
              >
                <NumberInput
                  value={ethValue}
                  onValueChange={(e) => handleEthChange(e.target.value)}
                />
                <Flex sx={{ alignItems: "center", gap: "8px" }}>
                  <ChainLogo
                    chain={CHAINS[11155111]}
                    active={true}
                    sx={{
                      backgroundColor: "rgba(249, 249, 249, 1)",
                      padding: "10px",
                      borderRadius: "50%",
                      borderColor: "primary1",
                    }}
                  />
                  <Type.H5>ETH</Type.H5>
                  <CaretDownIcon />
                </Flex>
              </Flex>
            </InputWrapper>

            <InputWrapper
              clipPathType="2"
              diffX={20}
              diffY={10}
              sx={{ flexDirection: "column", p: "16px", width: "100%" }}
            >
              <Flex sx={{ width: "100%", justifyContent: "space-between" }}>
                <label>Receive</label>
                <label>Balance: {bliValue}</label>
              </Flex>
              <Flex
                sx={{
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: "16px 0",
                }}
              >
                <NumberInput value={bliValue} />
                <Flex sx={{ alignItems: "center", gap: "8px" }}>
                  <ChainLogo
                    chain={CHAINS[11155111]}
                    active={true}
                    sx={{
                      backgroundColor: "rgba(249, 249, 249, 1)",
                      padding: "10px",
                      borderRadius: "50%",
                      borderColor: "primary1",
                    }}
                  />
                  <Type.H5>BLI</Type.H5>
                </Flex>
              </Flex>
            </InputWrapper>
          </Flex>
        </TabPane>
        {/* Tab 2: Short */}
      </Tabs>

      <Button variant="primary" size="large" sx={{ p: "16px 0" }}>
        Buy
      </Button>
    </Flex>
  );
};
