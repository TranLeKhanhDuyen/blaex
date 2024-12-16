import Liquidity from "./Liquidity";
import { useResponsive } from "ahooks";
import CustomPageTitle from "components/@ui/CustomPageTitle";
import { Box } from "theme/base";

export default function HomePage() {
  const { xl } = useResponsive();
  if (!xl)
    return (
      <Box p={5} textAlign="center">
        Only support large monitor
      </Box>
    );
  return (
    <>
      <CustomPageTitle title="Blaex" />
      <Liquidity></Liquidity>
    </>
  );
}
