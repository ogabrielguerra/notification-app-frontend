const Row = (props)=>{ 
    let data = props.data;
    const name = data.user.name;
    const message = data.message.body.content;
    const channel = data.message.channel;
    return (
      <>
        <div>Name: {name}</div>
        <div>Message: {message}</div>
        <div>Destination: {channel}</div>
        <hr/>
      </>
    )
  }

  export default Row;
  