__d(
  "useWAWebStatusContainsFutureproofEmbeddedContentBanner",
  [
    "WAWebMsgGetters",
    "WAWebStatusExternalShareUtils",
    "WAWebStatusFutureproofFooter.react",
    "WAWebStatusGatingUtils",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = o("useWAWebMsgValues").useMsgValues(e.id, [
          o("WAWebMsgGetters").isStatusWithEmbeddedMessages,
        ]),
        n = t[0],
        a = o(
          "WAWebStatusGatingUtils",
        ).isStatusEmbeddedContentFutureproofingEnabled(),
        i = o("WAWebStatusExternalShareUtils").getExternalShareInfo(e) != null;
      return u(
        function () {
          return !a || i
            ? null
            : n
              ? s.jsx(r("WAWebStatusFutureproofFooter.react"), {})
              : null;
        },
        [n, i, a],
      );
    }
    l.useWAWebStatusContainsFutureproofEmbeddedContentBanner = c;
  },
  98,
);
