declare module "react-images-viewer" {
  interface Img {
    src: string;
    caption?: string;
    thumbnail?: string;
  }

  interface ImgsViewerProps {
    imgs: Img[];
    currImg: number;
    isOpen: boolean;
    showThumbnails?: boolean;
    onClickPrev: () => void;
    onClickNext: () => void;
    onClose: () => void;
    onClickImg: () => void;
    backdropCloseable?: boolean;
    closeBtnTitle?: string;
    leftArrowTitle?: string;
    rightArrowTitle?: string;
    onClickThumbnail?: (index: number) => void;
    width?: number;
    theme?: {
      arrow?: React.CSSProperties;
      arrow__size__medium?: React.CSSProperties;
      arrow__size__small?: React.CSSProperties;
      arrow__direction__left?: React.CSSProperties;
      arrow__direction__right?: React.CSSProperties;
      container?: React.CSSProperties;
      paginatedThumbnails?: React.CSSProperties;
      [key: string]: React.CSSProperties | undefined;
    };
  }

  const ImgsViewer: React.FC<ImgsViewerProps>;

  export default ImgsViewer;
}
