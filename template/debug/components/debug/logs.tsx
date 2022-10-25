import JsonRepresentation from '@components/jsonRepresentation'
import { Data } from '@components/jsonRepresentation/JsonRepresentation'
import PrimaryButton from '@components/primaryButton'
import { Body } from '@components/text'
import Clipboard from '@react-native-community/clipboard'
import { NavigationAction } from '@react-navigation/native'
import { Log as LogType } from '@stores/LoggerStore'
import { AxiosError } from 'axios'
import { format } from 'date-fns'
import React from 'react'
import {
  SafeAreaView, View,
} from 'react-native'

import { Colors } from '@/theme'

import { LevelView } from './styles'

type Props = {
  logs: Array<LogType>,
}

const isNavigationAction = (a: unknown): a is NavigationAction => (
  typeof a !== 'string'
    && !(a instanceof AxiosError)
    && !Array.isArray(a)
)

const Log = ({ log, idx }: { log: LogType, idx: number }) => (
  <LevelView key={idx} level={log.level}>
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flex: 1 }}>
        {formatMessage(format(log.date, 'HH:mm:ss.SSSS'))}
      </View>
      <PrimaryButton
        onPress={() => {
          Clipboard.setString(JSON.stringify(log.message, null, 2))
        }}
        title="Copy"
        style={() => ({
          height: 24,
          width: 80,
        })}
      />
    </View>
    {formatMessage(log.message, log.level)}
  </LevelView>
)

const formatMessage = (
  message: unknown,
  level: 'info' | 'error' | 'warn' | 'log' | 'silent' = 'log',
): GenericComponent => {
  const textColor = Colors.white
  if (typeof message === 'string') {
    return <Body key={Math.random()} color={textColor}>{message}</Body>
  }
  if (Array.isArray(message)) {
    return message.map((m) => formatMessage(m, level))
  }
  if (message instanceof AxiosError) {
    if (message.response) {
      return (
        <View key={Math.random()}>
          <Body color={textColor}>Error</Body>
          <Body color={textColor}>{`Url - ${message.request._url}}`}</Body>
          <Body color={textColor}>Response</Body>
          <JsonRepresentation
            data={message.response as unknown as Record<string, unknown>}
          />
        </View>
      )
    }
  }
  if (isNavigationAction(message)) {
    return (
      <View key={Math.random()}>
        <Body color={textColor}>{`Navigation Event: ${message.type}`}</Body>
        {message.payload && (
          <JsonRepresentation data={message.payload} />
        )}
        {message.source && (
          <Body color={textColor}>{message.source}</Body>
        )}
        {message.target && (
          <Body color={textColor}>{message.target}</Body>
        )}
      </View>
    )
  }

  return <JsonRepresentation key={Math.random()} data={message as Data} />
}

const Logs = ({ logs }: Props) => (
  <SafeAreaView>
    {logs.map((l, i) => (
      <Log key={`${l.date}${Math.random()}`} log={l} idx={i} />
    ))}
  </SafeAreaView>
)

export default Logs
