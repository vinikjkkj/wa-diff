__d(
  "WAWebHtmlViewerGatingUtils",
  ["WAWebBotUtils", "WAWebMimeTypes", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("23929");
    }
    function s(t, n) {
      return (
        o("WAWebMimeTypes").isHtmlDocument(t) &&
        e() &&
        o("WAWebBotUtils").isHatchBot(n)
      );
    }
    ((l.isHtmlViewerEnabled = e), (l.isHtmlViewerEnabledForMimeType = s));
  },
  98,
);
