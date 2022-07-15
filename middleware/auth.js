export default async ({ store, route }) => {
  try {
    if (route.path.includes('logout')) {
      return true
    }
    const user = store.get('user/user')
    if (!user && !route.path.includes('logout')) {
      await store.dispatch('user/fetchMe')
    }
  } catch (error) {
    console.log(error)
  }
}
