__d(
  "composerTaggerReducer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n,
        r,
        o = new Set(
          (n = (r = t.taggerData) == null ? void 0 : r.activeTaggerList) != null
            ? n
            : [],
        );
      return o.has(e)
        ? (o.delete(e),
          babelHelpers.extends({}, t, { taggerData: { activeTaggerList: o } }))
        : t;
    }
    function l(e, t) {
      var n,
        r,
        o = new Set(
          (n = (r = t.taggerData) == null ? void 0 : r.activeTaggerList) != null
            ? n
            : [],
        );
      return o.has(e)
        ? t
        : (o.add(e),
          babelHelpers.extends({}, t, { taggerData: { activeTaggerList: o } }));
    }
    function s(t, n) {
      switch (n.type) {
        case "REMOVE_TAGGER": {
          var r = n.taggerType;
          return e(r, t);
        }
        case "ACTIVATE_TAGGER": {
          var o = n.taggerType;
          return l(o, t);
        }
        default:
          break;
      }
      return t;
    }
    i.default = s;
  },
  66,
);
