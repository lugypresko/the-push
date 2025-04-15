import { Check } from "lucide-react";

export default function PricingSection() {
  // Define the pricing plans with their features
  const plans = [
    {
      name: "מסלול קצר",
      description: "למי שרוצה להתחיל בזהירות",
      price: "₪6,000",
      features: [
        "6 שבועות",
        "6 פגישות שבועיות",
        "מיקוד באתגר אחד",
        "הכרות עם הגישה",
        "בניית תשתית ראשונית"
      ],
      isFeatured: false
    },
    {
      name: "מסלול מלא",
      description: "למי שבא לעבוד ולהתקדם",
      price: "₪10,000",
      features: [
        "10 שבועות",
        "10 פגישות שבועיות",
        "תהליך מלא",
        "בניית מערכת אישית",
        "תרגול מעשי",
        "Roadmap לקידום"
      ],
      isFeatured: true
    },
    {
      name: "מסלול פרימיום",
      description: "למי שרוצה ליווי מלא ומותאם",
      price: "₪15,000",
      features: [
        "16 שבועות",
        "ליווי מותאם אישית",
        "עבודה לפי קצב אישי",
        "תמיכה יומיומית",
        "בניית מסלול אסטרטגי מדויק"
      ],
      isFeatured: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heebo font-bold text-neutral-800 mb-3 text-center">המסלולים שלנו</h2>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto text-center mb-16">תכנית אישית המותאמת לצרכים שלך</p>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`
                  flex flex-col
                  rounded-lg border 
                  ${plan.isFeatured 
                    ? 'border-2 border-primary shadow-xl bg-primary/5' 
                    : 'border-neutral-200 shadow-md bg-white'}
                `}
              >
                <div className="p-6 text-center">
                  <h3 className="text-xl font-heebo font-bold text-neutral-800 mb-2">{plan.name}</h3>
                  <p className="text-neutral-600 text-lg font-bold">
                    {plan.price}
                  </p>
                  <p className="text-neutral-600 mt-2 text-sm">
                    {plan.description}
                  </p>
                </div>
                
                <div className="p-6 pt-0 flex-grow">
                  <ul className="space-y-3 rtl-specific">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-primary ml-2 mt-0.5">
                          <Check className="h-5 w-5" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 pt-0 mt-auto">
                  <a 
                    href="#contact" 
                    className={`
                      block text-center
                      py-3 px-4 rounded-md 
                      font-medium transition-colors duration-300
                      ${plan.isFeatured 
                        ? 'bg-primary hover:bg-primary/90 text-white' 
                        : 'bg-neutral-800 hover:bg-neutral-900 text-white'}
                    `}
                  >
                    בחר מסלול
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-neutral-50 p-8 rounded-xl border border-neutral-200 rtl-specific">
            <p className="text-lg text-neutral-700 mb-4">
              רוב המנהלים שבוחרים להיכנס ל-The Push — הולכים על המסלול המלא. למה? כי הוא בנוי נכון. כי הוא מאפשר לך תהליך אמיתי בלי למהר — ובלי למתוח את זה לשנה. כי אתה לא כאן כדי לבדוק — אתה כאן כדי לזוז.
            </p>
            <p className="text-lg text-neutral-700">
              במקרים מסוימים אני ממליץ בעצמי להתחיל במסלול קצר — כשזה באמת מתאים. אבל ברוב המקרים — המסלול המלא נותן תוצאה אמיתית בזמן נכון.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
