import React from 'react'

export interface ChatMessageProps {
  content: string
  timestamp: string
  isUser?: boolean
  avatar?: string
  senderName?: string
  imageUrl?: string
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  content,
  timestamp,
  isUser = false,
  avatar,
  senderName,
  imageUrl,
}) => {
  return (
    <div className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && avatar && (
        <div className="flex-shrink-0 mr-3">
          <img src={avatar} alt={senderName || 'Avatar'} className="w-10 h-10 rounded-full" />
        </div>
      )}
      <div className={`max-w-[70%]`}>
        {!isUser && senderName && (
          <div className="font-semibold mb-1">{senderName}</div>
        )}
        <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
          <div className={`p-3 rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
            <p className="whitespace-pre-wrap break-words">{content}</p>
            {imageUrl && (
              <div className="mt-2">
                <img src={imageUrl} alt="Message attachment" className="rounded-lg max-w-full" />
              </div>
            )}
          </div>
          <div className="text-xs text-gray-500 mt-1">{timestamp}</div>
        </div>
      </div>
    </div>
  )
}

export default ChatMessage