import { useContext } from 'react';

import { LocaleContext } from '../../context/Locale';

const useLocale = () => {
  const context = useContext(LocaleContext);

  if (context === undefined) {
    throw new Error('useLocale must be used within LocaleProvider');
  };
  
  return context;
}

export default useLocale;
