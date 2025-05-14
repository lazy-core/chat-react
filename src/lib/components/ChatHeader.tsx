import React from 'react'

export interface ChatHeaderProps {
  name: string
  isOnline?: boolean
  avatar?: string
  onCallClick?: () => void
  onViewProfileClick?: () => void
  onBackClick?: () => void // New prop for mobile navigation
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  name,
  isOnline = false,
  avatar,
  onCallClick,
  onViewProfileClick,
  onBackClick,
}) => {
  return (
    <div className='flex items-center justify-between p-4 border-b border-gray-200'>
      <div
        className='flex items-center cursor-pointer'
        onClick={onViewProfileClick}
      >
        {onBackClick && (
          <button
            onClick={(e) => {
              e.stopPropagation() // Prevent triggering the parent onClick
              onBackClick()
            }}
            className='mr-2 md:hidden' // Only visible on mobile
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>
        )}
        {avatar && (
          <div className='relative mr-3'>
            <img
              src={avatar}
              alt={`${name}'s avatar`}
              className='w-10 h-10 rounded-full'
            />
            {isOnline && (
              <div className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white'></div>
            )}
          </div>
        )}
        <div>
          <h2 className='text-lg font-semibold'>{name}</h2>
          {isOnline && (
            <div className='flex items-center'>
              <div className='w-2 h-2 bg-green-500 rounded-full mr-2'></div>
              <span className='text-sm text-green-500'>Online</span>
            </div>
          )}
        </div>
      </div>
      <div className='flex items-center'>
        <button
          onClick={onCallClick}
          className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-500 hover:bg-blue-100'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
          </svg>
        </button>
      </div>
      {/* <button
        onClick={onViewProfileClick}
        className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 hidden md:block'
      >
        View profile
      </button> */}
    </div>
  )
}

export default ChatHeader
