import { Theme, css } from 'antd-style';

// fix ios input keyboard
// overflow: hidden;
// ref: https://zhuanlan.zhihu.com/p/113855026
export default ({ token }: { prefixCls: string; token: Theme }) => css`
  @font-face {
    font-family: LXGWWenKai;
    src: url("https://qiniu.hwater.site/nirvana/LXGWWenKai.ttf");
  }
  html,
  body,
  #__next {
    position: relative;
    font-family:"LXGWWenKai","HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif,"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif,"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji" !important;

    overscroll-behavior: none;

    height: 100%;
    min-height: 100dvh;
    max-height: 100dvh;

    background: ${token.colorBgLayout};

    @media (min-device-width: 576px) {
      overflow: hidden;
    }
  }

  * {
    scrollbar-color: ${token.colorFill} transparent;
    scrollbar-width: thin;

    ::-webkit-scrollbar {
      width: 0.75em;
      height: 0.75em;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
    }

    :hover::-webkit-scrollbar-thumb {
      background-color: ${token.colorText};
      background-clip: content-box;
      border: 3px solid transparent;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }
`;
