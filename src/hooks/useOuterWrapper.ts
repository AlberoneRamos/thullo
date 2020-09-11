import { useEffect } from 'react';

const useOuterWrapper = ({ current }: React.RefObject<HTMLElement>, onClickOutside: Function) => {
  const handleClickOutside = ({ target }: MouseEvent) => {
    if (target instanceof HTMLElement && !current?.contains(target)) onClickOutside();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });
};

export default useOuterWrapper;