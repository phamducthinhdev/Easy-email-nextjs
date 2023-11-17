import { PreviewEmailContext } from '@/_components/easy-email/easy-email-editor/components/Provider/PreviewEmailProvider';
import { useContext } from 'react';

export function usePreviewEmail() {
  return useContext(PreviewEmailContext);
}
