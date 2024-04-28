import { CLOTHES_NAME } from '../../utils/constant';
import TextSpan from '../text/textSpan';
import * as SC from './styled';

const CardItem = ({ src, alt, info, item = '' }) => {
  return (
    <SC.CardItem>
      <SC.Card>
        <SC.Image src={src} alt={alt} />
        {item && <SC.Item>{item}</SC.Item>}
      </SC.Card>
      {item && (
        <SC.Clothes>
          <TextSpan>{CLOTHES_NAME[item].first[info.온도]}</TextSpan>
          <TextSpan>{CLOTHES_NAME[item].second[info.온도]}</TextSpan>
        </SC.Clothes>
      )}
    </SC.CardItem>
  );
};

export default CardItem;
