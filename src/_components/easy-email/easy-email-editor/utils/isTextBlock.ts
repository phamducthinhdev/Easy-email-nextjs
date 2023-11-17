import { BasicType, AdvancedType } from '@/_components/easy-email/easy-email-core';

export function isTextBlock(blockType: any) {
  return blockType === BasicType.TEXT || blockType === AdvancedType.TEXT;
}