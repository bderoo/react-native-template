import React from 'react'
import JSONTree from 'react-native-json-tree'

import { Colors } from '@/theme'

const jsonTheme = {
  base00: Colors.backgroundGray,
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#E06C75',
  base09: '#D19A66',
  base0A: '#f4bf75',
  base0B: '#98c379',
  base0C: '#a1efe4',
  base0D: '#ABB2BF',
  base0E: '#ae81ff',
  base0F: '#cc6633',
}

export type Data = unknown[] | string | number | undefined | null
  | Map<unknown, unknown> | Set<unknown> | boolean | Date | symbol
  | Record<string | number, unknown> | object

type Props = {
  data: Data
  hideRoot?: boolean
}

const JsonRepresentation = ({ data, hideRoot }: Props) => (
  <JSONTree
    data={data as Record<string, unknown>}
    theme={jsonTheme}
    invertTheme={false}
    hideRoot={hideRoot}
  />
)

export default JsonRepresentation
