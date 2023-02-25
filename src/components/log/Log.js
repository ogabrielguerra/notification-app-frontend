import Row from './Row';

const Log = (props)=>{
  
    let mdata = props.data.data;
    let key = 0;
  
    return (
      <>
      {
        mdata.map((item)=>{
          key += 1;
          return <Row key={`logRow_${key}`} data={item}/>
        })
      }
      </>
    );
  }

export default Log;
