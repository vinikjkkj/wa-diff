__d(
  "MAIBAChatNavigationContext",
  ["emptyFunction", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo,
      m = {
        isMobileWebview: !1,
        onClose: r("emptyFunction"),
        onConversationStarted: r("emptyFunction"),
        onOpenNewThread: r("emptyFunction"),
      },
      p = s.createContext(m);
    function _(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.children,
        r = e.navState,
        a;
      t[0] !== r
        ? ((a = babelHelpers.extends({}, r)), (t[0] = r), (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      return (
        t[2] !== n || t[3] !== i
          ? ((l = s.jsx(p.Provider, { value: i, children: n })),
            (t[2] = n),
            (t[3] = i),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    function f() {
      return c(p);
    }
    ((l.MAIBAChatNavigationContextProvider = _),
      (l.useMAIBAChatNavigationContext = f));
  },
  98,
);
