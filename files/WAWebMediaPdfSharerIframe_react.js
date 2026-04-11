__d(
  "WAWebMediaPdfSharerIframe.react",
  [
    "WAWebPdfViewerTestIds",
    "WAWebTPFrameUrlBuilder",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.iframeRef,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = o("WAWebTPFrameUrlBuilder").getWAWebTPPdfSharerUrl()),
          (t[0] = r))
        : (r = t[0]);
      var a = r,
        i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = "xh8yej3 x5yr21d"), (t[1] = i))
        : (i = t[1]);
      var l;
      return (
        t[2] !== n
          ? ((l = s.jsx("iframe", {
              credentialless: !1,
              ref: n,
              src: a,
              "data-testid": void 0,
              className: i,
              sandbox:
                "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",
            })),
            (t[2] = n),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    l.default = c;
  },
  98,
);
