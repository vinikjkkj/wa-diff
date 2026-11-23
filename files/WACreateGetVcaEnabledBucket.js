__d(
  "WACreateGetVcaEnabledBucket",
  ["WAArrayBufferUtils", "WADecimalStringMod", "WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return function () {
        return t == null
          ? null
          : o("WAArrayBufferUtils").arrayBufferMod(e, t) + 100;
      };
    }
    function u(t, n) {
      return function () {
        if (n == null) return null;
        var r = t.split("/"),
          a = r[r.length - 1],
          i = a.split("_")[1];
        return /^\d+$/.test(i)
          ? i == null
            ? (o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "mediaRouteSelection: can't get fbId from mediaDirectPath",
                  ])),
              ),
              null)
            : o("WADecimalStringMod").decimalStringMod(i, n) + 100
          : null;
      };
    }
    ((l.createGetVcaEnabledBucket = s), (l.msgrCreateGetVcaEnabledBucket = u));
  },
  98,
);
