__d(
  "MLCMetadataContext.react",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo,
      m = s.createContext({ contentID: null, surface: null });
    function p(e) {
      var t = e.children,
        n = e.contentID,
        r = e.surface,
        o = d(
          function () {
            return { contentID: n, surface: r };
          },
          [n, r],
        );
      return s.jsx(m.Provider, { value: o, children: t });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return c(m);
    }
    ((l.MLCMetadataProvider = p), (l.useMLCMetadata = _));
  },
  98,
);
