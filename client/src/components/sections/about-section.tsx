import { Check } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heebo font-bold text-neutral-800 mb-3 text-center">מה זה The Push?</h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg rtl-specific">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <p className="text-lg text-neutral-700 mb-6">
                  תהליך ליווי אישי למפתח שרוצה להפוך למנהל שלא רק מגיב — אלא בונה מערכת שמובילה אותו קדימה.
                </p>
                <p className="text-lg text-neutral-700 mb-6">
                  לא קואוצ'ינג כללי. לא תיאוריה. זו התקנת מערכת הפעלה חדשה להתנהלות ניהולית.
                </p>
                <div className="mt-8">
                  <h3 className="text-xl font-heebo font-bold text-neutral-800 mb-4">אופן הליווי:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 ml-2 h-5 w-5" />
                      <span>6-8 שבועות של ליווי אישי</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 ml-2 h-5 w-5" />
                      <span>שיחה שבועית 1:1 (60 דקות)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 ml-2 h-5 w-5" />
                      <span>תמיכה בוואטסאפ לאורך כל התקופה</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 ml-2 h-5 w-5" />
                      <span>תרגול שיחות, סימולציות, ליווי צמוד במצבים אמיתיים</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1374" 
                  alt="Coaching session with tech professional" 
                  className="w-full h-auto rounded-xl shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
