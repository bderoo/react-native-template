/**
 * @format
 */
import './wdyr'

import start from './src/App'

if (__DEV__) {
  require('react-native-performance-flipper-reporter')
    .setupDefaultFlipperReporter()
}

start()
