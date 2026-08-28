__d(
  "CometAIHTSBloksEnvironment",
  [
    "CometAIHTSSendTextMessageCTAAction",
    "FBWebBloksEnvironment",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = {
              actions: {
                "bk.action.xs.SendTextMessageCTA": o(
                  "CometAIHTSSendTextMessageCTAAction",
                ).CometAIHTSSendTextMessageCTAAction,
              },
              disableHistoryStack: !0,
              embedded: !0,
            }),
            (e[0] = t))
          : (t = e[0]),
        o("FBWebBloksEnvironment").useFBBloksEnvironment(t)
      );
    }
    l.useCometAIHTSBloksEnvironment = e;
  },
  98,
);
