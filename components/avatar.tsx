import Image from 'next/image'

export default function Avatar({ author }) {
  const isAuthorHaveFullName = author?.node?.firstName && author?.node?.lastName
  const name = isAuthorHaveFullName ? `${author.node.firstName} ${author.node.lastName}` : author.node.name || null

  return (
    <div className="flex items-center">
      {/* <div className="w-6 h-6 relative mr-4">
        <Image src={author.node.avatar.url} className="rounded-full" alt={name} fill sizes="100vw" />
      </div> */}
      <div className="font-medium text-lg">{name}</div>
    </div>
  )
}
