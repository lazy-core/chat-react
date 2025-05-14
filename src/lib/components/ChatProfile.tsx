import React from 'react'

export interface PatientDetails {
  patientName: string
  appointmentDate: string
  visitReason: string
  status: string
}

export interface ChatProfileProps {
  name: string
  avatar?: string
  isOnline?: boolean
  patientDetails?: PatientDetails
  bookingNote?: string
  onClose?: () => void
  onBackClick?: () => void // New prop for mobile navigation
}

export const ChatProfile: React.FC<ChatProfileProps> = ({
  name,
  avatar,
  isOnline = false,
  patientDetails,
  bookingNote,
  onClose,
  onBackClick,
}) => {
  const [patientDetailsOpen, setPatientDetailsOpen] = React.useState(true)
  const [bookingStatusOpen, setBookingStatusOpen] = React.useState(false)

  return (
    <div className="w-full max-w-md h-full bg-white border-l border-gray-200 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex items-center">
          {onBackClick && (
            <button 
              onClick={onBackClick}
              className="mr-2 md:hidden" // Only visible on mobile
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <h2 className="text-xl font-bold">Details</h2>
        </div>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center p-6 border-b border-gray-200">
        {avatar && (
          <div className="relative mb-4">
            <img src={avatar} alt={`${name}'s avatar`} className="w-20 h-20 rounded-full object-cover" />
            {isOnline && (
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            )}
          </div>
        )}
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      </div>

      {/* Patient Details Section */}
      <div className="border-b border-gray-200">
        <button 
          className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
          onClick={() => setPatientDetailsOpen(!patientDetailsOpen)}
        >
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Patient Details</span>
          </div>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 transition-transform ${patientDetailsOpen ? 'transform rotate-180' : ''}`} 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        {patientDetailsOpen && patientDetails && (
          <div className="px-4 pb-4">
            <div className="flex justify-between py-3 border-b border-gray-100">
              <span className="text-gray-500">Patient Name</span>
              <span className="font-medium">{patientDetails.patientName}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-100">
              <span className="text-gray-500">Appointment Date</span>
              <span className="font-medium">{patientDetails.appointmentDate}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-100">
              <span className="text-gray-500">Visit Reason</span>
              <span className="font-medium">{patientDetails.visitReason}</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-gray-500">Status</span>
              <span className="font-medium">{patientDetails.status}</span>
            </div>
          </div>
        )}
      </div>

      {/* Booking Status Section */}
      <div className="border-b border-gray-200">
        <button 
          className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
          onClick={() => setBookingStatusOpen(!bookingStatusOpen)}
        >
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Booking Status</span>
          </div>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 transition-transform ${bookingStatusOpen ? 'transform rotate-180' : ''}`} 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        {bookingStatusOpen && (
          <div className="px-4 pb-4">
            <h4 className="uppercase text-xs font-semibold text-gray-500 mb-2">BOOKING NOTE</h4>
            <p className="text-gray-700">{bookingNote || 'No booking notes available.'}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatProfile