import Badge from 'react-bootstrap/Badge';

const Row = (props)=>{ 
  
    let data = props.data;
    const name = data.user.name;
    const message = data.body;
    const channel = data.channel.name;
    const messageType = data.messageType;

    console.log(data)
    return (
      <>
        <div><CustomBadge messageType={messageType} /> <b>To {name} from {channel} channel.</b></div>
        <div>{message}</div> 
        <hr/>
      </>
    )
  }

  export default Row;

  const CustomBadge = ({messageType})=>{
    const messageTypeId = messageType.id;
    const messageName = messageType.name;
    let badgeType;
    if(messageTypeId==1){
      badgeType = "primary";
    }else if(messageTypeId==2){
      badgeType = "secondary";
    }else{
      badgeType = "info"
    }

    return (
      <Badge bg={badgeType}>{messageName}</Badge>
    )
  }
  