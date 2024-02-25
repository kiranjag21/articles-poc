import { useState } from "react";
import Button from "../../controls/button/button";
import Date from "../../controls/date/date";
import Input from "../../controls/input/Input";
import moment from "moment";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ArticleContext } from "../../App";
import ArticleListItem from "./articleListItem";
import { Col, Row } from 'antd';

function ResultPage(props) {

  const [startDate, setStartDate] = useState(moment().subtract(3, 'months').format('MM/DD/YYYY'));
  const [endDate, setEndDate] = useState(moment().subtract(3, 'months').format('MM/DD/YYYY'));
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { state, dispatch } = useContext(ArticleContext);

  const handleNext = () => {
    props.setPopup(1);
    setTimeout(() => {
      props.setPopup(0);
    }, 5000)
  }

  const onArticleSelect = (article) => {
    setSelectedArticle(article);
  }

  return (
    <div className="result-page">
      <div className="border-bottom padding-bottom-15">
        <div className="d-flex flex-gap-30 justify-content-start margin-bottom-24" style={{ width: '100%'}}>
          <Link className="font-bold">Search Query</Link>
          <Link className="font-bold">Results</Link>
          <Link className="font-bold">Q & A</Link>
        </div>
        <div className="d-flex align-items-center flex-gap-12 margin-bottom-24">
          <span className="font-bold">Query</span>
          <Input minWidth="500px" />
          <Button content="Edit" onClick={handleNext} />
        </div>
        <div className="d-flex align-items-center flex-gap-12">
          <span className="font-bold">Date :- </span>
          <Date dateRange={true} valueFrom={startDate} valueTo={endDate} />
        </div>
      </div>
      <div className="d-flex align-items-center flex-gap-12 margin-bottom-24">
        {state.articles.length == 0 && <div>No results</div>}
        
        {state.articles.length > 0 && 
          <Row>
            <Col span={8}>
              {state.articles.map(article => {
                return <ArticleListItem article={article} onClick={onArticleSelect}/>
              })}
            </Col>
            <Col span={16}>
              {selectedArticle && 
                <div>{selectedArticle.ArticleDescription}</div>
              }
            </Col>
          </Row>
        }
      </div>
    </div>
  );
}

  
  export default ResultPage;
  