__d(
  "AdsEditorSelectedIDsContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = new WeakMap();
    function c() {
      return {};
    }
    function d(e, t) {
      u.set(e, t);
    }
    function m(e) {
      return e != null ? u.get(e) : null;
    }
    function p(e) {
      var t = m(e == null ? void 0 : e.latestToken);
      return t != null
        ? t
        : e == null
          ? null
          : {
              adObjectIDs: e.adObjectIDs,
              adObjectLevel: e.adObjectLevel,
              draftFragmentIDs: e.draftFragmentIDs,
            };
    }
    var _ = { adObjectIDs: null, adObjectLevel: null, draftFragmentIDs: null },
      f = s.createContext(_);
    ((l.createSelectedIDsToken = c),
      (l.setLatestSelectedIDs = d),
      (l.getLatestSelectedIDs = m),
      (l.resolveSelectedIDs = p),
      (l.AdsEditorSelectedIDsContext = f));
  },
  98,
);
