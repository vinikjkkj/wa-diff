__d(
  "DGWPinger",
  ["IDGWLoggingContext"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, r) {
        ((this.$1 = e),
          (this.$4 = t),
          (this.$5 = n),
          (this.$6 = r),
          (this.$3 = !1));
      }
      var t = e.prototype;
      return (
        (t.$7 = function () {
          var e = this;
          this.$3
            ? (this.$6.bumpODSKey(
                o("IDGWLoggingContext").DGWLoggingComponent.PINGER,
                "timeout_fired.reset",
              ),
              (this.$3 = !1),
              this.$4(),
              this.$6.bumpODSKey(
                o("IDGWLoggingContext").DGWLoggingComponent.PINGER,
                "timeout.newtimeout",
              ),
              (this.$2 = window.setTimeout(function () {
                e.$7();
              }, this.$1)))
            : (this.$6.bumpODSKey(
                o("IDGWLoggingContext").DGWLoggingComponent.PINGER,
                "timeout_fired.disconnect",
              ),
              this.$5());
        }),
        (t.reset = function () {
          var e = this;
          ((this.$3 = !0),
            this.$2 &&
              (this.$6.bumpODSKey(
                o("IDGWLoggingContext").DGWLoggingComponent.PINGER,
                "reset",
              ),
              window.clearTimeout(this.$2),
              (this.$2 = null)),
            this.$1 > 0 &&
              (this.$6.bumpODSKey(
                o("IDGWLoggingContext").DGWLoggingComponent.PINGER,
                "reset.newtimeout",
              ),
              (this.$2 = window.setTimeout(function () {
                e.$7();
              }, this.$1))));
        }),
        (t.cancel = function () {
          this.$2 &&
            (this.$6.bumpODSKey(
              o("IDGWLoggingContext").DGWLoggingComponent.PINGER,
              "canceled",
            ),
            window.clearTimeout(this.$2),
            (this.$2 = null));
        }),
        e
      );
    })();
    l.DGWPinger = e;
  },
  98,
);
