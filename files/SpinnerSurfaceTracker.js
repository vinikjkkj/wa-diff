__d(
  "SpinnerSurfaceTracker",
  [
    "CancelablePromise",
    "InteractionAreas",
    "Promise",
    "asyncToGeneratorRuntime",
    "emptyFunction",
    "promiseDone",
    "waitForDoubleRAF",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return new (r("CancelablePromise"))(r("waitForDoubleRAF")());
    }
    var u = (function () {
      function t(t) {
        this.$1 = t;
        var r = function () {};
        ((this.$2 = new (e || (e = n("Promise")))(function (e, t) {
          r = function () {
            e();
          };
        })),
          (this.$3 = {
            status: "recording",
            resolveAllSpinnersLoaded: r,
            spinnerEvents: new Map(),
          }));
      }
      t.inSurface = function (n) {
        return new t({ anyContains: [n], noneContains: [] });
      };
      var o = t.prototype;
      return (
        (o.$4 = function (t) {
          var e = t.cssStack;
          return (
            this.$1.anyContains.some(function (t) {
              return r("InteractionAreas").inSurface(e != null ? e : [], t);
            }) &&
            !this.$1.noneContains.some(function (t) {
              return r("InteractionAreas").inSurface(e != null ? e : [], t);
            })
          );
        }),
        (o.$5 = function (t) {
          return t != null && this.$3.status !== "all_loaded" && this.$4(t);
        }),
        (o.onStart = function (t) {
          if (this.$5(t)) {
            var e = this.$3;
            switch (e.status) {
              case "waiting_for_next_frame":
                (e.cancel(),
                  e.spinnerEvents.set(t.id, t),
                  (this.$3 = {
                    status: "tracking",
                    resolveAllSpinnersLoaded: e.resolveAllSpinnersLoaded,
                    spinnerEvents: e.spinnerEvents,
                  }));
                break;
              case "tracking":
              case "recording":
                e.spinnerEvents.set(t.id, t);
                break;
            }
          }
        }),
        (o.allLoaded = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return this.$3.status !== "recording"
              ? this.$2
              : ((this.$3 = this.$6({
                  status: "tracking",
                  resolveAllSpinnersLoaded: this.$3.resolveAllSpinnersLoaded,
                  spinnerEvents: this.$3.spinnerEvents,
                })),
                this.$2);
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (o.$6 = function (t) {
          var e = this;
          if (t.status === "tracking" && t.spinnerEvents.size == 0) {
            var n = s();
            return (
              r("promiseDone")(
                n.getPromise().then(function () {
                  ((e.$3 = { status: "all_loaded" }),
                    t.resolveAllSpinnersLoaded());
                }, r("emptyFunction")),
              ),
              {
                status: "waiting_for_next_frame",
                resolveAllSpinnersLoaded: t.resolveAllSpinnersLoaded,
                spinnerEvents: t.spinnerEvents,
                cancel: function () {
                  return n.cancel();
                },
              }
            );
          }
          return t;
        }),
        (o.onEnd = function (t, n) {
          if (this.$5(t)) {
            var e = this.$3;
            (e.status === "tracking" || e.status === "recording") &&
              e.spinnerEvents.delete(t.id) &&
              (this.$3 = this.$6(this.$3));
          }
        }),
        (o.getState = function () {
          return this.$3;
        }),
        t
      );
    })();
    l.default = u;
  },
  98,
);
