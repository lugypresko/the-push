import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-primary font-heebo font-bold text-2xl">
              The Push
            </a>
          </div>
          <div className="hidden md:block">
            <nav>
              <ul className="flex space-x-6 rtl-specific">
                <li><a href="#about" className="text-neutral-600 hover:text-primary font-medium">מה זה The Push?</a></li>
                <li><a href="#benefits" className="text-neutral-600 hover:text-primary font-medium">מה נבנה בתהליך?</a></li>
                <li><a href="#pricing" className="text-neutral-600 hover:text-primary font-medium">מסלולים</a></li>
                <li><a href="#contact" className="text-neutral-600 hover:text-primary font-medium">צור קשר</a></li>
              </ul>
            </nav>
          </div>
          <div className="block md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-neutral-600">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="block md:hidden mt-4 pb-4 rtl-specific">
            <ul className="space-y-3">
              <li><a href="#about" className="block text-neutral-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>מה זה The Push?</a></li>
              <li><a href="#benefits" className="block text-neutral-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>מה נבנה בתהליך?</a></li>
              <li><a href="#pricing" className="block text-neutral-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>מסלולים</a></li>
              <li><a href="#contact" className="block text-neutral-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>צור קשר</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
