export default function TermsPage() {
  return (
    <div className="container py-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-neutral dark:prose-invert">
        <p className="text-lg text-muted-foreground mb-6">
          Last updated: April 10, 2024
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
          <p className="text-muted-foreground">
            By accessing our website, you agree to be bound by these Terms of Service and to comply 
            with all applicable laws and regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Use License</h2>
          <p className="text-muted-foreground">
            Permission is granted to temporarily access the materials on Green Agriculture Co., Ltd.&apos;s 
            website for personal, non-commercial viewing only.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
          <p className="text-muted-foreground">
            The materials on Green Agriculture Co., Ltd.&apos;s website are provided on an &apos;as is&apos; basis. 
            Green Agriculture Co., Ltd. makes no warranties, expressed or implied, and hereby 
            disclaims and negates all other warranties including, without limitation, implied 
            warranties or conditions of merchantability, fitness for a particular purpose, or 
            non-infringement of intellectual property or other violation of rights.
          </p>
        </section>
      </div>
    </div>
  );
}