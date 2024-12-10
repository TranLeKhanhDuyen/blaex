import { Suspense, lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Route, Switch } from 'react-router-dom'

import NotFound from 'components/@ui/NotFound'
import Loading from 'theme/Loading'
import { Box } from 'theme/base'
import ROUTES from 'utils/config/routes'

import ErrorFallback from './@helpers/ErrorFallback'
import AppWrapper from './AppWrapper'

const HomePage = lazy(() => import('./Home'))

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AppWrapper>
        <Suspense
          fallback={
            <Box p={4}>
              <Loading />
            </Box>
          }
        >
          <Switch>
            <Route path={ROUTES.HOME.path} exact component={HomePage}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </Suspense>
      </AppWrapper>
    </ErrorBoundary>
  )
}

export default App
