import { DEFAULT_ENDPOINT, USER_ROLE } from '@/constants'
export default ({ store, route, redirect, $config }) => {
  if (route.path.includes('logout')) {
    return true
  }
  const user = store.get('user/user')
  const role = user?.role || {}
  const permissions = user?.permissions || []
  const currentPath = formatCurrentPath(route.path)
  const hasPermission = permissions.some((permission) => {
    const permissionRoute = permission.split(':')
    permissionRoute.pop()
    return permissionRoute.join('/') === currentPath
  })
  if (
    !hasPermission &&
    route.path !== DEFAULT_ENDPOINT.home &&
    !route.path.includes('logout')
  ) {
    switch (role.name) {
      case USER_ROLE.admin:
        redirect(DEFAULT_ENDPOINT.admin)
        break
      case USER_ROLE.owner:
        redirect(DEFAULT_ENDPOINT.owner)
        break
      default:
        redirect(DEFAULT_ENDPOINT.home)
        break
    }
  }
}

function formatCurrentPath(currentPath) {
  return (
    'fe' +
    currentPath
      .split('/')
      .map((path) => {
        if (!isNaN(+path) && path !== '') {
          return '_id'
        }
        return path
      })
      .join('/')
  )
}
