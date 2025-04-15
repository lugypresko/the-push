import { Check, ChevronLeft } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "הגדרת גרסת המנהל שאתה רוצה להיות",
      points: [
        "מי אתה באמת — בלי תחפושות ניהול קלאסיות",
        "איך לבנות זהות שתואמת את מי שאתה ואת מה שהחברה שלך צריכה"
      ]
    },
    {
      title: "מיתוג פנימי בארגון",
      points: [
        "איך יוצרים נראות של \"הבחור שצריך להיות בחדר כשיש החלטות\"",
        "בלי למכור את עצמך. בלי לחכות להזדמנות. אתה יוצר אותה."
      ]
    },
    {
      title: "חיבור לשפה עסקית",
      points: [
        "לדבר תוצאות, לא רק טכנולוגיה",
        "לדעת איך חושבים מנהלים, ולמה דווקא אתה צריך להיות שם"
      ]
    },
    {
      title: "מפת דרכים לתפקיד הבא שלך",
      points: [
        "בניית מסלול קידום אישי ריאלי ל־3–6 חודשים",
        "הכנה להצעות, ראיונות פנימיים, ומצבי אמת"
      ]
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heebo font-bold text-neutral-800 mb-3 text-center">מה נבנה בתהליך?</h2>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto text-center mb-16">תהליך שנבנה במיוחד למפתחים שרוצים להפוך למובילים טכנולוגיים</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-neutral-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 rtl-specific relative overflow-hidden">
              <div className="absolute top-0 right-0 h-2 w-full bg-primary"></div>
              <h3 className="text-xl font-heebo font-bold text-neutral-800 mb-4 flex items-center">
                <span className="text-orange-500 bg-orange-100 p-2 rounded-full ml-3 inline-flex items-center justify-center">
                  <Check className="h-4 w-4" />
                </span>
                {benefit.title}
              </h3>
              <ul className="space-y-2 text-neutral-700">
                {benefit.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <ChevronLeft className="text-primary ml-2 mt-1.5 h-4 w-4" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
