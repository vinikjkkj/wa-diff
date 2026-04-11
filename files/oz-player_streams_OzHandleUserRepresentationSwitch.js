__d(
  "oz-player/streams/OzHandleUserRepresentationSwitch",
  [
    "oz-player/shims/OzSubscriptionsHandler",
    "oz-player/shims/ozReportUnexpectedError",
    "oz-player/utils/OzErrorEmitter",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, o, a, i) {
        var l = this;
        ((this.$2 = new (r("oz-player/utils/OzErrorEmitter"))()),
          (this.$5 = null),
          (this.$6 = new (r("oz-player/shims/OzSubscriptionsHandler"))()),
          (this.$1 = e),
          (this.$3 = t),
          (this.$4 = n),
          (this.$7 = o),
          (this.$8 = i),
          a
            .then(
              function (e) {
                l.$5 = e;
              },
              function () {},
            )
            .catch(function (e) {
              r("oz-player/shims/ozReportUnexpectedError")(
                e,
                "OzHandleUserRepresentationSwitch SBM promise then - create",
              );
            }),
          this.$6.addSubscriptions(
            o.addListener("switchRepresentation", function (e, t) {
              l.$9(e, t);
            }),
          ));
      }
      var t = e.prototype;
      return (
        (t.destroy = function () {
          (this.$6.release(), this.$6.engage());
        }),
        (t.onError = function (t) {
          return this.$2.onError(t);
        }),
        (t.$9 = function (t, n) {
          if (t === "user") {
            var e = this.$5;
            if (e != null) {
              for (
                var o = this.$7.getRepresentationIDAtTime(
                    this.$3.getCurrentTime(),
                  ),
                  a,
                  i = 0;
                i < this.$4.length;
                i++
              )
                this.$4[i].getID() === o && (a = this.$4[i]);
              if (a && n && (this.$8 || a.getBandwidth() < n.getBandwidth())) {
                var l = a.getSegmentByTime(this.$3.getCurrentTime());
                l &&
                  e
                    .clearRangeWithWait([
                      {
                        fromTime: this.$3.getCurrentTime(),
                        toTime: this.$3.getDuration(),
                      },
                    ])
                    .catch(function (e) {
                      r("oz-player/shims/ozReportUnexpectedError")(
                        e,
                        "OzHandleUserRepresentationSwitch clearRangeWithWait catch",
                      );
                    });
              }
            }
          }
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
