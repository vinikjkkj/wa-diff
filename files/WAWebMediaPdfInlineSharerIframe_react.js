__d(
  "WAWebMediaPdfInlineSharerIframe.react",
  ["WAWebPdfViewerTestIds", "WAWebTPFrameUrlBuilder", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = e.iframeRef,
        n = u(function () {
          return o("WAWebTPFrameUrlBuilder").getWAWebTPPdfInlineSharerUrl();
        }, []);
      return s.jsx("iframe", {
        credentialless: !1,
        ref: t,
        src: n,
        "data-testid": void 0,
        className:
          "xh8yej3 x5yr21d x972fbf x10w94by x1qhh985 x14e42zd x1lliihq",
        sandbox:
          "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
