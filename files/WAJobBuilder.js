__d(
  "WAJobBuilder",
  ["Promise", "WAPersistedJobManager", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function e(e) {
          this.steps = e;
        }
        var t = e.prototype;
        return (
          (t.step = function (t, n) {
            return this.$1(t, typeof n == "function" ? { code: n } : n);
          }),
          (t.$1 = function (n, r) {
            var t = r.code,
              a = r.requirements,
              i = r.stopRetryIf,
              l = d(a, t, i);
            if (i) {
              var s = i.appCrashed,
                u = i.onStopRetry,
                p = i.timePassedSeconds,
                _ = d(null, m(u), i);
              (p != null &&
                (l = c(
                  function (e, t, n) {
                    var r = n.jobStartTime;
                    return o("WATimeUtils").happenedWithin(r, p);
                  },
                  l,
                  _,
                )),
                s &&
                  (l = c(
                    function (e, t, n) {
                      var r = n.afterCrash;
                      return !r;
                    },
                    l,
                    _,
                  )));
            }
            return new e([].concat(this.steps, [{ stepName: n, info: l }]));
          }),
          (t.finalStep = function (t, n) {
            var e = this.step(t, n);
            return {
              end: function () {
                return e.steps;
              },
            };
          }),
          e
        );
      })();
    function u() {
      return new s([]);
    }
    function c(e, t, n) {
      return function (r, o, a) {
        return e(r, o, a) ? t(r, o, a) : n(r, o, a);
      };
    }
    function d(e, t, n) {
      var r = { requirements: e, code: t, stopRetryIf: n };
      return function () {
        return r;
      };
    }
    function m(t) {
      return function (r, a, i) {
        return (e || (e = n("Promise"))).resolve(t(r, a, i)).then(function (e) {
          return e instanceof o("WAPersistedJobManager").InterruptJob
            ? e
            : new (o("WAPersistedJobManager").InterruptJob)(e);
        });
      };
    }
    ((l.JobBuilder = s), (l.definePersistedJob = u));
  },
  98,
);
