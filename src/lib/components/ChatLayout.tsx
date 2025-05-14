import React, { useState, useEffect } from 'react'

export interface ChatLayoutProps {
  renderChatList: () => React.ReactNode
  renderChatWindow: (props: { onBackClick: () => void }) => React.ReactNode
  renderChatProfile?: (props: { onBackClick: () => void }) => React.ReactNode
  showProfile?: boolean
  selectedChatId?: string | null
}

export const ChatLayout: React.FC<ChatLayoutProps> = ({
  renderChatList,
  renderChatWindow,
  renderChatProfile,
  showProfile = false,
  selectedChatId,
}) => {
  const [activeView, setActiveView] = useState<'list' | 'chat' | 'profile'>('list')

  // On mobile, we'll show only one view at a time
  const handleChatBackClick = () => setActiveView('list')
  const handleProfileBackClick = () => setActiveView('chat')

  // When a chat is selected, switch to chat view on mobile
  useEffect(() => {
    if (selectedChatId && window.innerWidth < 768) {
      setActiveView('chat')
    }
  }, [selectedChatId])

  // When profile is opened, switch to profile view on mobile
  useEffect(() => {
    if (showProfile && window.innerWidth < 768) {
      setActiveView('profile')
    }
  }, [showProfile])

  return (
    <div className='flex h-dvh overflow-hidden'>
      {/* Chat List - hidden on mobile when not active */}
      <div
        className={`
        ${activeView !== 'list' ? 'hidden md:block' : ''} 
        w-full md:w-1/3 lg:w-1/4 h-full overflow-hidden
      `}
      >
        {renderChatList()}
      </div>

      {/* Chat Window - hidden on mobile when not active */}
      <div
        className={`
        ${activeView !== 'chat' ? 'hidden md:block' : ''} 
        ${showProfile ? 'md:block lg:block' : 'md:flex-1'} 
        w-full md:w-2/3 lg:w-2/4 h-full overflow-hidden
      `}
      >
        {renderChatWindow({ onBackClick: handleChatBackClick })}
      </div>

      {/* Chat Profile - hidden when not active or not showing */}
      {showProfile && renderChatProfile && (
        <div
          className={`
          ${activeView !== 'profile' ? 'hidden lg:block' : ''} 
          w-full lg:w-1/4 h-full overflow-hidden
        `}
        >
          {renderChatProfile({ onBackClick: handleProfileBackClick })}
        </div>
      )}
    </div>
  )
}

export default ChatLayout
