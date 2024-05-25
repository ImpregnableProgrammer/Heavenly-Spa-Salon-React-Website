import Image from "next/image";
export default function HomePage() {
  return (
    <div className="relative h-[30dvh] w-screen">
      {/* Text on the main page's top image */}
      <div className="relative top-[30%] z-20 w-full text-4xl font-bold text-green-500">
        <text className="relative left-[35%]">Heavenly Spa & Salon</text>
        <br />
        <text className="relative left-[38%] text-base italic">
          Have you pampered yourself today?
        </text>
      </div>
      <Image
        src="/images/HeavenlySpa&Salon.jpg"
        //width={500}
        //height={500}
        fill={true}
        className="z-10 w-full object-cover object-[0%_50%] brightness-[40%]"
        alt="Image of the front of the salon"
        placeholder="blur"
        blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8689dDwAFAAG4Crkt0gAAAABJRU5ErkJggg=="
      />
    </div>
  );
}
