import { CardContainer } from './styles';
import IProducts from '../../interfaces';
interface ProductsProps {
  productData: IProducts;
}

function ProductCard({ productData }: ProductsProps) {
  const { key, image, title, description, category, price, url } = productData;

  return (
    <CardContainer>
      <div className='img'>
        <img src={ image } alt={ description } />
      </div>
      <div className="description">
        <p className="title">{ `Produto #${key + 1}` }</p>
        <p>{ title }</p>
        <p className="desc">{ description }</p>
        <p>{ category }</p>
        <p className="price">{ price }</p>
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
