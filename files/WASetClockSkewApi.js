__d(
  "WASetClockSkewApi",
  ["WASetMetaApi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      var e = t.clockSkew;
      return o("WASetMetaApi").setMeta({ clockSkew: e });
    };
    l.setClockSkew = e;
  },
  98,
);
