export const load = ({ params }: { params: { npub: string } }) => {
  return {
    npub: params.npub,
  }
}

export const ssr = false
