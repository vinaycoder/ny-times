import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Shared/Card/Card";
import { getPopularArticle } from "../services/service";

function HomePage() {
  const [articleData, setArticleData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getPopularArticle();
        delete result?.results[0]
        setArticleData(result?.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const redirectHandled =useNavigate()
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          {error && (
            <div> Some Thing is wrong! </div>
          )}
          {loading && (
            <div> Loading...... </div>
          )}
          {!loading && articleData?.map(articleDetails => {
            return (
              <Card articleDetails={articleDetails} redirectHandled={redirectHandled} key={articleDetails?.id} />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
