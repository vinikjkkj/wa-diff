__d(
  "AdsChange",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Record({
        path: void 0,
        oldValue: void 0,
        newValue: void 0,
      }),
      s = (function (e) {
        function t(t, n, r) {
          return e.call(this, { path: t, oldValue: n, newValue: r }) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e);
    l.default = s;
  },
  98,
);
