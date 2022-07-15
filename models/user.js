import { apis } from '~/apis.js'

export const getMe = () => {
  return apis.api.get('me').json()
}
