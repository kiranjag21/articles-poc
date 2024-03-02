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

function ArticleDetails(props) {

  const { state, dispatch } = useContext(ArticleContext);
  const navigate = useNavigate();

  return (
        <div>
            <div className="text-align-left font-bold margin-bottom-24">{props.selectedArticle.title}</div>
            <div className="text-align-left" style={{ height: '54vh', overflow: 'auto', marginBottom: '16px'}}>{props.selectedArticle.abstract}</div>
            <div className="d-flex  justify-content-end" style={{ marginRight: '16px' }}>
                <Button onClick={() => props.setCurrentCmp(ComponentRegistry.QuestionAndAnswer)} content="Process for Q & A" />
            </div>
        </div>
  );
}

  
  export default ArticleDetails;
  