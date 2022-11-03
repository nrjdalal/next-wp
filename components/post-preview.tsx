import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({ title, coverImage, date, excerpt, author, slug }) {
  return (
    <div>
      <div className="mb-5">{coverImage && <CoverImage title={title} coverImage={coverImage} slug={slug} />}</div>
      <h3 className="text-2xl font-medium mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline" dangerouslySetInnerHTML={{ __html: title }}></Link>
      </h3>
      <div className="text-lg leading-relaxed mb-4 line-clamp-2" dangerouslySetInnerHTML={{ __html: excerpt }} />
      <div className="mb-4 flex justify-between items-center">
        <Date dateString={date} />
        <Avatar author={author} />
      </div>
      {/* <Avatar author={author} /> */}
    </div>
  )
}
