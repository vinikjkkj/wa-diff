__d(
  "useWAWebChatLockSettings",
  ["WAWebChatLockSettings", "react", "useWAWebListener"],
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
      var e = o("WAWebChatLockSettings").getChatLockSettings(),
        t = s(function () {
          return u(e);
        }),
        n = t[0],
        r = t[1];
      return (
        o("useWAWebListener").useListener(e, "change", function () {
          r(u(e));
        }),
        n
      );
    }
    l.useChatLockSettings = c;
  },
  98,
);
