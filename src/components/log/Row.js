import Badge from 'react-bootstrap/Badge';

const Row = (props)=>{ 
  
    let data = props.data;
    const name = data.userName;
    const message = data.body;
    const category = data.categoryName;

    console.log(data)
    return (
      <>
        <div><CustomBadge value={category} /></div>
        <div><b>{name}</b> sent to {category} channel.</div>
        <div>{message}</div> 
        <hr/>
      </>
    )
  }

  export default Row;

  const CustomBadge = ({value})=><Badge bg="primary">{value}</Badge>;
  