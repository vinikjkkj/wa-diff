__d(
  "useWAWebChatLockRestriction",
  [
    "WAWebChatLockCodeModal.react",
    "WAWebChatLockUtils",
    "react",
    "react-compiler-runtime",
  ],
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
      var t = o("react-compiler-runtime").c(30),
        n = e.condition,
        r = e.entryPoint,
        a = e.id,
        i = e.landingSurface,
        l = e.onPromptFailure,
        s = e.onPromptSuccess,
        p = e.unlockEntryPoint,
        _,
        f;
      if (t[0] !== n) {
        if (n === "always") {
          f = !0;
          var g;
          (t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = o("WAWebChatLockUtils").lockedChatsAreAccessible()),
              (t[3] = g))
            : (g = t[3]),
            (_ = g));
        } else
          n === "bypass"
            ? ((f = !1), (_ = !0))
            : ((f = n.isLocked),
              (_ = o("WAWebChatLockUtils").chatIsAccessible(n)));
        ((t[0] = n), (t[1] = _), (t[2] = f));
      } else ((_ = t[1]), (f = t[2]));
      var h = c(_),
        y = h[0],
        C = h[1],
        b = c(!1),
        v = b[0],
        S = b[1],
        R;
      t[4] !== r ||
      t[5] !== v ||
      t[6] !== y ||
      t[7] !== i ||
      t[8] !== l ||
      t[9] !== s ||
      t[10] !== f ||
      t[11] !== p
        ? ((R = function () {
            f &&
              !y &&
              !v &&
              (S(!0),
              o("WAWebChatLockCodeModal.react")
                .waitForChatlockSecretCode({
                  unlockAppOnSuccess: !0,
                  entryPoint: r,
                  landingSurface: i,
                  unlockEntryPoint: p,
                })
                .then(function (e) {
                  (C(e), e ? s == null || s() : l == null || l());
                }));
          }),
          (t[4] = r),
          (t[5] = v),
          (t[6] = y),
          (t[7] = i),
          (t[8] = l),
          (t[9] = s),
          (t[10] = f),
          (t[11] = p),
          (t[12] = R))
        : (R = t[12]);
      var L;
      (t[13] !== r ||
      t[14] !== v ||
      t[15] !== y ||
      t[16] !== i ||
      t[17] !== l ||
      t[18] !== s ||
      t[19] !== f ||
      t[20] !== p
        ? ((L = [y, f, v, s, l, r, i, p]),
          (t[13] = r),
          (t[14] = v),
          (t[15] = y),
          (t[16] = i),
          (t[17] = l),
          (t[18] = s),
          (t[19] = f),
          (t[20] = p),
          (t[21] = L))
        : (L = t[21]),
        u(R, L));
      var E;
      t[22] !== a || t[23] !== y || t[24] !== f
        ? ((E = function () {
            return (
              f && y && d.add(a),
              function () {
                f &&
                  y &&
                  (d.delete(a), m() || o("WAWebChatLockUtils").lockChats());
              }
            );
          }),
          (t[22] = a),
          (t[23] = y),
          (t[24] = f),
          (t[25] = E))
        : (E = t[25]);
      var k;
      return (
        t[26] !== a || t[27] !== y || t[28] !== f
          ? ((k = [y, f, a]),
            (t[26] = a),
            (t[27] = y),
            (t[28] = f),
            (t[29] = k))
          : (k = t[29]),
        u(E, k),
        y
      );
    }
    ((l.chatLockComponentIsMounted = m), (l.useChatLockRestriction = p));
  },
  98,
);
