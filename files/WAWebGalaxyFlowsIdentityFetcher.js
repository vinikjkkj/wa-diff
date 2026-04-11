__d(
  "WAWebGalaxyFlowsIdentityFetcher",
  [
    "Promise",
    "WAWebGetIdentityKeysJob",
    "WAWebLidMigrationUtils",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 3e4,
      u = 3,
      c = 1e4,
      d = (function () {
        function t() {
          var e = this;
          ((this.$2 = new Map()),
            (this.$3 = null),
            (this.$1 = new Map()),
            (this.$3 = window.setInterval(function () {
              e.$4();
            }, 2 * s)));
        }
        var a = t.prototype;
        return (
          (a.fetchIdentityFor = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n,
                  r,
                  a = e.isLid()
                    ? (n =
                        (r = o("WAWebLidMigrationUtils").toPn(e)) == null
                          ? void 0
                          : r.toString()) != null
                      ? n
                      : ""
                    : e.toString(),
                  i = this.$1.get(a);
                if (i == null) {
                  (this.$1.set(a, [t]), this.$2.set(a, Date.now()));
                  try {
                    yield this.$5(e);
                  } catch (e) {
                    throw e;
                  } finally {
                    var l = this.$1.get(a);
                    (this.$1.delete(a),
                      this.$2.delete(a),
                      l != null &&
                        l.forEach(function (e) {
                          return e.onComplete();
                        }));
                  }
                } else i.push(t);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$5 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, r) {
                r === void 0 && (r = 0);
                try {
                  yield this.$6(t);
                } catch (a) {
                  if (r < u) {
                    var o = Math.min(1e3 * Math.pow(2, r), c);
                    return (
                      yield new (e || (e = n("Promise")))(function (e) {
                        return window.setTimeout(e, o);
                      }),
                      this.$5(t, r + 1)
                    );
                  }
                  throw a;
                }
              },
            );
            function r(e, n) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.$6 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = new (e || (e = n("Promise")))(function (e, t) {
                    window.setTimeout(function () {
                      return t(r("err")("Timeout"));
                    }, s);
                  }),
                  i = o("WAWebGetIdentityKeysJob").getAndStoreIdentityKeys([t]);
                yield e.race([i, a]);
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.$4 = function () {
            var e = this,
              t = Date.now(),
              n = [];
            for (var r of this.$2.entries()) {
              var o = r[0],
                a = r[1];
              t - a > s * 2 && n.push(o);
            }
            n.forEach(function (t) {
              (e.$1.delete(t), e.$2.delete(t));
            });
          }),
          t
        );
      })(),
      m = new d();
    l.GalaxyFlowsIdentityFetcher = m;
  },
  98,
);
