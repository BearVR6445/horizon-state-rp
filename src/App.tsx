import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { Toaster } from "sonner";

export default function App() {
  const advertisement = useQuery(api.advertisements.getLatest);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 to-slate-800">
      <header className="sticky top-0 z-10 bg-black/50 backdrop-blur-sm p-4 flex justify-between items-center border-b border-slate-700">
        <div className="flex items-center gap-4">
          <img 
            src="https://cdn.discordapp.com/attachments/1132857286591783114/1361875269463310446/HSRP_No_BG.png?ex=6804f5ee&is=6803a46e&hm=4957b30c084f2b00f792b81e845b677b160155227d3f527ab94bae5bab76023f" 
            alt="Horizon State RP Logo" 
            className="h-12 w-auto"
          />
          <h2 className="text-xl font-semibold text-white">Horizon State RP</h2>
        </div>
        <SignOutButton />
      </header>
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-slate-700">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
              Welcome to Horizon State Roleplay
            </h1>
            <p className="text-2xl text-slate-300">Where Stories Come to Life</p>
          </div>

          <div className="space-y-6 text-slate-300 text-lg">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">🌟 Join Our Family</h2>
              <p>
                Step into a world where every player is more than just a member - they're family. At Horizon State RP, 
                we've cultivated a warm, welcoming community where your story matters and your voice is heard.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">🎭 Professional Roleplay Experience</h2>
              <p>
                Experience roleplay at its finest with our dedicated team of staff and players. We maintain high standards 
                while ensuring everyone has fun. Our server offers:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Immersive and realistic scenarios</li>
                <li>Professional staff team</li>
                <li>Regular events and activities</li>
                <li>Custom scripts and features</li>
                <li>Active community support</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">🤝 Community-Focused Environment</h2>
              <p>
                We pride ourselves on maintaining a balanced environment where serious roleplay meets genuine fun. 
                Our community values:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Respect and support for all members</li>
                <li>Open communication with staff</li>
                <li>Regular community feedback sessions</li>
                <li>Collaborative storytelling</li>
                <li>Friendly and helpful atmosphere</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 text-center">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">🌈 Join Us Today!</h2>
              <p className="mb-4">
                Ready to be part of something special? Join Horizon State RP and discover a community that feels like home.
              </p>
              <div className="flex justify-center gap-4">
                <a 
                  href="cfx.re/join/g76lzq" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Connect Now
                </a>
                <a 
                  href="https://discord.gg/mu5pAkJuPJ" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#5865F2] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Discord
                </a>
                <a 
                  href="https://patreon.com/HorizonStateRoleplay/shop" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Store
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Toaster />
    </div>
  );
}
