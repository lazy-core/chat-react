import React from 'react'

export interface ChatListItemProps {
  avatar: string
  name: string
  preview: string
  timestamp: string
  isOnline?: boolean
  isUnread?: boolean
  isRead?: boolean
  unreadCount?: number // New prop for unread message count
  onClick?: () => void
}

export const ChatListItem: React.FC<ChatListItemProps> = ({
  avatar,
  name,
  preview,
  timestamp,
  isOnline = false,
  isUnread = false,
  isRead = false,
  unreadCount = 0, // Default to 0
  onClick,
}) => {
  return (
    <div
      className='flex p-4 hover:bg-gray-50 cursor-pointer'
      onClick={onClick}
    >
      {isUnread && (
        <div className='flex items-center mr-3'>
          <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
        </div>
      )}
      {!isUnread && <div className='w-2 mr-3'></div>}
      <div className='relative mr-4 flex-shrink-0 w-12 h-12'>
        <div className='w-12 h-12 rounded-full overflow-hidden bg-gray-200'>
          <img
            src={avatar}
            alt={`${name}'s avatar`}
            className='w-full h-full object-cover'
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/48'
            }}
          />
        </div>
        {isOnline && (
          <div className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white'></div>
        )}
      </div>
      <div className='flex-1 min-w-0'>
        <div className='flex justify-between mb-1'>
          <div className='font-semibold truncate'>{name}</div>
          <span className='text-sm text-gray-500 flex-shrink-0 ml-2'>{timestamp}</span>
        </div>
        <div className='text-gray-600 flex justify-between items-center'>
          <span className='line-clamp-2 pr-2'>{preview}</span>
          {isRead && unreadCount === 0 && (
            <span className='text-blue-500 flex-shrink-0 mt-1'>✓</span>
          )}
          {unreadCount > 0 && (
            <div className='flex-shrink-0 bg-green-500 text-white text-xs font-medium rounded-full w-5 h-5 min-w-5 flex items-center justify-center'>
              {unreadCount > 99 ? '99+' : unreadCount}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChatListItem
