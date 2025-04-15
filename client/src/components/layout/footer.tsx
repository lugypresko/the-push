export default function Footer() {
  return (
    <footer className="py-10 bg-neutral-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-heebo font-bold">The Push</h2>
            <p className="text-white/70 mt-1">הגיע הזמן לשדרג</p>
          </div>
          
          <div className="text-center md:text-right rtl-specific">
            <p className="text-white/70">
              &copy; {new Date().getFullYear()} איתי פוירשטיין. כל הזכויות שמורות.
            </p>
            <p className="text-white/70 mt-1">
              <a href="#" className="text-white hover:text-accent">
                You are too smart to play small. Time to lead
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
