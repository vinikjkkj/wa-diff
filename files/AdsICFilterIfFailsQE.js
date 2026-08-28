__d(
  "AdsICFilterIfFailsQE",
  ["AdsIntelligentComponentsDataLoader"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        this.$1 = new Set();
      }
      var t = e.prototype;
      return (
        (t.getInvisibleReason = function () {
          return "QENotPassed";
        }),
        (t.shouldHideMessageIfFailsRule = function () {
          return !0;
        }),
        (t.filter = function (t, n) {
          var e = t.getAYMTData();
          if (e && !this.$1.has(t.getID())) {
            var r = e.tip_id,
              a = e.channel_id;
            r != null &&
              a != null &&
              (this.$1.add(t.getID()),
              o("AdsIntelligentComponentsDataLoader").logExposure(r, a));
          }
          return t.getQEState();
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
