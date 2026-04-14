__d(
  "useWAWebChatLockRestriction",
  ["WAWebChatLockCodeModal.react", "WAWebChatLockUtils", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState,
      d = new Set();
    function m() {
      return d.size > 0;
    }
    function p(e) {
      var t = e.condition,
        n = e.entryPoint,
        r = e.id,
        a = e.landingSurface,
        i = e.onPromptFailure,
        l = e.onPromptSuccess,
        s = e.unlockEntryPoint,
        p,
        _;
      t === "always"
        ? ((p = !0), (_ = o("WAWebChatLockUtils").lockedChatsAreAccessible()))
        : t === "bypass"
          ? ((p = !1), (_ = !0))
          : ((p = t.isLocked),
            (_ = o("WAWebChatLockUtils").chatIsAccessible(t)));
      var f = c(_),
        g = f[0],
        h = f[1],
        y = c(!1),
        C = y[0],
        b = y[1];
      return (
        u(
          function () {
            p &&
              !g &&
              !C &&
              (b(!0),
              o("WAWebChatLockCodeModal.react")
                .waitForChatlockSecretCode({
                  unlockAppOnSuccess: !0,
                  entryPoint: n,
                  landingSurface: a,
                  unlockEntryPoint: s,
                })
                .then(function (e) {
                  (h(e), e ? l == null || l() : i == null || i());
                }));
          },
          [g, p, C, l, i, n, a, s],
        ),
        u(
          function () {
            return (
              p && g && d.add(r),
              function () {
                p &&
                  g &&
                  (d.delete(r), m() || o("WAWebChatLockUtils").lockChats());
              }
            );
          },
          [g, p, r],
        ),
        g
      );
    }
    ((l.chatLockComponentIsMounted = m), (l.useChatLockRestriction = p));
  },
  98,
);
