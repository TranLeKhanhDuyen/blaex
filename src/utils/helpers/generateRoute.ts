import ROUTES from "utils/config/routes";

export function createUrlWithParams({
  url,
  params = {},
}: {
  url: string;
  params?: Record<string, any>;
}): string {
  let query = "";
  for (const key of Object.keys(params)) {
    if (params[key] !== undefined) {
      query += `&${key}=${encodeURIComponent(params[key])}`;
    }
  }
  return url + `${!!query ? `?${query.slice(1)}` : ""}`;
}

export function generateHomeRoute(data: { params?: Record<string, any> }) {
  return createUrlWithParams({
    url: ROUTES.HOME.path,
    params: data.params,
  });
}
export function generateLiquidityRoute(data: { params?: Record<string, any> }) {
  return createUrlWithParams({
    url: ROUTES.LIQUIDITY.path,
    params: data.params,
  });
}

export function generateFaucetRoute(data: { params?: Record<string, any> }) {
  return createUrlWithParams({
    url: ROUTES.FAUCET.path,
    params: data.params,
  });
}
