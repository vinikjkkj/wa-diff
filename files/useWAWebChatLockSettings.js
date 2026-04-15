__d(
  "useWAWebChatLockSettings",
  [
    "WAWebChatLockSettings",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useState,
      u = function (t) {
        return {
          hideLockedChats: t.hideLockedChats === !0,
          hasSecretCode: t.secretCode != null,
        };
      };
    function c() {
      var e = o("react-compiler-runtime").c(3),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = o("WAWebChatLockSettings").getChatLockSettings()), (e[0] = t))
        : (t = e[0]);
      var n = t,
        r;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = function () {
            return u(n);
          }),
          (e[1] = r))
        : (r = e[1]);
      var a = s(r),
        i = a[0],
        l = a[1],
        c;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = function () {
              l(u(n));
            }),
            (e[2] = c))
          : (c = e[2]),
        o("useWAWebListener").useListener(n, "change", c),
        i
      );
    }
    l.useChatLockSettings = c;
  },
  98,
);
