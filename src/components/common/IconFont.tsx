/**
 * Gulpで作成したアイコンフォントを表示するコンポーネントです
 *
 * アイコンのプレビューファイル（ダブルクリックなどでブラウザで確認できます）
 * /src/iconfont/sample.html
 *
 * @usage
 * import IconFont from '@/components/common/IconFont'
 * <IconFont icon='stars' className={styles.iconFontStyle} />
 *
 */

// style
import styles from './IconFont.module.scss';
import type { IconProps } from './IconFontType';

//= ===========================各種インポートここまで

type Props = {
  icon: IconProps;
  className?: string;
};

const IconFont = ({ ...props }: Props) => {
  return (
    <>
      <span className={[styles['iconfont'], styles['iconfont-' + props.icon], props.className].join(' ')}></span>
    </>
  );
};

export default IconFont;
