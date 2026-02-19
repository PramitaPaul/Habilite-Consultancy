import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Clients = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">Our Clients</h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-12">Trusted by leading organizations across industries.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { quote: "Habilite transformed our IT strategy and boosted our efficiency.", client: "Client A" },
              { quote: "Their Oracle expertise is unmatched and results-driven.", client: "Client B" },
              { quote: "We trust them as a long-term partner for growth.", client: "Client C" },
            ].map((t) => (
              <div key={t.client} className="bg-secondary rounded-lg p-5 sm:p-8 text-center">
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

export default Clients;
