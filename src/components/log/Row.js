const Row = (props)=>{ 
  
    let data = props.data;
    const name = data.user.name;
    const message = data.body;
    const channel = data.channel.name;

    return (
      <>
        <div><b>From {name} to {channel} channel.</b></div>
        <div>{message}</div> 
        <hr/>
      </>
    )
  }

  export default Row;
  