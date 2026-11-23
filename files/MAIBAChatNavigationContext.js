__d(
  "MAIBAChatNavigationContext",
  ["emptyFunction", "react"],
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
      var t = e.children,
        n = e.navState,
        r = d(
          function () {
            return babelHelpers.extends({}, n);
          },
          [n],
        );
      return s.jsx(p.Provider, { value: r, children: t });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return c(p);
    }
    ((l.MAIBAChatNavigationContextProvider = _),
      (l.useMAIBAChatNavigationContext = f));
  },
  98,
);
