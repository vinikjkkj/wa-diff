__d(
  "AdsBaseImageInfoStore",
  ["AdsImageInfoUtils", "FluxDerivedStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsImageInfoUtils").convertCacheKeyToQuery(e);
    }
    var s = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.__getActionTypes = function () {
          return [];
        }),
        (n.getByQuery = function (t, n) {
          return this.get(o("AdsImageInfoUtils").convertQueryToCacheKey(t, n));
        }),
        t
      );
    })(r("FluxDerivedStore"));
    ((s.__moduleID = i.id),
      (l._getImageInfoQueryFromCacheKey = e),
      (l.AdsBaseImageInfoStore = s));
  },
  98,
);
