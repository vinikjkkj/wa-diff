__d(
  "useWAWebChatLockEvents",
  ["WAWebChatLockUtils", "WAWebCmd", "react", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useState;
    function u() {
      var e = s(o("WAWebChatLockUtils").lockedChatsAreAccessible()),
        t = e[0],
        n = e[1];
      return (
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "chatlock:lock",
          function () {
            n(!1);
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "chatlock:unlock",
          function () {
            n(!0);
          },
        ),
        t
      );
    }
    l.useChatLockEvents = u;
  },
  98,
);
