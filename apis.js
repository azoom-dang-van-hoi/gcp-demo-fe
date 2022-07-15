import ky from 'ky-universal'


export const apis = {}
// const FORBIDDEN_STATUS_CODE = 403

function createAPI(options) {
  const { baseURL, currentPath, redirect } = options
  return ky.create({
    prefixUrl: baseURL,
    timeout: 30000,
    credentials: 'include',
    hooks: {
      beforeRequest: [
      ],
      afterResponse: [
        async (req, options, res) => {
          console.log(currentPath)
          if (res.status == 401 && !currentPath.includes('logout')) {
            const link = document.createElement('a')
            link.href = `https://hoi-pomerium.jp.auth0.com/v2/logout?client_id=PdaOPQuCxQrMeM7mxBhjVMqRItVlPRoM&returnTo=https://hoi-demo-pomerium-trkregf5uq-an.a.run.app/logout`
            link.click()
            // window.location.href = `https://hoi-pomerium.jp.auth0.com/v2/logout?client_id=PdaOPQuCxQrMeM7mxBhjVMqRItVlPRoM&returnTo=https://hoi-demo-pomerium-trkregf5uq-an.a.run.app/logout`
          }
          const body = await res.json()
          console.log(body)
        }
      ],
    },
  })
}


export default function ({
  $config, route, redirect
}) {
  if (process.client) {
    console.log($config)
    apis.api = createAPI({
      baseURL: $config.API_URL,
      currentPath: route.path,
      redirect
    })
  }
}
