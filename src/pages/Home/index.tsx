import { useResponsive } from 'ahooks'

import CustomPageTitle from 'components/@ui/CustomPageTitle'
import { Box } from 'theme/base'

export default function HomePage() {
  const { xl } = useResponsive()
  if (!xl)
    return (
      <Box p={5} textAlign="center">
        Only support large monitor
      </Box>
    )
  return (
    <>
      <CustomPageTitle title="Blaex" />
      <Box p={2} sx={{ height: '100%', width: '100%', maxWidth: 2000, mx: 'auto', overflow: 'hidden' }}>
        Home
      </Box>
    </>
  )
}
