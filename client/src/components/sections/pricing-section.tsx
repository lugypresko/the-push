import { Check, X, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  // Define the features for comparison
  const features = [
    { id: "duration", name: "תקופת ליווי", category: "בסיס" },
    { id: "meetings", name: "מספר פגישות", category: "בסיס" },
    { id: "focus", name: "מיקוד", category: "תוכן" },
    { id: "personalization", name: "התאמה אישית", category: "תוכן" },
    { id: "roadmap", name: "Roadmap לקידום", category: "תוצאות" },
    { id: "pace", name: "קצב עבודה", category: "מתודולוגיה" },
    { id: "support", name: "תמיכה", category: "שירות" },
    { id: "strategy", name: "בניית אסטרטגיה", category: "תוצאות" },
  ];

  // Define the pricing plans with their features
  const plans = [
    {
      id: "short",
      name: "מסלול קצר",
      description: "למי שרוצה להתחיל בזהירות",
      price: "₪6,000",
      isFeatured: false,
      features: {
        duration: { value: "6 שבועות", included: true },
        meetings: { value: "6 פגישות", included: true },
        focus: { value: "אתגר אחד", included: true },
        personalization: { value: "בסיסית", included: true },
        roadmap: { value: "ראשוני", included: true },
        pace: { value: "מובנה", included: true },
        support: { value: "בסיסית", included: true },
        strategy: { value: "תשתית ראשונית", included: true },
      }
    },
    {
      id: "full",
      name: "מסלול מלא",
      description: "למי שבא לעבוד ולהתקדם",
      price: "₪10,000",
      isFeatured: true,
      features: {
        duration: { value: "10 שבועות", included: true },
        meetings: { value: "10 פגישות", included: true },
        focus: { value: "תהליך מלא", included: true },
        personalization: { value: "גבוהה", included: true },
        roadmap: { value: "מפורט", included: true },
        pace: { value: "מובנה עם גמישות", included: true },
        support: { value: "שוטפת בוואטסאפ", included: true },
        strategy: { value: "מערכת אישית מלאה", included: true },
      }
    },
    {
      id: "premium",
      name: "מסלול פרימיום",
      description: "למי שרוצה ליווי מלא ומותאם",
      price: "₪15,000",
      isFeatured: false,
      features: {
        duration: { value: "16 שבועות", included: true },
        meetings: { value: "16+ פגישות", included: true },
        focus: { value: "תהליך מקיף מורחב", included: true },
        personalization: { value: "מלאה", included: true },
        roadmap: { value: "אסטרטגי ארוך טווח", included: true },
        pace: { value: "גמיש לחלוטין", included: true },
        support: { value: "יומיומית", included: true },
        strategy: { value: "מסלול אסטרטגי מדויק", included: true },
      }
    }
  ];

  function getFeatureIcon(planId: string, featureId: string) {
    const plan = plans.find(p => p.id === planId);
    if (!plan) return <X className="h-5 w-5 text-red-500" />;
    
    const feature = plan.features[featureId as keyof typeof plan.features];
    
    if (!feature || !feature.included) {
      return <X className="h-5 w-5 text-red-500" />;
    }
    
    return <Check className="h-5 w-5 text-primary" />;
  }

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heebo font-bold text-neutral-800 mb-3 text-center">המסלולים שלנו</h2>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto text-center mb-10">תכנית אישית המותאמת לצרכים שלך</p>
        
        {/* Mobile View - Cards */}
        <div className="md:hidden">
          <div className="space-y-8">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`rounded-xl overflow-hidden border ${plan.isFeatured ? 'border-2 border-primary' : 'border-neutral-200'}`}
              >
                {plan.isFeatured && (
                  <div className="bg-primary text-white text-center py-1 text-sm font-medium">
                    המסלול המומלץ
                  </div>
                )}
                <div className={`p-6 ${plan.isFeatured ? 'bg-primary/5' : 'bg-neutral-50'}`}>
                  <h3 className="text-xl font-heebo font-bold text-neutral-800 mb-2 rtl-specific">{plan.name}</h3>
                  <p className="text-neutral-600 mb-4 rtl-specific">{plan.description}</p>
                  <div className="flex items-baseline rtl-specific">
                    <span className={`text-3xl font-bold ${plan.isFeatured ? 'text-primary' : 'text-neutral-800'}`}>{plan.price}</span>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <ul className="space-y-3 rtl-specific">
                    {features.map((feature) => (
                      <li key={feature.id} className="flex items-start justify-between">
                        <span className="text-neutral-700">{feature.name}</span>
                        <div className="flex items-center">
                          <span className="text-sm text-neutral-600 ml-2">
                            {plan.features[feature.id as keyof typeof plan.features]?.value || "-"}
                          </span>
                          {getFeatureIcon(plan.id, feature.id)}
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a
                      href="#contact"
                      className={`block text-center ${plan.isFeatured ? 'bg-primary hover:bg-primary-dark text-white' : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800'} font-medium py-3 px-4 rounded-md transition-colors duration-300 w-full`}
                    >
                      לפרטים נוספים
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Desktop View - Comparison Table */}
        <div className="hidden md:block max-w-6xl mx-auto overflow-hidden">
          <div className="bg-white rounded-xl border border-neutral-200 shadow-lg">
            {/* Table Header */}
            <div className="grid grid-cols-4 rtl-specific">
              <div className="p-6 border-b border-r border-neutral-200 bg-neutral-50">
                <span className="font-bold text-lg text-neutral-700">מאפיינים</span>
              </div>
              
              {plans.map((plan) => (
                <div 
                  key={plan.id} 
                  className={`p-6 text-center border-b border-r border-neutral-200 ${plan.isFeatured ? 'bg-primary/5 relative' : 'bg-neutral-50'}`}
                >
                  {plan.isFeatured && (
                    <div className="absolute top-0 right-0 left-0 bg-primary text-white text-center py-1 text-sm font-medium">
                      המסלול המומלץ
                    </div>
                  )}
                  <div className={plan.isFeatured ? 'pt-6' : ''}>
                    <h3 className="text-xl font-heebo font-bold text-neutral-800">{plan.name}</h3>
                    <p className="text-neutral-600 my-2">{plan.description}</p>
                    <div className="my-4">
                      <span className={`text-3xl font-bold ${plan.isFeatured ? 'text-primary' : 'text-neutral-800'}`}>
                        {plan.price}
                      </span>
                    </div>
                    <a
                      href="#contact"
                      className={`inline-block ${plan.isFeatured ? 'bg-primary hover:bg-primary-dark text-white' : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800'} font-medium py-2 px-6 rounded-md transition-colors duration-300`}
                    >
                      לפרטים נוספים
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Table Body - Group features by category */}
            {['בסיס', 'תוכן', 'מתודולוגיה', 'שירות', 'תוצאות'].map((category) => {
              const categoryFeatures = features.filter(f => f.category === category);
              if (categoryFeatures.length === 0) return null;
              
              return (
                <div key={category}>
                  <div className="grid grid-cols-4 rtl-specific bg-neutral-100">
                    <div className="p-4 border-b border-r border-neutral-200 font-bold text-neutral-700">
                      {category}
                    </div>
                    <div className="p-4 border-b border-r border-neutral-200"></div>
                    <div className="p-4 border-b border-r border-neutral-200"></div>
                    <div className="p-4 border-b border-r border-neutral-200"></div>
                  </div>
                  
                  {categoryFeatures.map((feature) => (
                    <div key={feature.id} className="grid grid-cols-4 rtl-specific">
                      <div className="p-4 border-b border-r border-neutral-200 bg-white">
                        <span className="font-medium text-neutral-700">{feature.name}</span>
                      </div>
                      
                      {plans.map((plan) => {
                        const featureInfo = plan.features[feature.id as keyof typeof plan.features];
                        return (
                          <div 
                            key={`${plan.id}-${feature.id}`} 
                            className={`p-4 text-center border-b border-r border-neutral-200 ${plan.isFeatured ? 'bg-white/60' : 'bg-white'}`}
                          >
                            <div className="flex flex-col items-center justify-center">
                              <span className="text-sm mb-1">{featureInfo?.value || "-"}</span>
                              {getFeatureIcon(plan.id, feature.id)}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
          
        <div className="mt-12 bg-neutral-50 p-8 rounded-xl border border-neutral-200 rtl-specific max-w-5xl mx-auto">
          <p className="text-lg text-neutral-700 mb-4">
            רוב המנהלים שבוחרים להיכנס ל-The Push — הולכים על המסלול המלא. למה? כי הוא בנוי נכון. כי הוא מאפשר לך תהליך אמיתי בלי למהר — ובלי למתוח את זה לשנה. כי אתה לא כאן כדי לבדוק — אתה כאן כדי לזוז.
          </p>
          <p className="text-lg text-neutral-700">
            במקרים מסוימים אני ממליץ בעצמי להתחיל במסלול קצר — כשזה באמת מתאים. אבל ברוב המקרים — המסלול המלא נותן תוצאה אמיתית בזמן נכון.
          </p>
        </div>
      </div>
    </section>
  );
}
