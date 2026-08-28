__d(
  "AdsGenericFilterField",
  [
    "invariant",
    "AdsGenericFilterFieldType",
    "LegacyImmutableObject",
    "getObjectValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = { name: "", type: "STRING", level: null, key: "" },
      u = r("getObjectValues")(r("AdsGenericFilterFieldType")),
      c = (function (t) {
        function n(n, r, o) {
          return (
            (e.name = n),
            (e.type = r),
            o
              ? ((e.level = o), (e.key = n + "-" + r + "-" + o))
              : ((e.level = void 0), (e.key = n + "-" + r)),
            t.call(this, e) || this
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.toString = function () {
            return this.key;
          }),
          n
        );
      })(r("LegacyImmutableObject"));
    l.default = c;
  },
  98,
);
