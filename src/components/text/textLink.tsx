import { Link } from 'react-router-dom';
import * as SC from './styled';

const TextLink = ({ children, to }) => {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <SC.Link>{children}</SC.Link>
    </Link>
  );
};

export default TextLink;
