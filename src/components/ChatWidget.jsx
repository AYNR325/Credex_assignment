import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChatBubbleLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'

const exampleQuestions = [
  'How do I sell my license?',
  'What types of licenses do you accept?',
  'How long does the process take?',
  'What are your fees?',
]

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const handleSend = (message) => {
    if (!message.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { type: 'user', content: message }])

    // Simulate AI response
    setTimeout(() => {
      const response = getAIResponse(message)
      setMessages((prev) => [...prev, { type: 'ai', content: response }])
    }, 1000)

    setInput('')
  }

  const getAIResponse = (message) => {
    // Simple response logic - in a real app, this would call an API
    const lowerMessage = message.toLowerCase()
    if (lowerMessage.includes('sell') || lowerMessage.includes('license')) {
      return 'To sell your license, simply fill out our contact form with your license details, and our team will get back to you with a valuation within 24 hours.'
    } else if (lowerMessage.includes('type') || lowerMessage.includes('accept')) {
      return 'We accept most major software licenses including Microsoft, Adobe, Autodesk, and many others. Contact us to check if your specific license is eligible.'
    } else if (lowerMessage.includes('process') || lowerMessage.includes('time')) {
      return 'The entire process typically takes 2-3 business days from initial contact to payment. This includes license verification, valuation, and transfer.'
    } else if (lowerMessage.includes('fee') || lowerMessage.includes('cost')) {
      return 'Our fees are competitive and transparent. We charge a small percentage of the final sale price, which varies based on the license type and value.'
    } else {
      return "I'm not sure about that. Please contact our support team for more specific information."
    }
  }

  return (
    <>
      {/* Chat button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >
        <ChatBubbleLeftIcon className="w-6 h-6" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-primary-600 text-white flex justify-between items-center">
              <h3 className="font-semibold">Chat with us</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <p className="mb-4">How can we help you today?</p>
                  <div className="space-y-2">
                    {exampleQuestions.map((question) => (
                      <button
                        key={question}
                        onClick={() => handleSend(question)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.type === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.type === 'user'
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend(input)
                }}
                className="flex space-x-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatWidget 