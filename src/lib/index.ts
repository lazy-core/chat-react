import './styles/index.css'

// Export all components
export { default as ChatList } from './components/ChatList'
export { default as ChatListItem } from './components/ChatListItem'
export { default as ChatWindow } from './components/ChatWindow'
export { default as ChatMessage } from './components/ChatMessage'
export { default as ChatInput } from './components/ChatInput'
export { default as ChatHeader } from './components/ChatHeader'
export { default as ChatProfile } from './components/ChatProfile'
export { default as ChatLayout } from './components/ChatLayout'

// Export types
export type { ChatListProps } from './components/ChatList'
export type { ChatListItemProps } from './components/ChatListItem'
export type { ChatWindowProps, Message } from './components/ChatWindow'
export type { ChatMessageProps } from './components/ChatMessage'
export type { ChatInputProps } from './components/ChatInput'
export type { ChatHeaderProps } from './components/ChatHeader'
export type { ChatProfileProps, PatientDetails } from './components/ChatProfile'
export type { ChatLayoutProps } from './components/ChatLayout'
