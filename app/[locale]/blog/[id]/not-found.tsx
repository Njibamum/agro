export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
      <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
      <p className="text-muted-foreground">
        The blog post you&apos;re looking for doesn&apos;t exist or has been removed.
      </p>
    </div>
  );
}