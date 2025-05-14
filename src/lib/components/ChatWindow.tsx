import React, { useRef, useEffect } from 'react'
import ChatHeader from './ChatHeader'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'

export interface Message {
  id: string
  content: string
  timestamp: string
  isUser: boolean
  senderName?: string
  senderAvatar?: string
  imageUrl?: string
}

export interface ChatWindowProps {
  contact: {
    id: string
    name: string
    isOnline?: boolean
    avatar?: string
  }
  messages: Message[]
  onSendMessage: (message: string) => void
  onCallClick?: () => void
  onViewProfileClick?: () => void
  onBackClick?: () => void // New prop for mobile navigation
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  contact,
  messages,
  onSendMessage,
  onCallClick,
  onViewProfileClick,
  onBackClick,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Group messages by date
  const groupedMessages: { [key: string]: Message[] } = {}
  messages.forEach((message) => {
    // This is a simplified grouping - in a real app, you'd parse the timestamp
    // and group by actual date
    const date =
      message.timestamp.includes('ago') ||
      message.timestamp.includes('min') ||
      message.timestamp.includes('hr')
        ? 'Today'
        : message.timestamp

    if (!groupedMessages[date]) {
      groupedMessages[date] = []
    }
    groupedMessages[date].push(message)
  })

  return (
    <div className='flex flex-col h-dvh border border-gray-200 rounded-lg overflow-hidden'>
      <ChatHeader
        name={contact.name}
        isOnline={contact.isOnline}
        avatar={contact.avatar}
        onCallClick={onCallClick}
        onViewProfileClick={onViewProfileClick}
        onBackClick={onBackClick}
      />

      <div className='flex-1 overflow-y-auto p-4'>
        {Object.entries(groupedMessages).map(([date, dateMessages]) => (
          <div key={date}>
            <div className='text-center my-4'>
              <span className='px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full'>
                {date}
              </span>
            </div>
            {dateMessages.map((message) => (
              <ChatMessage
                key={message.id}
                content={message.content}
                timestamp={message.timestamp}
                isUser={message.isUser}
                avatar={message.isUser ? undefined : message.senderAvatar}
                senderName={message.isUser ? undefined : message.senderName}
                imageUrl={message.imageUrl}
              />
            ))}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSend={onSendMessage} />
    </div>
  )
}

export default ChatWindow
