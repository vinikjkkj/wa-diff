__d(
  "AdsUnifiedCreativeAPIFieldMappingRecord",
  ["AdsUnifiedCreativeAPIFields", "emptyFunction", "immutable", "mapObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = r("mapObject"))).untyped(
        r("AdsUnifiedCreativeAPIFields"),
        r("emptyFunction").thatReturnsNull,
      ),
      u = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("immutable").Record(s));
    l.default = u;
  },
  98,
);
