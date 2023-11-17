import { BasicType, AdvancedType } from '@/_components/easy-email/easy-email-core';

export function isButtonBlock(blockType: any) {
  return blockType === BasicType.BUTTON || blockType === AdvancedType.BUTTON;
}