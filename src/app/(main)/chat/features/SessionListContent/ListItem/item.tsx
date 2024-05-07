import { Avatar, List, ListItemProps } from '@lobehub/ui';
import { useHover } from 'ahooks';
import { createStyles, useResponsive } from 'antd-style';
import { memo, useMemo, useRef } from 'react';

const { Item } = List;

const useStyles = createStyles(({ css, token, responsive }) => {
  return {
    container: css`
      position: relative;

      margin-block: 2px;
      padding-right: 16px;
      padding-left: 8px;

      border-radius: ${token.borderRadius}px;
      ${responsive.mobile} {
        margin-block: 0;
        padding-left: 12px;
        border-radius: 0;
      }
    `,
    title: css`
      line-height: 1.2;
    `,
  };
});

const RawListItem = memo<ListItemProps & { avatar: string; avatarBackground?: string }>(
  ({ avatar, avatarBackground, active, showAction, actions, title, ...props }) => {
    const ref = useRef(null);
    const isHovering = useHover(ref);
    const { mobile } = useResponsive();
    const { styles } = useStyles();

    const avatarRender = useMemo(
      () => (
        <Avatar
          animation={isHovering}
          avatar={avatar}
          background={avatarBackground}
          shape="circle"
          size={46}
        />
      ),
      [isHovering, avatar, avatarBackground],
    );

    return (
      <Item
        actions={actions}
        active={mobile ? false : active}
        avatar={avatarRender}
        className={styles.container}
        ref={ref}
        showAction={actions && (isHovering || showAction || mobile)}
        title={<span className={styles.title}>{title}</span>}
        {...(props as any)}
      />
    );
  },
);

export default RawListItem;
