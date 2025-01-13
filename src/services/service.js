export const getPopularArticle = async () => {
  try {
    const url="https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=CNsSNOBGlSwv5kBSGbjaiFCrEvQQEW5n";
    const options = {
      method:"GET",
      headers: {
        "Content-Type": "application/json"
      },
    };
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); 
    return data;

  }
  catch (error) {
    console.error("Error while calling the API:", error.message);
    throw error;
  }

}