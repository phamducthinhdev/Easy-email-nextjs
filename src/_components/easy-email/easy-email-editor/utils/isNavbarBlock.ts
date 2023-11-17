import { BasicType, AdvancedType } from '@/_components/easy-email/easy-email-core';

export function isNavbarBlock(blockType: any) {
  return blockType === BasicType.NAVBAR || blockType === AdvancedType.NAVBAR;
}