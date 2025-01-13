import { useLocation } from "react-router-dom";
import ImageComponent from "../components/Shared/ImageComponent";
import ArticleContent from "../components/Article/ArticleContent";

function ArticleDetailsPageContainer() {
  const location = useLocation();
  const articleData = location.state;
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="detailsPage">
            <h1 className="tittle">‘{articleData?.title}’</h1>
            <ImageComponent
              src={articleData?.media?.[0]?.["media-metadata"][2]?.url}
              style={{ width: "100%" }}
            />
            <ArticleContent content={articleData?.abstract} />
                       
          </div>

        </div>
      </div>
    </div>
  );
}

export default ArticleDetailsPageContainer;
