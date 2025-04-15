export default function TargetSection() {
  return (
    <section id="target" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heebo font-bold text-neutral-800 mb-12 text-center">למי זה מיועד?</h2>
          
          <div className="flex flex-col md:flex-row items-center bg-neutral-100 rounded-2xl overflow-hidden shadow-lg">
            <div className="w-full md:w-2/5 relative h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1588" 
                alt="Tech professional feeling stuck" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-3/5 p-8 rtl-specific">
              <p className="text-lg text-neutral-700 mb-4">
                אתה מפתח אנדרואיד עם יותר מ 10 שנות ניסיון. חכם. מקצוען. כולם מתייעצים איתך — אבל אתה לא בתמונה כשיש החלטות.
              </p>
              <p className="text-lg text-neutral-700 mb-4">
                מרוויח יפה, אבל עמוק בפנים אתה יודע: אתה נהיה יקר יותר, זקן יותר — והקריירה שלך תקועה באותו מסלול.
              </p>
              <p className="text-lg font-medium text-primary mb-4">
                הגיע הזמן לעבור צד.
              </p>
              <p className="text-lg text-neutral-700">
                לא למעלה — לא ניהול בכוח. אלא להוביל. מתוך שיטה, שפה, ותודעה ניהולית שלא תלויה באופי — אלא בפעולה.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
