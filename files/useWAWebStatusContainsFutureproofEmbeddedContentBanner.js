__d(
  "useWAWebStatusContainsFutureproofEmbeddedContentBanner",
  [
    "WAWebMsgGetters",
    "WAWebStatusExternalShareUtils",
    "WAWebStatusFutureproofFooter.react",
    "WAWebStatusGatingUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [o("WAWebMsgGetters").isStatusWithEmbeddedMessages]),
          (t[0] = n))
        : (n = t[0]);
      var a = o("useWAWebMsgValues").useMsgValues(e.id, n),
        i = a[0],
        l = o(
          "WAWebStatusGatingUtils",
        ).isStatusEmbeddedContentFutureproofingEnabled(),
        u = o("WAWebStatusExternalShareUtils").getExternalShareInfo(e) != null,
        c;
      e: {
        if (!l) {
          c = null;
          break e;
        }
        if (u) {
          c = null;
          break e;
        }
        if (i) {
          var d;
          (t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = s.jsx(r("WAWebStatusFutureproofFooter.react"), {})),
              (t[1] = d))
            : (d = t[1]),
            (c = d));
          break e;
        }
        c = null;
      }
      return c;
    }
    l.useWAWebStatusContainsFutureproofEmbeddedContentBanner = c;
  },
  98,
);
