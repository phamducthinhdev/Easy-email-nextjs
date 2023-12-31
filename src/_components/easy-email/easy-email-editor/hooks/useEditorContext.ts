import { useContext } from 'react';
import { BlocksContext } from '@/_components/easy-email/easy-email-editor/components/Provider/BlocksProvider';
import { IEmailTemplate } from '@/_components/easy-email/easy-email-editor/typings';
import { useFormState, useForm } from 'react-final-form';

export function useEditorContext() {
  const formState = useFormState<IEmailTemplate>();
  const helpers = useForm();
  const { initialized, setInitialized } = useContext(BlocksContext);

  const { content } = formState.values;
  return {
    formState,
    formHelpers: helpers,
    initialized,
    setInitialized,
    pageData: content,
  };
}
