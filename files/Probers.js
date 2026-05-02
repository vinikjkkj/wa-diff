__d(
  "Probers",
  ["DGWEnvUtil", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "/proxygen/health",
      s = 5e3,
      u = (function () {
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
      c = (function () {
        function t() {
          ((this.$3 = null),
            (this.$2 =
              r("DGWEnvUtil")
                .getDGWEndpoint()
                .replace(/^wss:\/\//, "https://")
                .replace(/\/ws$/, "") + e));
        }
        t.getInstance = function () {
          return (t.$1 == null && (t.$1 = new t()), t.$1);
        };
        var n = t.prototype;
        return (
          (n.probe = function () {
            var e = this;
            if (this.$3 != null) return this.$3;
            var t = new AbortController(),
              n = window.setTimeout(function () {
                return t.abort();
              }, s);
            return (
              (this.$3 = window
                .fetch(this.$2, {
                  signal: t.signal,
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
                  (window.clearTimeout(n), (e.$3 = null));
                })),
              this.$3
            );
          }),
          t
        );
      })();
    function d(e, t, n, r) {
      return new u({ execute: e, onSuccess: n, onFailure: r, intervalMs: t });
    }
    function m(e, t, n) {
      return new u({
        execute: function () {
          return c
            .getInstance()
            .probe()
            .then(function (e) {
              if (!e) throw r("err")("network_unhealthy");
            });
        },
        onSuccess: t,
        onFailure: n,
        intervalMs: e,
      });
    }
    ((l.Probe = u), (l.createStreamProbe = d), (l.createNetworkProbe = m));
  },
  98,
);
