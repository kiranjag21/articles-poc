import { useState } from "react";
import Button from "../../controls/button/button";
import Date from "../../controls/date/date";
import Input from "../../controls/input/Input";
import moment from "moment";
import { useNavigate, Link } from "react-router-dom";
import ArticlesData from './dummy.json';
import { useContext } from "react";
import { ArticleContext } from "../../App";
import api from "../../api/api";
import { API_ENDPOINTS } from "../../api/apiEndpoints";

  function SearchPage(props) {

    const [startDate, setStartDate] = useState(moment().subtract(3, 'months').format('MM/DD/YYYY'));
    const [endDate, setEndDate] = useState(moment().subtract(3, 'months').format('MM/DD/YYYY'));
    const [searchString, setSearchString] = useState('');
    const navigate = useNavigate();
    const { state, dispatch } = useContext(ArticleContext);

    const handleNext = async () => {
      if (!searchString) {
        alert('Please enter search string');
        return;
      }

      props.setPopup(1);
        try {
          const response = await api.post(`${API_ENDPOINTS.SEARCH_ARTICLES}?queryextract=${searchString}`);
          dispatch({ type: 'UPDATE_STATE', key: 'articles', data: response.data });
          props.setPopup(0);
          navigate("/result");
        } catch (error) {
            alert('An error occured');  
            console.error("Failed to fetch data: ", error);
        }
    }

    const handleSearchChanged = (e) => {
      setSearchString(e);
    }

    return (
      <div className="search-page">
        <div className="d-flex flex-gap-30 justify-content-start margin-bottom-24" style={{ width: '100%'}}>
          <Link className="font-bold" onClick={() => navigate("/")}>Search Query</Link>
          <Link className="font-bold">Results</Link>
          <Link className="font-bold">Q & A</Link>
        </div>
        <div className="d-flex align-items-center flex-gap-12 margin-bottom-24">
          <span className="font-bold">Query</span>
          <Input minWidth="500px" onChange={handleSearchChanged} />
          <Button content="Search" onClick={handleNext} />
        </div>
        <div className="d-flex align-items-center flex-gap-12">
          <span className="font-bold">Date :- </span>
          <Date dateRange={true} valueFrom={startDate} valueTo={endDate} />
        </div>
      </div>
    );
  }
  
  export default SearchPage;
  