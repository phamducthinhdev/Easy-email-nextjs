import { Stack } from '@/_components/easy-email/easy-email-editor/components/UI/Stack';
import React from 'react';
import { useBlock } from '@/_components/easy-email/easy-email-editor/hooks/useBlock';
import { IconFont } from '@/_components/easy-email/easy-email-editor/components/IconFont';
import { Button } from '@/_components/easy-email/easy-email-editor/components/UI/Button';

export function ToolsPanel() {
  const { redo, undo, redoable, undoable } = useBlock();

  return (
    <Stack>
      <Button title={t('undo')} disabled={!undoable} onClick={undo}>
        <IconFont
          iconName='icon-undo'
          style={{
            cursor: 'inherit',
            opacity: undoable ? 1 : 0.75,
          }}
        />
      </Button>

      <Button title={t('redo')} disabled={!redoable} onClick={redo}>
        <IconFont
          iconName='icon-redo'
          style={{
            cursor: 'inherit',
            opacity: redoable ? 1 : 0.75,
          }}
        />
      </Button>
      <Stack.Item />
    </Stack>
  );
}
