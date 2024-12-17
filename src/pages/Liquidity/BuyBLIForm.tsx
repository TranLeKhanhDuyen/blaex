import ChainLogo from "components/@ui/ChainLogo";
import NumberInput from "components/NumberInput";
import { FC } from "react";
import { Button } from "theme/Buttons";
import { InputWrapper } from "theme/Input";
import Tabs, { TabPane } from "theme/Tab";
import { Flex } from "theme/base";
import { CHAINS } from "utils/web3/chains";

export const BuyBLIForm: FC = () => (
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
          </Flex>
        </InputWrapper>
      </TabPane>
      {/* Tab 2: Short */}
    </Tabs>

    <Button variant="primary" size="large" block>
      Buy
    </Button>
  </Flex>
);
