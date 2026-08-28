__d(
  "adsConvertAdObjectRecordToPlainJS",
  ["DeepRecord", "memoizeByReference"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoizeByReference")(function (e) {
        return e.toJS();
      }),
      s = function (n) {
        return n == null ? null : r("DeepRecord").isDeepRecord(n) ? e(n) : n;
      },
      u = s;
    l.default = u;
  },
  98,
);
