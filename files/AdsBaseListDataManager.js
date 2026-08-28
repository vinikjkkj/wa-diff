__d(
  "AdsBaseListDataManager",
  ["AdsAbstractDataManager", "abstractMethod", "adsCoalesceLoads"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        var t;
        return (
          (t = e.call(this) || this),
          t.__getMultiple &&
            (t.loadFor = r("adsCoalesceLoads")(t.__loadMultiple)),
          t
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.loadFor = function (t) {
          r("abstractMethod")("AdsBaseListDataManager", "loadFor");
        }),
        t
      );
    })(r("AdsAbstractDataManager"));
    l.default = e;
  },
  98,
);
