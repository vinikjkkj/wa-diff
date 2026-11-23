__d(
  "MAIBAStandaloneChatContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = u.useMemo,
      p = c({ admarketAccountID: null, legacyAdAccountID: null });
    function _(e) {
      var t = e.admarketAccountID,
        n = e.children,
        r = e.legacyAdAccountID,
        o = m(
          function () {
            return { admarketAccountID: t, legacyAdAccountID: r };
          },
          [t, r],
        );
      return s.jsx(p.Provider, { value: o, children: n });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return d(p);
    }
    ((l.MAIBAStandaloneChatContextProvider = _),
      (l.useMAIBAStandaloneChatContext = f));
  },
  98,
);
