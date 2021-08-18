import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <>
      <h1> Quotes Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
