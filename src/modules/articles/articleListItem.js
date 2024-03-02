import { Tooltip } from "antd";

function ArticleListItem(props) {

  let activeCls = props.IsSelected ? "article-selected" : '';
  return (
    <div className={"article-item-wrapper "+ activeCls} onClick={() => props.onClick(props.article)}>
        <Tooltip placement="right" title={props.tooltipText}>
          <p className="article-item text-align-left">{props.article.title}</p>
          <p className="article-item-desc text-align-left">{props.article.abstract}</p>
        </Tooltip>
      </div>
  );
}

  
export default ArticleListItem;
  