import { useEffect, useState } from "react"
import foodApi from '../../../api/fooApi';

 
export default function useProductDetail(foodId) {

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    (async  () => {
      try {
        setLoading(true);
        const result = await foodApi.get(foodId);
        setProduct(result);

      } catch (error) {
        console.log('Failed to fetch product',error);
      }
      setLoading(false);
    })();
  }, [foodId]);

  return {product, loading};
}