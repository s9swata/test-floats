import ChatInterface from '@/components/ChatInterface';

export default function Home() {
  return (
    <div className="h-screen bg-gray-900 text-white relative">
      {/* Main content area */}
      <div className="w-full h-full bg-gray-900">
        {/* This space can be used for other content */}
      </div>
      
      {/* Floating chat interface */}
      <ChatInterface />
    </div>
  );
}