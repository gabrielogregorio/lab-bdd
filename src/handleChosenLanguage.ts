import prompt from 'prompt-sync';
import { LanguageEnum } from './types';

export const promptUser = () => prompt()('Your language | Seu idioma (pt or en): ');

export const handleChosenLanguage = (): LanguageEnum => {
  const chosenOption = promptUser().trim().replace('\n', '');

  if (!['pt', 'en'].includes(chosenOption)) {
    throw new Error('invalid response');
  }

  return chosenOption;
};
