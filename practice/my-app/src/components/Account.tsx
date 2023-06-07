'use client'

import { useAccount, useEnsName } from 'wagmi'
import request from '../../utils/request'
import { useEffect } from 'react'

export function Account() {
  const { address } = useAccount()
  const { data: ensName } = useEnsName({ address })

  const signup = async () => {
    const reseponse = await request.get('/boards')
    console.log(reseponse.data)
  }
  

  useEffect(()=> {
    signup()
  }, [])

  return (
    <div>
      {ensName ?? address}
      {ensName ? ` (${address})` : null}
    </div>
  )
}
