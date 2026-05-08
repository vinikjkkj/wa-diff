__d(
  "Probers",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 5e3,
      s = (function () {
        function e(e) {
          ((this.$5 = 0),
            (this.$1 = e.execute),
            (this.$2 = e.onSuccess),
            (this.$3 = e.onFailure),
            (this.$4 = e.intervalMs));
        }
        var t = e.prototype;
        return (
          (t.start = function () {
            var e = this;
            (this.stop(),
              this.$5++,
              (this.$6 = window.setTimeout(function () {
                return e.$7();
              }, this.$4)));
          }),
          (t.stop = function () {
            (this.$5++,
              this.$6 != null &&
                (window.clearTimeout(this.$6), (this.$6 = null)));
          }),
          (t.$7 = function () {
            var e = this,
              t = this.$5;
            this.$1()
              .then(
                function () {
                  t === e.$5 && e.$2();
                },
                function () {
                  t === e.$5 && e.$3();
                },
              )
              .finally(function () {
                t === e.$5 &&
                  (e.$6 = window.setTimeout(function () {
                    return e.$7();
                  }, e.$4));
              });
          }),
          e
        );
      })(),
      u = (function () {
        function t(e) {
          ((this.$3 = null), (this.$2 = e));
        }
        t.getInstance = function (n) {
          return (t.$1 == null && (t.$1 = new t(n)), t.$1);
        };
        var n = t.prototype;
        return (
          (n.probe = function () {
            var t = this;
            if (this.$3 != null) return this.$3;
            var n = new AbortController(),
              r = window.setTimeout(function () {
                return n.abort();
              }, e);
            return (
              (this.$3 = window
                .fetch(this.$2, {
                  signal: n.signal,
                  cache: "no-store",
                  mode: "no-cors",
                })
                .then(function () {
                  return !0;
                })
                .catch(function () {
                  return !1;
                })
                .finally(function () {
                  (window.clearTimeout(r), (t.$3 = null));
                })),
              this.$3
            );
          }),
          t
        );
      })();
    function c(e, t, n, r) {
      return new s({ execute: e, onSuccess: n, onFailure: r, intervalMs: t });
    }
    function d(e, t, n, o) {
      return new s({
        execute: function () {
          return u
            .getInstance(t)
            .probe()
            .then(function (e) {
              if (!e) throw r("err")("network_unhealthy");
            });
        },
        onSuccess: n,
        onFailure: o,
        intervalMs: e,
      });
    }
    ((l.Probe = s), (l.createStreamProbe = c), (l.createNetworkProbe = d));
  },
  98,
);
