import { useState } from "react";
import Button from "../../controls/button/button";
import Date from "../../controls/date/date";
import Input from "../../controls/input/Input";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ArticleContext } from "../../App";
import ArticleListItem from "./articleListItem";
import { Col, Row } from 'antd';
import { ComponentRegistry } from "../helpers/componenetRegistry";
import ArticleDetails from "./articleDetails";
import QuestionAndAnswer from "./questionAndAnswer";

function ResultPage(props) {

  const [startDate, setStartDate] = useState(moment().subtract(3, 'months').format('MM/DD/YYYY'));
  const [endDate, setEndDate] = useState(moment().subtract(3, 'months').format('MM/DD/YYYY'));
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { state, dispatch } = useContext(ArticleContext);
  const [CurrentCmp, setCurrentCmp] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    props.setPopup(1);
    setTimeout(() => {
      props.setPopup(0);
    }, 5000)
  }

  const onArticleSelect = (article) => {
    setSelectedArticle(article);
    setCurrentCmp(ComponentRegistry.ArticleDetails);
  }

  const renderMiddleContent = () => {
    if (CurrentCmp === ComponentRegistry.ArticleDetails) {
      return <ArticleDetails setCurrentCmp={setCurrentCmp} selectedArticle={selectedArticle} />;
    } else if (CurrentCmp === ComponentRegistry.QuestionAndAnswer) {
      return <QuestionAndAnswer setCurrentCmp={setCurrentCmp} selectedArticle={selectedArticle} />;
    }
    
    return null;
  }

  return (
    <div className="result-page">
      <div className="border-bottom result-header">
        <div className="d-flex flex-gap-30 justify-content-start margin-bottom-24" style={{ width: '100%'}}>
          <Link className="font-bold" to={'/'}>Search Query</Link>
          <Link className="font-bold">Results</Link>
          <Link className="font-bold">Q & A</Link>
        </div>
        <div className="d-flex align-items-center flex-gap-12 margin-bottom-24">
          <span className="font-bold">Query</span>
          <Input minWidth="500px" />
          <Button content="Edit" onClick={handleNext} />
        </div>
        <div className="d-flex align-items-center flex-gap-16">
          <span className="font-bold">Date :- </span>
          <Date dateRange={true} valueFrom={startDate} valueTo={endDate} />
          {state.articles.length > 0 && 
              <span className="font-bold">Article count :- {state.articles.length}</span>
          }
        </div>
      </div>
      <div className="d-flex align-items-center flex-gap-12" style={{ minHeight: '20vh'}}>
        {state.articles.length == 0 && <div style={{ fontWeight: 700, padding: '50px'}}>No results</div>}
        
        {state.articles.length > 0 && 
          <div className="d-flex" style={{ width: '100%'}}>
              <div style={{ maxWidth: '380px', flex: '1' }} className="result-menu">
                {state.articles.map(article => {
                  let IsSelected = article.pmid == (selectedArticle && selectedArticle.pmid);
                  return <ArticleListItem tooltipText={article.title} IsSelected={IsSelected} article={article} onClick={onArticleSelect}/>
                })}
            </div>
            <div style={{ width: '100%', flex: '1'}}>
              {selectedArticle && CurrentCmp > 0 &&
                <div className="" style={{ padding: '20px 0px 0px 20px'}}>
                  {renderMiddleContent()}
                </div>
              }
            </div>
          </div>
        }
      </div>
    </div>
  );
}

  
  export default ResultPage;
  