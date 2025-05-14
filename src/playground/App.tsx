import { useState } from 'react'
import {
  ChatLayout,
  ChatList,
  ChatListItem,
  ChatWindow,
  ChatProfile,
} from '@lazy-core/lazy-chat-react'

function App() {
  // Sample data for chat list
  const chatItems = [
    {
      id: '1',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      name: 'Phoenix Baker',
      preview: 'Hey Liv — just wanted to say thanks for chasing up the release for me.',
      timestamp: '5min ago',
      isOnline: true,
      isUnread: true,
      isRead: true,
    },
    {
      id: '2',
      avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
      name: 'Andi Lane',
      preview: 'Hey Liv — just wanted to say thanks for chasing up the release for me.',
      timestamp: '20min ago',
      isOnline: true,
      isUnread: false,
      isRead: true,
    },
    {
      id: '3',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      name: 'Mollie Hall',
      preview: 'Hey Liv — just wanted to say thanks for chasing up the release for me.',
      timestamp: '1hr ago',
      category: 'Booking confirmed',
      isOnline: true,
      isUnread: true,
      isRead: true,
    },
    {
      id: '4',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      name: 'Mollie Hall',
      preview: 'Hey Liv — just wanted to say thanks for chasing up the release for me.',
      timestamp: '1hr ago',
      category: 'Booking confirmed',
      isOnline: true,
      isUnread: false,
      isRead: true,
    },
    {
      id: '5',
      avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
      name: 'Rosalee Melvin',
      preview: 'Hey Liv — just wanted to say thanks for chasing up the release for me.',
      timestamp: '2hr ago',
      category: 'Inquiry',
      isOnline: false,
      isUnread: false,
      isRead: true,
    },
    // New chat items
    {
      id: '6',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      name: 'Julian Patel',
      preview: 'Ive just sent over the updated designs. Let me know what you think!',
      timestamp: '3hr ago',
      isOnline: true,
      isUnread: true,
      isRead: false,
    },
    {
      id: '7',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      name: 'Olivia Martinez',
      preview: 'The client loved the presentation. They want to schedule a follow-up next week.',
      timestamp: '5hr ago',
      isOnline: false,
      isUnread: false,
      isRead: true,
    },
    {
      id: '8',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      name: 'Ethan Wilson',
      preview: 'Can we move our meeting to 3pm instead? Something came up with the dev team.',
      timestamp: 'Yesterday',
      isOnline: true,
      isUnread: true,
      isRead: false,
    },
    {
      id: '9',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
      name: 'Sophia Chen',
      preview: 'Ive reviewed the contract and everything looks good to proceed.',
      timestamp: 'Yesterday',
      isOnline: false,
      isUnread: false,
      isRead: true,
    },
    {
      id: '10',
      avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
      name: 'Marcus Johnson',
      preview: 'The new feature is ready for testing. Ive added you as a reviewer on GitHub.',
      timestamp: '2 days ago',
      isOnline: false,
      isUnread: false,
      isRead: true,
    },
  ]

  const [selectedChatId, setSelectedChatId] = useState<string | null>(null)
  const selectedChat = chatItems.find((item) => item.id === selectedChatId)
  const [showProfile, setShowProfile] = useState(false)

  // Sample messages for the selected chat
  const messages = [
    {
      id: '1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      timestamp: '09:16AM',
      isUser: false,
      senderName: 'Johnson Vagan',
      senderAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: '2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      timestamp: '09:16AM',
      isUser: true,
    },
    {
      id: '3',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      timestamp: '09:16AM',
      isUser: false,
      senderName: 'Johnson Vagan',
      senderAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: '4',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      timestamp: '09:16AM',
      isUser: true,
      imageUrl:
        'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
    },
  ]

  const handleComposeClick = () => {
    console.log('Compose new message')
  }

  const handleChatItemClick = (id: string) => {
    console.log(`Chat item clicked: ${id}`)
    setSelectedChatId(id)
  }

  const handleSendMessage = (message: string) => {
    console.log(`Sending message: ${message}`)
    // In a real app, you would add the message to your messages array
  }

  const handleCallClick = () => {
    console.log('Call clicked')
  }

  // Sample patient details
  const patientDetails = {
    patientName: 'Jeremy Caldwel',
    appointmentDate: '17th September 2023',
    visitReason: 'Illness',
    status: 'Not Confirmed',
  }

  const bookingNote =
    'Lorem ipsum dolor sit amet consectetur. Commodo duis elementum ut non magna id velit proin. Imperdiet sed a consectetur molestie nunc risus vulputate donec. Euismod semper eget'

  const handleViewProfileClick = () => {
    console.log('View profile clicked')
    setShowProfile(true)
  }

  const handleCloseProfile = () => {
    setShowProfile(false)
  }

  return (
    <div className='h-full'>
      <ChatLayout
        selectedChatId={selectedChatId}
        showProfile={showProfile}
        renderChatList={() => (
          <ChatList
            title='Messages'
            onComposeClick={handleComposeClick}
          >
            {chatItems.map((item) => (
              <ChatListItem
                key={item.id}
                avatar={item.avatar}
                name={item.name}
                preview={item.preview}
                timestamp={item.timestamp}
                isOnline={item.isOnline}
                isUnread={item.isUnread}
                isRead={item.isRead}
                unreadCount={item.isUnread ? 1 : 0}
                onClick={() => handleChatItemClick(item.id)}
              />
            ))}
          </ChatList>
        )}
        renderChatWindow={({ onBackClick }) =>
          selectedChat ? (
            <ChatWindow
              contact={{
                id: selectedChat.id,
                name: selectedChat.name,
                isOnline: selectedChat.isOnline,
                avatar: selectedChat.avatar,
              }}
              messages={messages}
              onSendMessage={handleSendMessage}
              onCallClick={handleCallClick}
              onViewProfileClick={handleViewProfileClick}
              onBackClick={onBackClick}
            />
          ) : (
            <div className='flex items-center justify-center h-full border border-gray-200 rounded-lg'>
              <p className='text-gray-500'>Select a conversation to start chatting</p>
            </div>
          )
        }
        renderChatProfile={({ onBackClick }) => (
          <ChatProfile
            name={selectedChat?.name || ''}
            avatar={selectedChat?.avatar}
            isOnline={selectedChat?.isOnline}
            patientDetails={patientDetails}
            bookingNote={bookingNote}
            onClose={handleCloseProfile}
            onBackClick={onBackClick}
          />
        )}
      />
    </div>
  )
}

export default App
