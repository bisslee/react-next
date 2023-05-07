import Image from "next/image";

export default function Background() {
    
    const imgUrl = "https://images.hdqwalls.com/download/star-wars-imperial-march-4k-ss-1920x1080.jpg"
    return (
        <div>
             <Image 
                src={imgUrl}
               fill
                alt='star wars background'
                className={`
                -z-50 opacity-20 object-cover h-full w-full
                `}
            />
        </div>
    )
}