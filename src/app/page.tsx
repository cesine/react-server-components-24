import Image from 'next/image'

import reactSummit from './react-summit-us-2024.png'

export default function Home() {
  return (
    <div className="p-4">
      <Image
        src={reactSummit}
        alt="React Summit US – The Biggest React Conference in the US, November 19 &amp; 22, 2024 in New York"
      />
    </div>
  )
}
