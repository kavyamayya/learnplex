import { Button, Result } from 'antd'
import React from 'react'
import { useRouter } from 'next/router'

export default function InternalServerError({
  message = 'Sorry, something went wrong.',
}: {
  message?: string
}) {
  const router = useRouter()
  return (
    <Result
      status={'500'}
      title={'500 - Internal Server Error'}
      subTitle={message}
      extra={
        <Button type={'primary'} onClick={() => router.push('/')}>
          Back Home
        </Button>
      }
    />
  )
}
