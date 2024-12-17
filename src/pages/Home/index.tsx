import { useResponsive } from "ahooks";
import CustomPageTitle from "components/@ui/CustomPageTitle";
import Liquidity from "pages/Liquidity";
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
      <Liquidity />
    </>
  );
}
