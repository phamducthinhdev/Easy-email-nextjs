import React, { useMemo } from 'react';
import { useActiveTab } from '@/_components/easy-email/easy-email-editor/hooks/useActiveTab';
import { ActiveTabKeys } from '@/_components/easy-email/easy-email-editor/components/Provider/BlocksProvider';
import { usePreviewEmail } from '@/_components/easy-email/easy-email-editor/hooks/usePreviewEmail';
import { useEditorContext } from '@/_components/easy-email/easy-email-editor/hooks/useEditorContext';
import { SyncScrollShadowDom } from '@/_components/easy-email/easy-email-editor/components/UI/SyncScrollShadowDom';
import { classnames } from '@/_components/easy-email/easy-email-editor/utils/classnames';
import { SYNC_SCROLL_ELEMENT_CLASS_NAME } from '@/_components/easy-email/easy-email-editor/constants';
import { createPortal } from 'react-dom';

export function DesktopEmailPreview() {
  const { activeTab } = useActiveTab();
  const { errMsg, reactNode } = usePreviewEmail();

  const { pageData } = useEditorContext();

  const fonts = useMemo(() => {
    return pageData.data.value.fonts || [];
  }, [pageData.data.value.fonts]);

  const isActive = activeTab === ActiveTabKeys.PC;

  if (errMsg) {
    return (
      <div style={{ textAlign: 'center', fontSize: 24, color: 'red' }}>
        <>{errMsg}</>
      </div>
    );
  }

  return (
    <div
      style={{
        height: '100%',
      }}
    >
      <SyncScrollShadowDom
        isActive={isActive}
        style={{
          border: 'none',
          height: '100%',
          width: '100%',
        }}
      >
        <>
          <style>
            {`
                .preview-container {
                  overflow: overlay !important;
                }
                *::-webkit-scrollbar {
                  -webkit-appearance: none;
                  width: 0px;
                }
                *::-webkit-scrollbar-thumb {
                  background-color: rgba(0, 0, 0, 0.5);
                  box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
                  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
                }
              `}
          </style>
          <div
            className={classnames('preview-container', SYNC_SCROLL_ELEMENT_CLASS_NAME)}
            style={{
              height: '100%',
              overflow: 'auto',
              margin: 'auto',

              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 40,
              paddingBottom: 140,
              boxSizing: 'border-box',
            }}
          >
            <>{reactNode}</>
          </div>
          {createPortal(
            <>
              {fonts.map((item, index) => (
                <link
                  key={index}
                  href={item.href}
                  rel='stylesheet'
                  type='text/css'
                />
              ))}
            </>,
            document.body,
          )}
        </>
      </SyncScrollShadowDom>
    </div>
  );
}
