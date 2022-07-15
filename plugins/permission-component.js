const hasPermission =
  ({ store, route }) =>
  (componentPath) => {
    const permissionsPage = store.get('user/user')?.permissions
    const currentPath = formatCurrentPath(route.path)
    const permissionComponents = permissionsPage
      .filter((permission) => {
        const permissionRoute = permission.split(':')
        permissionRoute.pop()
        return permissionRoute.join(':') === currentPath
      })
      .map((permission) => permission.split(':').pop())
      .filter((permission) => permission.includes(componentPath))
      .map((permission) => permission.split('/').pop())
    console.log(permissionComponents, permissionsPage, currentPath)
    return permissionComponents
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
      .join(':')
  )
}
export default (context, inject) => {
  inject('permissionComponent', hasPermission(context))
}
