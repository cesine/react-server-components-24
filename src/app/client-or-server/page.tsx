import { Parent } from '@/components/server-or-client/parent'

export default function ClientOrServerPage() {
  return (
    <div className="flex flex-col gap-4 p-5">
      <h1 className="text-3xl font-bold">Client or Server Rendering Example</h1>
      <Parent />
    </div>
  )
}
