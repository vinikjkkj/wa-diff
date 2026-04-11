__d(
  "useWAWebChatLockEvents",
  [
    "WAWebChatLockUtils",
    "WAWebCmd",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useState;
    function u() {
      var e = o("react-compiler-runtime").c(3),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = o("WAWebChatLockUtils").lockedChatsAreAccessible()), (e[0] = t))
        : (t = e[0]);
      var n = s(t),
        r = n[0],
        a = n[1],
        i;
      (e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            a(!1);
          }),
          (e[1] = i))
        : (i = e[1]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "chatlock:lock",
          i,
        ));
      var l;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = function () {
              a(!0);
            }),
            (e[2] = l))
          : (l = e[2]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "chatlock:unlock",
          l,
        ),
        r
      );
    }
    l.useChatLockEvents = u;
  },
  98,
);
