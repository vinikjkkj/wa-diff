__d(
  "WAWebHasAcceptedBizBotTos",
  [
    "WAWebBotTos",
    "WAWebTos",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useState;
    function u() {
      var e = o("react-compiler-runtime").c(1),
        t = s(o("WAWebBotTos").hasAcceptedBizBotTos),
        n = t[0],
        r = t[1],
        a;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = function () {
              r(o("WAWebBotTos").hasAcceptedBizBotTos());
            }),
            (e[0] = a))
          : (a = e[0]),
        o("useWAWebListener").useListener(
          o("WAWebTos").TosManager,
          "change",
          a,
        ),
        n
      );
    }
    l.useHasAcceptedBizBotTos = u;
  },
  98,
);
