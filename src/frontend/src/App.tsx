import { useRef } from 'react';
import RegistrationForm from './components/RegistrationForm';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import { Button } from './components/ui/button';

export default function App() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Focus the first input after scroll
    setTimeout(() => {
      const firstInput = formRef.current?.querySelector('input');
      firstInput?.focus();
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Learn How Students Are Earning{' '}
              <span className="text-primary">₹30,000–₹50,000/Month</span> Online
              <br />
              By Learning Practical Digital Skills
            </h1>

            <div className="flex items-center justify-center gap-2 rounded-lg bg-accent/50 px-4 py-3 text-base font-bold sm:text-lg">
              <span className="text-2xl">🎯</span>
              <span>Free live workshop for students | Limited seats</span>
            </div>

            <div className="rounded-lg bg-primary/10 px-4 py-3 text-base font-bold text-primary sm:text-lg">
              ⚡ Start Earning Within 15 Days
            </div>
          </div>

          {/* Registration Form */}
          <div ref={formRef} className="mt-8">
            <RegistrationForm />
          </div>
        </div>
      </section>

      {/* Trust & Relatability Section */}
      <section className="bg-muted/30 px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl">
            What Makes This Workshop Different?
          </h2>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg bg-background p-4">
              <span className="text-xl">✓</span>
              <p className="text-base font-medium">Clear roadmap designed specifically for students</p>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-background p-4">
              <span className="text-xl">✓</span>
              <p className="text-base font-medium">Real skills that businesses actually pay for</p>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-background p-4">
              <span className="text-xl">✓</span>
              <p className="text-base font-medium">Step-by-step guidance from day one</p>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-background p-4">
              <span className="text-xl">✓</span>
              <p className="text-base font-medium">Perfect for students with free time after exams</p>
            </div>
          </div>

          <p className="mt-6 text-center text-lg font-bold text-primary sm:text-xl">
            This workshop gives you everything you need to start earning.
          </p>

          <div className="mt-6 text-center">
            <Button onClick={scrollToForm} size="lg" className="text-base font-bold sm:text-lg">
              👉 Register for Free Live Workshop
            </Button>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="bg-background px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl">
            What You'll Learn in This Live Workshop
          </h2>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg border-2 border-primary/20 bg-primary/5 p-4">
              <span className="text-xl">✓</span>
              <p className="text-base font-medium">
                How students can realistically earn <span className="font-bold text-primary">₹30K–₹50K/month</span>
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border-2 border-primary/20 bg-primary/5 p-4">
              <span className="text-xl">✓</span>
              <p className="text-base font-medium">Which digital skills actually pay in 2026</p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border-2 border-primary/20 bg-primary/5 p-4">
              <span className="text-xl">✓</span>
              <p className="text-base font-medium">How to start as a student with the right approach</p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border-2 border-primary/20 bg-primary/5 p-4">
              <span className="text-xl">✓</span>
              <p className="text-base font-medium">How to get your first online income step by step</p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border-2 border-primary/20 bg-primary/5 p-4">
              <span className="text-xl">✓</span>
              <p className="text-base font-medium">Best practices that successful students follow</p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border-2 border-primary/20 bg-primary/5 p-4">
              <span className="text-xl">✓</span>
              <p className="text-base font-medium">How to turn skills into consistent monthly income</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Register Section */}
      <section className="bg-muted/30 px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl">
            Why You Should Register for This Workshop
          </h2>
          
          <div className="space-y-4">
            <div className="rounded-lg bg-background p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-bold">Learn Real, In-Demand Skills</h3>
              <p className="text-sm text-muted-foreground">
                Master skills that businesses actively need and are willing to pay for in 2026
              </p>
            </div>
            <div className="rounded-lg bg-background p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-bold">Get a Clear Action Plan</h3>
              <p className="text-sm text-muted-foreground">
                No confusion, no guesswork — just a proven roadmap to start earning online
              </p>
            </div>
            <div className="rounded-lg bg-background p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-bold">Start Earning Within 15 Days</h3>
              <p className="text-sm text-muted-foreground">
                Follow the system and begin generating income faster than you thought possible
              </p>
            </div>
            <div className="rounded-lg bg-background p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-bold">Perfect for Students</h3>
              <p className="text-sm text-muted-foreground">
                Designed specifically for students who want to use their free time productively
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-lg border-2 border-primary/30 bg-primary/5 p-6 text-center">
            <p className="text-lg font-bold text-foreground sm:text-xl">
              You don't need a degree.
              <br />
              <span className="text-primary">Mobile + skills are enough.</span>
            </p>
            <p className="mt-2 text-base font-medium text-muted-foreground">
              All you need is the right skill and the right guidance.
            </p>
          </div>

          <div className="mt-6 text-center">
            <Button onClick={scrollToForm} size="lg" className="text-base font-bold sm:text-lg">
              👉 Register for Free Live Workshop
            </Button>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="bg-background px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl">
            This Workshop Is Perfect For You If…
          </h2>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg border-2 border-primary/30 bg-primary/5 p-4">
              <span className="text-xl font-bold text-primary">✔</span>
              <p className="text-base font-medium">You are a student or beginner looking to earn online</p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border-2 border-primary/30 bg-primary/5 p-4">
              <span className="text-xl font-bold text-primary">✔</span>
              <p className="text-base font-medium">You recently finished exams and have free time</p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border-2 border-primary/30 bg-primary/5 p-4">
              <span className="text-xl font-bold text-primary">✔</span>
              <p className="text-base font-medium">You want genuine income opportunities without scams</p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border-2 border-primary/30 bg-primary/5 p-4">
              <span className="text-xl font-bold text-primary">✔</span>
              <p className="text-base font-medium">You are ready to learn valuable skills seriously</p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border-2 border-primary/30 bg-primary/5 p-4">
              <span className="text-xl font-bold text-primary">✔</span>
              <p className="text-base font-medium">You want to build a sustainable income source</p>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="bg-muted/30 px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-2xl font-bold sm:text-3xl">
            This Is Not Motivation. This Is a System.
          </h2>
          
          <p className="text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
            This workshop is designed to give students a clear, practical roadmap to start earning online through real skills. No hype, no fake promises — only genuine guidance that works for students in India.
          </p>

          <div className="mt-6 rounded-lg bg-primary/10 px-4 py-3 text-center text-base font-bold text-primary sm:text-lg">
            ⚡ Start Earning Within 15 Days
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-3xl font-extrabold sm:text-4xl">
            Your Exams Are Over. Don't Waste This Time.
          </h2>
          
          <p className="mb-8 text-lg font-medium text-muted-foreground sm:text-xl">
            Use the next 60–90 days to build a skill that can pay you every month.
            <br />
            <span className="font-bold text-primary">Start earning within 15 days.</span>
          </p>

          <Button onClick={scrollToForm} size="lg" className="mb-4 text-lg font-bold sm:text-xl">
            👉 Join Free Live Workshop Now
          </Button>

          <p className="text-sm font-medium text-muted-foreground">
            <span className="font-bold text-foreground">Limited Seats Available</span>
            <br />
            Registration closes once slots are filled.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/20 px-4 py-6">
        <div className="mx-auto max-w-3xl text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} • Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'workshop-landing'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-primary"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
