function ArticleListItem(props) {

  return (
    <div>
      <p onClick={() => props.onClick(props.article)} className="text-align-left">{props.article.ArticleTitle}</p>
    </div>
  );
}

  
export default ArticleListItem;
  