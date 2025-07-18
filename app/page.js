// import Image from "next/image";

// import SwiperGallery
import SwiperGallery from "@/components/swiper/SwiperGallery";

import { Button } from "@/components/ui/button"
import { Ghost } from "lucide-react";
import { OutletBoundary } from "next/dist/server/app-render/entry-base";

export default function Home() {
  const count = 10
  return (<>
    <h1>Hello World lksjadlfjasldfja;s</h1>
    <Button variant="destructive">Click me</Button><br/>  // red
    <Button variant="outline">Click me</Button><br/>      // bordered
    <Button variant="secondary">Click me</Button><br/>    // grayish
    <Button variant="ghost">Click me</Button><br/>        // minimal
    <Button variant="link">Click me</Button><br/>         // looks like a link
    <Button className="bg-zinc-800 text-white hover:bg-zinc-700">Click me</Button><br/>
    <Button variant="shitman">💩 I'm Shitman</Button>
    
    
    {/* gallery */}
    {Array.from({ length: count }).map((_, i) => (
        <main key={i} className="p-10">
          <h1 className="text-3xl font-bold mb-6">🖼️ Modern Slider {i + 1}</h1>
          <SwiperGallery />
        </main>
      ))}

  </>);
}
