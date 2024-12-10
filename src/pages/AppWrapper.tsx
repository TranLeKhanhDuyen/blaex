import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

import useGlobalDialog from 'hooks/store/useGlobalDialog'
import Loading from 'theme/Loading'
import { Box, Flex, Type } from 'theme/base'

const AppWrapper = ({ children }: { children: ReactNode }) => {
  const dialog = useGlobalDialog((state) => state.dialog)

  return (
    <>
      <Flex className="app_wrapper" sx={{ height: '100%', flexDirection: 'column' }}>
        <Box width="100%" flex="1" sx={{ position: 'relative', overflowY: 'auto' }}>
          {children}
        </Box>
      </Flex>
      <ToastContainer theme="dark" limit={3} autoClose={5000} />
      {dialog && (
        <Flex
          justifyContent="center"
          alignItems="center"
          variant="shadow"
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 10000,
          }}
        >
          <Box variant="card" width="fit-content" height="fit-content" textAlign="center">
            {dialog.hasLoading && <Loading />}
            <Type.BodyBold display="block">{dialog.title}</Type.BodyBold>
            {!!dialog.description && <Type.Caption color="neutral3">{dialog.description}</Type.Caption>}
            <Box>{dialog.body}</Box>
          </Box>
        </Flex>
      )}
    </>
  )
}

export default AppWrapper
