export const getMovie = async (id) => {
  try {
    const response = await fetch (`https://api.tvmaze.com/shows/${id}`);
    if (!response.ok) {
      throw new Error (`HTTP Error: ${response.status}`);
    } else {
      return await response.json ();
    }
  } catch (error) {
    console.error (`Error: ${error.message}`);
  }
};