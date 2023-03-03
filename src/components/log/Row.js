import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

const Row = (props)=>{ 
  
    let data = props.data;
    if(data){
      const name = data.userName;
      const message = data.body;
      const category = data.categoryName;    
      const dateSlices = getDateFromTimestamp(data.createdAt);
      const formatedDate = `${dateSlices.day} ${dateSlices.month} ${dateSlices.year}`;

      return (
        <Card key={data.id} className="mb-2">
          <Card.Header><CustomBadge value={category} /></Card.Header>
          <Card.Body>
            <Card.Title><b>{name}</b> sent on {formatedDate}</Card.Title>
            <Card.Text>
            {message}
            </Card.Text>
          </Card.Body>
        </Card>
      )
    }else{
      return null;
    }
  }

  export default Row;

  const CustomBadge = ({value})=><Badge bg="primary">{value}</Badge>;
  
  const getDateFromTimestamp = (timestamp)=>{
    let fromTimestamp = new Date(timestamp);
    const day = fromTimestamp.getDay();
    const monthIndex = fromTimestamp.getMonth();
    const month = getMonthByIndex(monthIndex);
    const year = fromTimestamp.getFullYear();
    return {day: day, month: month, year: year}
  }

  const getMonthByIndex = (i)=>{
    const months = [
      'January', 'February', 'March', 'April', 
      'May', 'June', 'July', 'August', 
      'September', 'October', 'November', 'December'];
    return months[i];
  }
