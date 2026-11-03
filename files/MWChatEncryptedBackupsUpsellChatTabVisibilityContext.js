__d(
  "MWChatEncryptedBackupsUpsellChatTabVisibilityContext",
  ["emptyFunction", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = u.useMemo,
      p = u.useState,
      _ = c({
        enabledState: [!1, r("emptyFunction")],
        openState: [!1, r("emptyFunction")],
      });
    function f(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.children,
        r = p(!1),
        a = r[0],
        i = r[1],
        l = p(!1),
        u = l[0],
        c = l[1],
        d;
      t[0] !== u ? ((d = [u, c]), (t[0] = u), (t[1] = d)) : (d = t[1]);
      var m;
      t[2] !== a ? ((m = [a, i]), (t[2] = a), (t[3] = m)) : (m = t[3]);
      var f;
      t[4] !== d || t[5] !== m
        ? ((f = { enabledState: d, openState: m }),
          (t[4] = d),
          (t[5] = m),
          (t[6] = f))
        : (f = t[6]);
      var g = f,
        h;
      return (
        t[7] !== n || t[8] !== g
          ? ((h = s.jsx(_.Provider, { value: g, children: n })),
            (t[7] = n),
            (t[8] = g),
            (t[9] = h))
          : (h = t[9]),
        h
      );
    }
    function g() {
      var e = d(_),
        t = e.enabledState;
      return t;
    }
    function h() {
      var e = d(_),
        t = e.openState;
      return t;
    }
    ((l.MWChatEncryptedBackupsUpsellChatTabVisibilityContextProvider = f),
      (l.useMWChatEncryptedBackupsUpsellChatTabEnabled = g),
      (l.useMWChatEncryptedBackupsUpsellChatTabOpen = h));
  },
  98,
);
