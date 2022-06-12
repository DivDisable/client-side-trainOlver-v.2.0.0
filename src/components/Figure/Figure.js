import { ThemeContext } from '../../theme-context.js';
import { useThemeContext } from '../../customHooks';

function Figure({ figcaption, img }) {
  const [theme, toggleTheme] = useThemeContext(ThemeContext);

  const handleClick = () => {
    toggleTheme(figcaption);
  };

  return (
    <figure
      className='text-center'
      data-figcaption={figcaption}
      onClick={handleClick}>
      <img src={img} className='img-fluid rounded' alt={figcaption} />
      <small className='text-muted'>
        <figcaption className='text-capitalize'>{figcaption}</figcaption>
      </small>
    </figure>
  );
}

export default Figure;
