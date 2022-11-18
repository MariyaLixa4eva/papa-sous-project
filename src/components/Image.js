import sale from './sale.png';
import many from './many.png';
function Image () {
    return(
        <div className="imageClass">
            <img src={sale} alt=""/>
            <img src={many} alt=""/>
        </div>
    )
}
export default Image;