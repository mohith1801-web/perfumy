import one from "../assects/imgs/one.jpg"
import two from "../assects/imgs/two.jpg"
import three from "../assects/imgs/three.jpg"
function Images () {
    return (
<div className="products">
            <div className="box">
                        <img src={one}></img>
                        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
            </div>
            
            <div className="box">
                <img src={two}></img>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
            </div>
            <div className="box">
                <img src={three}></img>
                <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
            </div>            
        </div>
    );
}
export default Images;