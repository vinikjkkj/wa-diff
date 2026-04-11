__d(
  "RSTBackgroundInfo",
  ["RSTTimespanBase"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.background = function () {
          this.startTimespan();
        }),
        (n.foreground = function () {
          this.endTimespan();
        }),
        (n.isInBackground = function () {
          return this.isWithinTimespan();
        }),
        (n.isInForeground = function () {
          return !this.isInBackground();
        }),
        (n.getBackgroundTime = function (t, n) {
          return this.getIntersectionTime(t, n);
        }),
        t
      );
    })(r("RSTTimespanBase"));
    l.RSTBackgroundInfoManager = e;
  },
  98,
);
