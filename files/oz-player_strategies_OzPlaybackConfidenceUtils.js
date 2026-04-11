__d(
  "oz-player/strategies/OzPlaybackConfidenceUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0.8;
    function l(t, n, r, o, a, i) {
      var l = Math.min(1, r / o),
        s = 1 + (1 - l) * a,
        u = t.getBandwidth() * s;
      return u > n ? e * (n / u) : 1 - ((1 - e) * u) / n;
    }
    i.getPlaybackConfidence = l;
  },
  66,
);
