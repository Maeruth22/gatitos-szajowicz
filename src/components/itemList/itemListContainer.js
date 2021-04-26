import '../itemCount/itemCount';
import ItemCount from '../itemCount/itemCount';


export const ItemListContainer = () => {
    return (
    <div>
        <h2>Bienvenidx a Catfour!</h2>
        <div className='ItemCount'>
            <div className='product'>
                <ItemCount />
            </div>
        </div>
    </div>
    )
}