__d(
  "MerlinVisibilitySubscriptions",
  ["CometVPVDUserActivityMonitor", "Run", "Visibility"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        this.$1 = [];
      }
      var t = e.prototype;
      return (
        (t.setup = function (t, n, a) {
          var e;
          this.teardown();
          var i = r("CometVPVDUserActivityMonitor").subscribe(function () {
            n();
          });
          this.$1 = [
            t.subscribeToChanges(n),
            (e = r("Visibility")).addListener(e.HIDDEN, n),
            e.addListener(e.VISIBLE, n),
            o("Run").onBeforeUnload(a, !1),
            { remove: i },
          ];
        }),
        (t.teardown = function () {
          for (var e of this.$1) e.remove();
          this.$1 = [];
        }),
        (t.isActive = function () {
          return this.$1.length > 0;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
