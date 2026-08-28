__d(
  "AdsBaseDataManager",
  ["AdsAbstractDataManager", "abstractMethod", "adsCoalesceLoads"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        var t;
        return (
          (t = e.call(this) || this),
          t.__getMultiple &&
            (t.load = r("adsCoalesceLoads")(
              t.__loadMultiple,
              t.__getBatchSize(),
            )),
          t
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.__getBatchSize = function () {
          return null;
        }),
        (n.delete = function (t) {
          r("abstractMethod")("AdsBaseDataManager", "delete");
        }),
        (n.load = function (t) {
          r("abstractMethod")("AdsBaseDataManager", "load");
        }),
        (n.loadAll = function (t) {
          r("abstractMethod")("AdsBaseDataManager", "loadAll");
        }),
        t
      );
    })(r("AdsAbstractDataManager"));
    l.default = e;
  },
  98,
);
