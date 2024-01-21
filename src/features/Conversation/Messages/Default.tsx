import { Markdown } from '@lobehub/ui';
import { TypographyProps } from 'antd';
import { ReactNode, memo } from 'react';

import { LOADING_FLAT } from '@/const/message';
import { ChatMessage } from '@/types/message';

import BubblesLoading from '../components/BubblesLoading';

export const DefaultMessage = memo<
  ChatMessage & {
    editableContent: ReactNode;
  }
>(({ id, content }) => {
  if (content === LOADING_FLAT) return <BubblesLoading />;

  return (
    <div id={id}>
      <Markdown
        componentProps={{
          a: {
            target: '_self',
          } as TypographyProps['Link'] & HTMLAnchorElement,
        }}
      >
        {content}
      </Markdown>
    </div>
  );
});
