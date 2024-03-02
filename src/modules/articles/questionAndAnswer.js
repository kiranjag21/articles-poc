import { Input, Tooltip } from "antd";
import Button from "../../controls/button/button";

function QuestionAndAnswer(props) {

  return (
    <div style={{ padding: '100px 250px'}}>
      <div className="d-flex align-items-center flex-gap-12 margin-bottom-24">
        <span className="font-bold" style={{ flex: '1', maxWidth: '100px'}}>Quetion</span>
        <Input minWidth="200px" maxWidth="500px" style={{ flex: '1'}} />
      </div>
      <div className="d-flex align-items-center flex-gap-12 margin-bottom-24">
        <span className="font-bold" style={{ flex: '1', maxWidth: '100px'}}>Answer</span>
        <Input.TextArea minWidth="200px" maxWidth="500px" style={{ flex: '1'}}/>
      </div>
      <div>
        <Button content="Submit" type="primary" />
      </div>
    </div>
  );
}

  
export default QuestionAndAnswer;
  