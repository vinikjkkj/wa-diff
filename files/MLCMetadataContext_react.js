__d(
  "MLCMetadataContext.react",
  ["react", "vulture"],
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
        o = e.surface;
      r("vulture")("MdVM3kc-XzhP1VD9ZUtXsI1SWxk=");
      var a = d(
        function () {
          return { contentID: n, surface: o };
        },
        [n, o],
      );
      return s.jsx(m.Provider, { value: a, children: t });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return c(m);
    }
    ((l.MLCMetadataProvider = p), (l.useMLCMetadata = _));
  },
  98,
);
