// This interface should match the DTO in our backend
export interface Podcast {
  collectionId: number;
  artistName: string;
  collectionName: string;
  feedUrl: string;
  artworkUrl600: string;
  genres: string[];
  releaseDate: string;
  trackCount: number;
}

const API_BASE_URL = 'http://localhost:3001'; // Our backend URL

export const searchPodcasts = async (term: string): Promise<Podcast[]> => {
  if (!term) {
    return []; // Return an empty array if the search term is empty
  }

  const response = await fetch(`${API_BASE_URL}/search?term=${encodeURIComponent(term)}`);

  if (!response.ok) {
    // If the server responds with an error, throw an error
    throw new Error('Failed to fetch podcasts from the server.');
  }

  const data = await response.json();
  return data as Podcast[];
};