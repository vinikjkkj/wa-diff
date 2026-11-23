__d(
  "WAGetPrekeyIdsInRange",
  ["WASignalKeys"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e;
    }
    function s(t, n) {
      var r = [],
        a = t,
        i = n;
      if (a <= i)
        for (var l = a; l <= n; l++)
          r.push(o("WASignalKeys").castToPreKeyId(l));
      else {
        for (
          var s = a;
          s < o("WASignalKeys").PRE_KEY_NON_INCLUSIVE_UPPER_BORDER;
          s++
        )
          r.push(o("WASignalKeys").castToPreKeyId(s));
        for (var u = 1; u <= i; u++)
          r.push(o("WASignalKeys").castToPreKeyId(u));
      }
      return r;
    }
    l.getPrekeyIdsInRange = s;
  },
  98,
);
