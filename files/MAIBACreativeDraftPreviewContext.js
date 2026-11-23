__d(
  "MAIBACreativeDraftPreviewContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = c(null);
    function p(e) {
      var t = e.children,
        n = e.value;
      return s.jsx(m.Provider, { value: n, children: t });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return d(m);
    }
    ((l.MAIBACreativeDraftPreviewContextProvider = p),
      (l.useMAIBACreativeDraftPreview = _));
  },
  98,
);
