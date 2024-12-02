import {Conversation} from './components/conversation'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#0f172a]  to-[#334155]">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
              Health Companion Assistant
            </span>
          </h1>
          <p className="text-lg text-gray-300">
            Be stress free with our AI assistant
          </p>
        </div>
        
        <div className="bg-gradient-to-t from-[#074173] via-[#1679ab] to-[#5debd7] backdrop-blur-lg rounded-2xl shadow-xl p-6 md:p-8">
          <Conversation />
        </div>
      </div>
    </main>
  )
}
