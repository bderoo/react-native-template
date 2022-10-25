import { storiesOf } from '@storybook/react-native'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import PageContainer from '@/components/pageContainer/PageContainer'

import SecondaryButton from './SecondaryButton'

const styles = StyleSheet.create({
  separator: {
    marginBottom: 20,
  },
})

storiesOf('Components', module)
  .addDecorator((story) => (
    <PageContainer>
      {story()}
    </PageContainer>
  ))
  .add('Secondary Button', () => (
    <>
      <View style={styles.separator}>
        <SecondaryButton
          title="Hello"
          onPress={() => {
          }}
        />
      </View>
      <View style={styles.separator}>
        <SecondaryButton
          title=""
          onPress={() => {
          }}
        />
      </View>
      <View style={styles.separator}>
        <SecondaryButton
          title="Really really really really long button title"
          onPress={() => {
          }}
        />
      </View>
    </>
  ))
