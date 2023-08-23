
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";

export default function MyLibrary() {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     (async () => {
//       try {
//         let res = axios.get("http://hdshhds");
//         setBooks(res);
//       } catch (e) {
//         console.warn(e);
//       }
//     })();
//   }, []);

  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="container-fluid">
    <div className="row">
    <div className="col-12">
      <h2 className="title text-center">My Library</h2>
      </div>
    <div className="col-12">
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
  </div>
  </div>
  </div>
  );
}
