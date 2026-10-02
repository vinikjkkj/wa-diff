__d(
  "WAGetClockSkewApi",
  ["WAGetMetaApi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
      return o("WAGetMetaApi")
        .getMeta()
        .then(function (e) {
          var t = e.clockSkew;
          return { clockSkew: t || 0 };
        });
    };
    l.getClockSkew = e;
  },
  98,
);
