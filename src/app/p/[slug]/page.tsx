// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function PodcastPage({ params }: { params: any }) {
  // Explicitly await the params object before using its properties.
  const resolvedParams = await params;

  return (
    <div className="p-8">
      <h1 className="font-display text-4xl font-bold">
        Podcast Details Page
      </h1>
      <p className="mt-4 text-th-text-muted">
        This is the placeholder page for the podcast with ID: <strong>{resolvedParams.slug}</strong>
      </p>
    </div>
  );
}