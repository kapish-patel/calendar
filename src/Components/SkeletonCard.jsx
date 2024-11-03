/**
 * A UI component to display a loading skeleton for a card.
 * 
 * @returns a UI component to display a loading skeleton
 */
function SkeletonCard() {
    return (
      <div className="flex border border-gray-300 rounded-lg p-6 justify-between m-4 shadow-lg bg-white animate-pulse">
        <div className="flex flex-col space-y-2 w-2/3">
          <div className="h-8 bg-gray-300 rounded w-3/4" />
          <div className="h-4 bg-gray-300 rounded w-full" />
          <div className="h-4 bg-gray-300 rounded w-5/6" />
        </div>
        <div className="flex items-center justify-center bg-gray-100 rounded-lg p-4 w-1/3">
          <div className="h-6 bg-gray-300 rounded w-full" />
        </div>
      </div>
    );
  }
  
  export default SkeletonCard;
  