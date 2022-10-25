import { ParamListBase } from '@react-navigation/native'
import { NetworkRequest } from '@stores/NetworkRequestStore'

export interface RootStackParamList extends ParamListBase {
  __RequestInfo: {
    request: NetworkRequest,
  },
  AuthedStack: Record<string, unknown>,
  NonAuthedStack: Record<string, unknown>,
}

export enum Roots {
  __RequestInfo = '__RequestInfo',
  __NetworkRequests = '__NetworkRequests',
  InitialRoute = 'Login',
  AuthedStack = 'AuthedStack',
  NonAuthedStack = 'NonAuthedStack',
  DebugStack = 'DebugStack',

  // NonAuthedStack
  Login = 'Login',
  Register = 'Register',

  // AuthedStack
  Home = 'Home',
  Profile = 'Profile',
}
