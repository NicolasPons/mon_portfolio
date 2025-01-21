'use client';
import Image from "next/image";

export default function Photo() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
                {/* Image */}
                <Image 
                    src="/assets/photos/photo.png" 
                    priority 
                    quality={100} 
                    fill 
                    alt="Photo" 
                    className="object-contain rounded-full border-[2px] border-accent"
                />
            </div>
        </div>
    );
}
