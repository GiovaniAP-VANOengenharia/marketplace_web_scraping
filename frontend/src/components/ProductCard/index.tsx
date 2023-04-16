import { CardContainer } from './styles';
import IProducts from '../../interfaces';
interface ProductsProps {
  productData: IProducts;
}

function ProductCard({ productData }: ProductsProps) {
  const { image, description, category, price, url } = productData;

  return (
    <CardContainer>
      <img src={ image } alt={ description } />
      <div className="description">
        <p>{ description }</p>
        <p>{ category }</p>
        <p>{ price }</p>
        <p>{ url }</p>
      </div>
      <div className="button">
      <a href={url}>
        <button
          type="button"
        >
          Web
        </button>
      </a>
      </div>
    </CardContainer>
  );
}

export default ProductCard;
