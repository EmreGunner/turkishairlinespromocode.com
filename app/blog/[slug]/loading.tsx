import { Skeleton } from "@/components/ui/skeleton"
import PageTransition from '@/components/PageTransition'

export default function BlogLoading() {
  return (
    <PageTransition>
      <div className="bg-gray-50 min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <Skeleton className="aspect-[16/9] rounded-lg mb-8" />
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-20" />
              </div>
              <Skeleton className="h-10 w-3/4" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
} 