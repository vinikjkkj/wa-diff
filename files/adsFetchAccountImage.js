__d(
  "adsFetchAccountImage",
  ["AdsGraphAPI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      r === void 0 && (r = "fetchAccountImage");
      var a = o("AdsGraphAPI")
        .get(r)
        .adaccount(e)
        .edge("adimages")
        .declareOnly();
      return (
        n.hashes != null && (n.hashes = n.hashes.filter(Boolean)),
        a.get(babelHelpers.extends({}, n, { fields: Object.keys(t) }))
      );
    }
    function s(t, n, r, o) {
      return e(t, n, r, o).go();
    }
    l.fetchAccountImages = s;
  },
  98,
);
