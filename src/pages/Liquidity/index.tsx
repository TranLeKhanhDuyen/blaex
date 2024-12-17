import { BuyBLIForm } from "./BuyBLIForm";
import { LiquidityInfo } from "./LiquidityInfo";
import Avatar from "components/@ui/Avatar";
import ChainLogo from "components/@ui/ChainLogo";
import { Container } from "components/@ui/Container";
import Divider from "components/@ui/Divider";
import { FC } from "react";
import { Button } from "theme/Buttons";
import { Flex, Type } from "theme/base";

const Liquidity: FC = () => {
  return (
    <Container>
      <Flex
        sx={{ flexDirection: "column", mb: "16px", justifyContent: "center" }}
      >
        <Type.H2 color="neutral1" fontWeight="700" mt="24px" mb="8px">
          Liquidity
        </Type.H2>
        <Type.Body color="neutral5">
          Purchase BLI tokens to earn ETH fees from swaps and leverage trading.
        </Type.Body>
      </Flex>

      <Flex sx={{ justifyContent: "flexStart", gap: "8px" }}>
        <LiquidityInfo />
        <BuyBLIForm />
      </Flex>
    </Container>
  );
};

export default Liquidity;
