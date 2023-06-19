'use client'

import { signIn } from 'next-auth/react'
import * as React from 'react'

import { Button, type ButtonProps } from '@/components/ui/button'
import { IconGitHub, IconSpinner } from '@/components/ui/icons'
import { cn } from '@/lib/utils'

interface LoginButtonProps extends ButtonProps {
  showGithubIcon?: boolean
  text?: string
}

export function LoginButton({
  text = 'Login with GitHub',
  showGithubIcon = true,
  className,
  ...props
}: LoginButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  return (
    <Button
      variant="outline"
      onClick={() => {
        setIsLoading(true)
        signIn('github', { callbackUrl: `/api/auth`, redirect: false })
      }}
      disabled={isLoading}
      className={cn(className)}
      {...props}
    >
      {isLoading ? (
        <IconSpinner className="mr-2 animate-spin" />
      ) : showGithubIcon ? (
        <IconGitHub className="mr-2" />
      ) : null}
      {text}
    </Button>
  )
}
