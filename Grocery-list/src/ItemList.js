
import LineItem from  './LineItem';

const ItemList = ({items,handleDelete,handleCheck})=> {
    
    return (
        <ul>
          {items.map((item)=>(
            <LineItem 
            key={item.item}
            item={item}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
            />
                            
          ))

          }
        </ul> 
        
    )
  }
  
  export default ItemList;
  