import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="pt-24 relative overflow-hidden">
      <div className="relative bg-neutral-800">
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1470" 
            alt="Professional coaching session" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 text-right rtl-specific">
              <div className="max-w-3xl mr-auto ml-4 md:ml-12">
                <h1 className="font-heebo text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                  הגיע הזמן לשדרג
                  <span className="text-orange-500 block mt-2">The Push</span>
                </h1>
                <p className="text-xl md:text-2xl text-white opacity-90 mb-8">
                  מערכת הפעלה חדשה למפתחים שרוצים להפסיק לקודד ולהתחיל להוביל
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 rtl-specific justify-start">
                  <a href="#pricing" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md text-center transition-colors duration-300 order-2 sm:order-1">
                    התחל את המסלול שלך
                  </a>
                  <a href="#about" className="inline-block bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-md text-center transition-colors duration-300 border border-white/30 order-1 sm:order-2">
                    קרא עוד
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
