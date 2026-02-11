"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const HalideTopoHero = () => {
  const [count, setCount] = useState(0);

  return (
    <Card className="w-full max-w-md bg-black/60 backdrop-blur-xl border-white/10 text-white shadow-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Lead Generation Engine</CardTitle>
        <CardDescription className="text-white/60">
          Real-time business opportunity analysis
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center py-6">
        <div className="text-6xl font-black text-orange-500 mb-2 tabular-nums">
          {count}
        </div>
        <div className="text-sm font-medium uppercase tracking-widest text-white/40">
          Leads Analyzed
        </div>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button 
          variant="outline"
          onClick={() => setCount((prev) => Math.max(0, prev - 1))}
          className="flex-1 border-white/30 bg-white/5 hover:bg-white/20 hover:border-white/70 hover:scale-[1.05] text-white font-medium transition-all duration-200 active:scale-[0.95]"
        >
          Reset / Decrease
        </Button>
        <Button 
          onClick={() => setCount((prev) => prev + 1)}
          className="flex-1 bg-orange-600 hover:bg-orange-400 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] text-white font-bold shadow-[0_0_20px_rgba(234,88,12,0.3)] transition-all duration-200 active:scale-[0.95]"
        >
          Analyze Lead
        </Button>
      </CardFooter>
    </Card>
  );
};
