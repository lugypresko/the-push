import { User, Award, TrendingUp } from "lucide-react";

export default function InstructorSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heebo font-bold text-neutral-800 mb-10 text-center">מוביל התכנית: מי אני ולמה אפשר לסמוך עליי?</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-2/5">
              <div className="relative bg-neutral-900 rounded-xl shadow-md" style={{ maxWidth: "300px", margin: "0 auto" }}>
                <img 
                  src="/assets/WhatsApp_Image_2023-06-22_at_13.37.06-removebg-preview.png" 
                  alt="איתי פוירשטיין" 
                  className="w-full h-auto rounded-xl mx-auto"
                  style={{ maxHeight: "350px", objectFit: "contain" }}
                />
              </div>
              
              <div className="bg-white mx-auto w-3/4 mt-4 rounded-lg shadow-lg p-4 text-center">
                <h3 className="text-xl font-heebo font-bold text-neutral-800">איתי פוירשטיין</h3>
                <p className="text-primary font-medium">מנטור ומוביל תכניות מנהיגות</p>
              </div>
            </div>
            
            <div className="w-full md:w-3/5 rtl-specific">
              <p className="text-lg text-neutral-700 mb-6">
                אני איתי פוירשטיין. ב-20 השנים האחרונות ליוויתי מנהלים טכנולוגיים, הובלתי צוותים, ניהלתי מוצרים ותהליכים בחברות מובילות — וראיתי שוב ושוב איך מפתח חכם שלא לומד להוביל — נתקע מאחור.
              </p>
              <p className="text-lg text-neutral-700 mb-8">
                אני לא יועץ תיאורטי. אני בא מהשטח. אני מבין את העולם שאתה חי בו — ומביא תהליך פרקטי, ממוקד, בלי סיפורים — אלא עם תוצאות שמדברות בשטח.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                  <div className="flex items-center mb-2">
                    <span className="bg-primary/10 text-primary p-2 rounded-full ml-3">
                      <User className="h-5 w-5" />
                    </span>
                    <h4 className="font-heebo font-bold">ניסיון מוכח</h4>
                  </div>
                  <p className="text-neutral-600 text-sm">
                    20 שנות ניסיון בעולם המוצר והניהול הטכנולוגי
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                  <div className="flex items-center mb-2">
                    <span className="bg-primary/10 text-primary p-2 rounded-full ml-3">
                      <Award className="h-5 w-5" />
                    </span>
                    <h4 className="font-heebo font-bold">הכשרה מעשית</h4>
                  </div>
                  <p className="text-neutral-600 text-sm">
                    מנטורינג תכליתי מבוסס תוצאות בעולם האמיתי
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                  <div className="flex items-center mb-2">
                    <span className="bg-primary/10 text-primary p-2 rounded-full ml-3">
                      <TrendingUp className="h-5 w-5" />
                    </span>
                    <h4 className="font-heebo font-bold">תוצאות מוכחות</h4>
                  </div>
                  <p className="text-neutral-600 text-sm">
                    בוגרי התכנית משתלבים בתפקידי ניהול והובלה
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}