
export const getMoviesByTitle = async (title) => {
  try {
    const response = await fetch (`https://api.tvmaze.com/search/shows?q=${title}`);
    if (!response.ok) {
      throw new Error (`HTTP Error: ${response.status}`);
    } else {
      return await response.json ();
    }
  } catch (error) {
    console.log (`Error: ${error.message}`);
  }
}