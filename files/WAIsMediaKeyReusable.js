__d(
  "WAIsMediaKeyReusable",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2 * o("WATimeUtils").DAY_SECONDS;
    function s(t) {
      var n = Math.floor(Math.random() * o("WATimeUtils").DAY_SECONDS);
      return t != null && o("WATimeUtils").happenedWithin(t, e + n);
    }
    ((l.MMS_MEDIA_KEY_TTL = e), (l.isMediaKeyReusable = s));
  },
  98,
);
