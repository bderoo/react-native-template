import AsyncStorage from '@react-native-async-storage/async-storage'
import { snapshot } from 'valtio'
import type { ProxyPersistStorageEngine } from 'valtio-persist'
import ProxyWithPersist, { PersistStrategy } from 'valtio-persist'

import { User } from '@/typings/User'

type AuthStore = {
  accessToken: string | null,
  me: User | null,
  allowedUsers: Array<{ username: string, password: string }>,
}

const storage: ProxyPersistStorageEngine = {
  getItem: (name) => AsyncStorage.getItem(name),
  setItem: (name, value) => AsyncStorage.setItem(name, value),
  removeItem: (name) => AsyncStorage.removeItem(name),
  getAllKeys: () => AsyncStorage.getAllKeys() as Promise<string[]>,
}

export const authStore = ProxyWithPersist<AuthStore>({
  getStorage: () => storage,
  name: 'tokenStore',
  version: 0,
  initialState: {
    accessToken: '',
    me: null,
    allowedUsers: [],
  },
  migrations: {},
  persistStrategies: {
    accessToken: PersistStrategy.SingleFile,
    me: PersistStrategy.SingleFile,
  },
})

export const register = async (username: string, password: string) => {
  const { allowedUsers } = snapshot(authStore)
  if (allowedUsers.find((user) => user.username === username)) {
    throw new Error('User already exists')
  }
  authStore.allowedUsers.push({ username, password })
}

export const login = async (username: string, password: string) => {
  const { allowedUsers } = snapshot(authStore)
  if (!allowedUsers.some((user) => (
    user.username === username && user.password === password))
  ) {
    throw new Error('Invalid username or password')
  }
  authStore.me = {
    id: '1',
    username,
  }
  authStore.accessToken = `${password}123`
}

export const logout = async () => {
  authStore.me = null
  authStore.accessToken = null
}
