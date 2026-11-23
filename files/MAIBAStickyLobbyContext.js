__d(
  "MAIBAStickyLobbyContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo,
      m = s.createContext(null);
    function p(e) {
      var t = e.children,
        n = e.setInlineWidgetVisible,
        r = d(
          function () {
            return { setInlineWidgetVisible: n };
          },
          [n],
        );
      return s.jsx(m.Provider, { value: r, children: t });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return c(m);
    }
    ((l.MAIBAStickyLobbyContextProvider = p), (l.useStickyLobbyContext = _));
  },
  98,
);
