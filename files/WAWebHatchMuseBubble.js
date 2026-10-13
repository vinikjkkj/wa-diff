__d(
  "WAWebHatchMuseBubble",
  [
    "WAWebBotUtils",
    "WAWebHatchFrontendGating",
    "WAWebHatchMuseBubbleTheme.stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return t ||
        e == null ||
        !o("WAWebBotUtils").isHatchBot(e) ||
        !o("WAWebHatchFrontendGating").isHatchJarvisRendererEnabled()
        ? null
        : o("WAWebHatchMuseBubbleTheme.stylex").museBubbleLight;
    }
    l.getHatchMuseBubbleStyle = e;
  },
  98,
);
