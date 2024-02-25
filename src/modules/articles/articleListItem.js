import { Tooltip } from "antd";

function ArticleListItem(props) {

  let activeCls = props.IsSelected ? "article-selected" : '';
  return (
    <div className={"article-item-wrapper "+ activeCls}>
        <Tooltip title={props.tooltipText}>
          <p className="article-item text-align-left" onClick={() => props.onClick(props.article)}>{props.article.ArticleTitle}</p>
        </Tooltip>
      </div>
  );
}

  
export default ArticleListItem;
  