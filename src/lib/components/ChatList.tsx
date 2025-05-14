import React from 'react';

export interface ChatListProps {
  children: React.ReactNode;
  title?: string;
  onComposeClick?: () => void;
}

export const ChatList: React.FC<ChatListProps> = ({ 
  children, 
  title = 'Messages',
  onComposeClick
}) => {
  return (
    <div className="w-full max-w-md border border-gray-200 rounded-lg overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold">{title}</h2>
        {onComposeClick && (
          <button 
            className="p-2 border border-gray-200 rounded hover:bg-gray-50"
            onClick={onComposeClick}
            aria-label="Compose new message"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
          </button>
        )}
      </div>
      <div className="divide-y divide-gray-200">
        {children}
      </div>
    </div>
  );
};

export default ChatList;