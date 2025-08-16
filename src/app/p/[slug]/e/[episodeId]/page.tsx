// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function EpisodePage({ params }: { params: any }) {
  // Explicitly await the params object here as well.
  const resolvedParams = await params;

  return (
    <div className="p-8">
      <h1 className="font-display text-4xl font-bold">
        Episode Details Page
      </h1>
      <p className="mt-4 text-th-text-muted">
        This is the placeholder page for Episode ID: <strong>{resolvedParams.episodeId}</strong>
      </p>
      <p className="mt-2 text-th-text-muted">
        From Podcast ID: <strong>{resolvedParams.slug}</strong>
      </p>
    </div>
  );
}