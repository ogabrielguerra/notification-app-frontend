import Row from './Row';

const Log = ({data})=>{
  
    let messages = data.data;
    let key = 0;
  
    return (
      <>
      <h2 className='mb-3'>Registered Messages</h2>
      {
        messages.map((item)=>{
          key += 1;
          return <Row key={`logRow_${key}`} data={item}/>
        })
      }
      </>
    );
  }

export default Log;
