__d(
  "ZenonPercentMediaStat",
  ["ZenonHistogram", "ZenonMediaStatsConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        this.$1 = new (r("ZenonHistogram"))();
      }
      var t = e.prototype;
      return (
        (t.add = function (t, n, r, o) {
          var e = { contentType: r, value: t, view: n, voiceEnergy: o };
          this.$1.add(e);
        }),
        (t.getAvgAndPercentile = function (t, n, r, a) {
          var e;
          return (
            a == null
              ? (e = function (t) {
                  return t.view === n && t.contentType === r;
                })
              : (e = function (t) {
                  var e =
                    t.voiceEnergy >
                    o("ZenonMediaStatsConfig").VOICE_ENERGY_THRESHOLD;
                  return t.view === n && t.contentType === r && e === a;
                }),
            this.$1.getAvgAndPercentile(t, e)
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
