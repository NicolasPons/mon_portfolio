import React from "react";
import { Loader2 } from "lucide-react";

export default function VeilleTechnologique () {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="text-center p-8 max-w-lg shadow-lg rounded-2xl bg-primary">
        <h1 className="text-3xl font-bold text-white">Veille Technologique</h1>
        <p className="text-white mt-4">
          Cette section est en cours de développement. 
        </p>
        <div className="flex items-center justify-center mt-8">
          <Loader2 className="animate-spin text-accent w-10 h-10" />
        </div>
        <p className="text-sm text-white mt-4">
          Revenez bientôt pour explorer cette section !
        </p>
      </div>
    </div>
  );
};

