import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-fjord.jpg";
import businessImage from "@/assets/business-meeting.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center">
        <img src={heroImage} alt="Scenic fjord landscape" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary-foreground mb-3 sm:mb-4 leading-tight">
            Empowering Businesses with Oracle Solutions
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-primary-foreground/90 mb-6 sm:mb-8">
            Habilite Consultancy provides expert IT consulting services to help organizations grow, transform, and succeed in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="/services" className="px-6 sm:px-8 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors text-sm sm:text-base">
              Our Services
            </a>
            <a href="/contact" className="px-6 sm:px-8 py-3 bg-primary-foreground text-foreground font-medium rounded hover:bg-primary-foreground/90 transition-colors text-sm sm:text-base">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-8 sm:mb-12">Our Main Features</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-secondary rounded-lg p-6 sm:p-10 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">Oracle Expertise</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Delivering enterprise-grade Oracle solutions tailored to your business needs.</p>
            </div>
            <div className="bg-secondary rounded-lg p-6 sm:p-10 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">Strategic Consulting</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Guiding organizations to transform with modern IT strategies.</p>
            </div>
            <div className="bg-accent rounded-lg p-6 sm:p-10 text-center sm:col-span-2 md:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold text-accent-foreground mb-3">Proven Results</h3>
              <p className="text-accent-foreground/80 text-sm sm:text-base">Helping clients achieve measurable success and sustainable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] flex items-center justify-center">
        <img src={businessImage} alt="Business expertise" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-3 sm:mb-4">
            Elevate Business with Integrated Expertise
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-primary-foreground/90">
            We combine technology and strategy to deliver scalable solutions for enterprises worldwide.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-8 sm:mb-12">What Our Clients Say</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { quote: "Habilite transformed our IT strategy and boosted our efficiency.", client: "Client A" },
              { quote: "Their Oracle expertise is unmatched and results-driven.", client: "Client B" },
              { quote: "We trust them as a long-term partner for growth.", client: "Client C" },
            ].map((t) => (
              <div key={t.client} className="bg-card rounded-lg p-6 sm:p-8 text-center shadow-sm">
                <p className="text-foreground italic mb-4 text-sm sm:text-base">"{t.quote}"</p>
                <p className="font-bold text-foreground text-sm sm:text-base">- {t.client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
