export default function PrivacyPage() {
  return (
    <div className="container py-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-neutral dark:prose-invert">
        <p className="text-lg text-muted-foreground mb-6">
          Last updated: April 10, 2024
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-muted-foreground">
            Green Agriculture Co., Ltd. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed 
            to protecting your personal data. This privacy policy explains how we collect, use, and 
            protect your information when you use our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-muted-foreground">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
            <li>Contact information (name, email address, phone number)</li>
            <li>Company information</li>
            <li>Inquiry details</li>
            <li>Website usage data</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="text-muted-foreground">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
            <li>Respond to your inquiries</li>
            <li>Process your requests</li>
            <li>Improve our website and services</li>
            <li>Send you updates and marketing communications (with your consent)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}