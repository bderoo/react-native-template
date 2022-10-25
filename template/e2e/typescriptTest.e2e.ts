import Fields from '@schemas/Fields'
import {
  by, device, element, expect,
} from 'detox'

describe('Login', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
    // await device.disableSynchronization()
  })

  it('show necessary inputs', async () => {
    await expect(element(by.id(`text-input-${Fields.userName}`))).toBeVisible()
    await expect(element(by.id(`text-input-${Fields.password}`))).toBeVisible()
    await expect(element(by.id('login-confirmation-button'))).toBeVisible()
    // await expect(element(by.id('welcome'))).toBeVisible()
  })

  /*
  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap()
    await expect(element(by.text('Hello!!!'))).toBeVisible()
  })

  it('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap()
    await expect(element(by.text('World!!!'))).toBeVisible()
  })
   */
})
