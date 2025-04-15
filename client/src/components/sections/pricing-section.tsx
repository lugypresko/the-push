import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  const pricingTiers = [
    {
      name: "מסלול קצר",
      description: "למי שרוצה להתחיל בזהירות",
      price: "₪6,000",
      features: [
        "6 שבועות של ליווי",
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
        "10 שבועות של ליווי",
        "10 פגישות שבועיות",
        "תהליך מלא עם בניית מערכת אישית",
        "תרגול מקיף",
        "Roadmap לקידום אישי"
      ],
      isFeatured: true
    },
    {
      name: "מסלול פרימיום",
      description: "למי שרוצה ליווי מלא ומותאם",
      price: "₪15,000",
      features: [
        "16 שבועות של ליווי",
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`relative ${tier.isFeatured ? 'md:transform md:scale-105' : ''}`}
              >
                <Card className={`h-full ${tier.isFeatured ? 'border-2 border-primary shadow-lg' : 'border border-neutral-200 shadow-md'}`}>
                  {tier.isFeatured && (
                    <div className="absolute top-0 right-0 left-0 bg-primary text-white text-center py-1 text-sm font-medium">
                      המסלול המומלץ
                    </div>
                  )}
                  <CardHeader className={`p-6 border-b border-neutral-200 ${tier.isFeatured ? 'bg-primary/5 mt-6' : 'bg-neutral-50'}`}>
                    <h3 className="text-xl font-heebo font-bold text-neutral-800 mb-2 rtl-specific">{tier.name}</h3>
                    <p className="text-neutral-600 mb-4 rtl-specific">{tier.description}</p>
                    <div className="flex items-baseline rtl-specific">
                      <span className={`text-3xl font-bold ${tier.isFeatured ? 'text-primary' : 'text-neutral-800'}`}>{tier.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3 rtl-specific">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="text-primary ml-2 mt-1 h-4 w-4" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <a 
                      href="#contact" 
                      className={`block text-center ${tier.isFeatured ? 'bg-primary hover:bg-primary-dark text-white' : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800'} font-medium py-3 px-4 rounded-md transition-colors duration-300 w-full`}
                    >
                      לפרטים נוספים
                    </a>
                  </CardFooter>
                </Card>
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
