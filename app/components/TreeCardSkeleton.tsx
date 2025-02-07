export default function TreeCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-sm h-full animate-pulse">
      {/* Image Skeleton */}
      <div className="relative aspect-[4/3] rounded-t-lg bg-gray-200" />

      {/* Content Container */}
      <div className="p-3 flex flex-col">
        {/* Title Skeleton */}
        <div className="mb-1.5">
          <div className="h-5 bg-gray-200 rounded w-3/4 mb-1" />
          <div className="h-3 bg-gray-200 rounded w-1/2" />
        </div>

        {/* Price Skeleton */}
        <div className="mb-2">
          <div className="h-5 bg-gray-200 rounded w-1/3" />
          <div className="h-3 bg-gray-200 rounded w-1/4 mt-1" />
        </div>

        {/* Description Skeleton */}
        <div className="mb-3 flex-grow">
          <div className="h-3 bg-gray-200 rounded w-full mb-1" />
          <div className="h-3 bg-gray-200 rounded w-4/5" />
        </div>

        {/* Tags Skeleton */}
        <div className="flex flex-wrap gap-1 mt-auto">
          <div className="h-4 bg-gray-200 rounded-full w-16" />
          <div className="h-4 bg-gray-200 rounded-full w-20" />
          <div className="h-4 bg-gray-200 rounded-full w-14" />
        </div>
      </div>
    </div>
  )
} 