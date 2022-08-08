import { dictionary } from '../constants/lang';
import { useSelector } from 'react-redux';
import { langSelector } from '../store/settings/selectors';

export const useIntl = () => {
  const lang = useSelector(langSelector);

  return (id) =>
    dictionary?.[lang]?.[id] ||
    id
      .split('.')
      .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
      .join(' ');
};
