export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen flex-col py-12">
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
} 