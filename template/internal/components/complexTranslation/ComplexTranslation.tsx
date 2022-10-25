import { Body } from '@components/text'
import React from 'react'
import {
  DefaultNamespace, KeyPrefix, Namespace, TFuncKey, Trans, useTranslation,
} from 'react-i18next'

interface Props<
  K extends TFuncKey<N, TKPrefix> extends infer A ? A : never,
  N extends Namespace = DefaultNamespace,
  TKPrefix = undefined
  > {
  namespace: N
  i18nKey: K | K[]
  values: object
  Parent: typeof Body
  components?: { readonly [tagName: string]: React.ReactElement }
}

const ComplexTranslation = <
  K extends TFuncKey<N, TKPrefix> extends infer A ? A : never,
  N extends Namespace = DefaultNamespace,
  TKPrefix extends KeyPrefix<N> = undefined,
>({
    namespace,
    i18nKey,
    values,
    Parent = Body,
    components,
  }: Props<K, N, TKPrefix>) => {
  const { t } = useTranslation(namespace)
  return (
    // @ts-ignore typescript hates having to search for a type very deep, thinks it's a recursion, luckily it's only a compile-time warning
    <Trans
      ns={namespace}
      i18nKey={i18nKey}
      values={values}
      parent={Parent}
      components={{
        bold: <Parent style={{ fontWeight: 'bold' }} />,
        italic: <Parent style={{ fontStyle: 'italic' }} />,
        uppercase: <Parent style={{ textTransform: 'uppercase' }} />,
        ...components,
      }}
      t={t}
    />
  )
}

export default ComplexTranslation
