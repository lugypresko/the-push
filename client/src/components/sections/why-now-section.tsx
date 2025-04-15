import { AlertCircle } from "lucide-react";

export default function WhyNowSection() {
  return (
    <section className="py-20 bg-neutral-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1471" 
                alt="Team of tech professionals in discussion" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            <div className="rtl-specific">
              <h2 className="text-3xl md:text-4xl font-heebo font-bold mb-6">למה דווקא עכשיו?</h2>
              <p className="text-lg opacity-90 mb-6">
                אנשים חכמים דוחים החלטות. תמיד יש עוד פיצ'ר, עוד דדליין, עוד רבעון. אבל אם אתה מרגיש שאתה דורך במקום — זה לא ישתנה מעצמו.
              </p>
              <p className="text-lg opacity-90 mb-8">
                הקריירה שלך לא תעצור — עד שתחליט לעצור רגע ולכוון אותה.
              </p>
              
              <h3 className="text-2xl font-heebo font-bold mb-4">ומה תגיד בבית?</h3>
              <div className="bg-white/10 p-6 rounded-lg border border-white/20">
                <p className="italic opacity-90">
                  "זה לא עוד קורס ניהול. זה תהליך שיעזור לי להוביל במקום להיגרר. זה ייתן לי שקט, ביטחון, מיקוד — כדי שאוכל גם להתקדם, גם להשפיע, וגם להיות נוכח בבית."
                </p>
              </div>
              
              <div className="mt-8">
                <p className="text-lg font-bold flex items-center">
                  <AlertCircle className="text-orange-500 ml-2 h-5 w-5" />
                  זה לא מתאים לכולם.
                </p>
                <p className="opacity-90 mt-2">
                  אם אתה מחפש מישהו שייתן לך פתרונות קסם — זה לא בשבילך. אם אתה מוכן לעבוד, להשתנות, ולעלות רמה — בוא נדבר.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
