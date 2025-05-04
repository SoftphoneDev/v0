import React from 'react';
import { Phone, MessageSquare, Users, Settings } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="space-y-8">
      <h2 className="text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block">
        FEATURES
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white border-8 border-black p-6 shadow-brutal">
          <Phone className="h-12 w-12 text-red-600 mb-4" />
          <h3 className="text-2xl font-black mb-3 uppercase border-b-4 border-black pb-1">Crystal Clear Calls</h3>
          <p className="text-lg font-mono">High-definition audio quality for professional conversations.</p>
        </div>
        <div className="bg-white border-8 border-black p-6 shadow-brutal">
          <MessageSquare className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-2xl font-black mb-3 uppercase border-b-4 border-black pb-1">Integrated Messaging</h3>
          <p className="text-lg font-mono">Chat with colleagues and contacts directly within the app.</p>
        </div>
        <div className="bg-white border-8 border-black p-6 shadow-brutal">
          <Users className="h-12 w-12 text-yellow-500 mb-4" />
          <h3 className="text-2xl font-black mb-3 uppercase border-b-4 border-black pb-1">Team Collaboration</h3>
          <p className="text-lg font-mono">Manage contacts, presence status, and call transfers easily.</p>
        </div>
        <div className="bg-white border-8 border-black p-6 shadow-brutal">
          <Settings className="h-12 w-12 text-black mb-4" />
          <h3 className="text-2xl font-black mb-3 uppercase border-b-4 border-black pb-1">Customizable</h3>
          <p className="text-lg font-mono">Configure settings to fit your workflow and preferences.</p>
        </div>
      </div>
    </section>
  );
}
