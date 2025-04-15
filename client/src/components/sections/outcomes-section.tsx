import { Check, Rocket } from "lucide-react";

export default function OutcomesSection() {
  const outcomes = [
    {
      icon: <Check className="h-6 w-6" />,
      title: "שיטה אישית לניהול צוות",
      description: "דרך עבודה יומיומית שמתאימה למי שאתה"
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "נראות גבוהה יותר",
      description: "מול הנהלה וחברה"
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "שפה ניהולית אפקטיבית",
      description: "ברורה ומקצועית שיוצרת השפעה"
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "ביטחון להוביל שיחות מורכבות",
      description: "מול צוות, הנהלה, ומקבלי החלטות"
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "מסלול קידום אישי",
      description: "מוגדר ובר ביצוע"
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "חיבור טוב יותר",
      description: "בין העבודה לחיים האישיים"
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "שקט. פחות לחץ",
      description: "יותר שליטה ומיקוד"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "הובלה אמיתית",
      description: "לא מנהל. מוביל.",
      special: true
    }
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heebo font-bold mb-12 text-center">מה יוצא לי מזה?</h2>
        <p className="text-lg opacity-90 max-w-3xl mx-auto text-center mb-12">איך זה ישפיע על הקריירה שלך כבר בחודשים הקרובים?</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {outcomes.map((outcome, index) => (
            <div 
              key={index} 
              className={`${outcome.special ? 'bg-orange-500' : 'bg-white/10 backdrop-blur-sm hover:bg-white/15'} p-6 rounded-lg transition-colors duration-300 rtl-specific`}
            >
              <div className={`mb-3 ${outcome.special ? 'text-white' : 'text-orange-500'} text-xl`}>
                {outcome.icon}
              </div>
              <h3 className="font-heebo font-medium text-lg mb-2">{outcome.title}</h3>
              <p className="opacity-90">{outcome.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#pricing" className="inline-block bg-white text-primary hover:bg-neutral-100 font-medium py-3 px-8 rounded-md transition-colors duration-300">
            אני מוכן להתחיל
          </a>
        </div>
      </div>
    </section>
  );
}
