import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 shadow-soft backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="font-playfair text-2xl font-bold text-primary hover:text-accent transition-colors"
          >
            La Cucina Bella
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`hover:text-accent transition-colors font-medium ${
                isActive("/") ? "text-accent" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-accent transition-colors font-medium ${
                isActive("/about") ? "text-accent" : "text-foreground"
              }`}
            >
              About
            </Link>
            <Link
              to="/menu"
              className={`hover:text-accent transition-colors font-medium ${
                isActive("/menu") ? "text-accent" : "text-foreground"
              }`}
            >
              Menu
            </Link>
            <Link
              to="/gallery"
              className={`hover:text-accent transition-colors font-medium ${
                isActive("/gallery") ? "text-accent" : "text-foreground"
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`hover:text-accent transition-colors font-medium ${
                isActive("/contact") ? "text-accent" : "text-foreground"
              }`}
            >
              Contact
            </Link>
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/contact">Reserve Table</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`hover:text-accent transition-colors font-medium text-left py-2 ${
                  isActive("/") ? "text-accent" : "text-foreground"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`hover:text-accent transition-colors font-medium text-left py-2 ${
                  isActive("/about") ? "text-accent" : "text-foreground"
                }`}
              >
                About
              </Link>
              <Link
                to="/menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`hover:text-accent transition-colors font-medium text-left py-2 ${
                  isActive("/menu") ? "text-accent" : "text-foreground"
                }`}
              >
                Menu
              </Link>
              <Link
                to="/gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`hover:text-accent transition-colors font-medium text-left py-2 ${
                  isActive("/gallery") ? "text-accent" : "text-foreground"
                }`}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`hover:text-accent transition-colors font-medium text-left py-2 ${
                  isActive("/contact") ? "text-accent" : "text-foreground"
                }`}
              >
                Contact
              </Link>
              <Button
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full"
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Reserve Table
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
