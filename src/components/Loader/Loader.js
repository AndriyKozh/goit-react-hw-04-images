import { BallTriangle } from 'react-loader-spinner';
import { LoaderBlock } from './Loader.style';
const Loader = () => {
  return (
    <LoaderBlock>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </LoaderBlock>
  );
};

export default Loader;
