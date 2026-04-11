__d(
  "oz-player/media_source/OzMediaSeekableRangeManager",
  ["oz-player/shims/OzSubscriptionsHandler"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        var n = this;
        ((this.$5 = function (e) {
          e === void 0 && (e = !0);
          var t = n.$2;
          if (t) {
            var r = t.getTimeRanges();
            if (r.length) {
              var o = r[r.length - 1];
              n.$1.updateDuration(o.endTime, e);
            }
          }
        }),
          (this.$1 = e),
          (this.$3 = new (r("oz-player/shims/OzSubscriptionsHandler"))()),
          (this.$4 = t));
      }
      var t = e.prototype;
      return (
        (t.setTimeRangeProvider = function (t) {
          (this.$3.release(),
            this.$3.engage(),
            this.$3.addSubscriptions(t.addUpdateListener(this.$5)),
            (this.$2 = t));
        }),
        (t.listenToMediaStreamInitAppended = function (t) {
          var e = this;
          return t.addListener("initAppended", function () {
            e.$5(!1);
          });
        }),
        (t.destroy = function () {
          this.$3.release();
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
