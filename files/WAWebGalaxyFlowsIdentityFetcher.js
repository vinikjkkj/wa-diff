__d(
  "WAWebGalaxyFlowsIdentityFetcher",
  ["WAWebGetIdentityKeysJob", "WAWebLidMigrationUtils", "err"],
  function (t, n, r, o, a, i, l) {
    var e = 3e4,
      s = 3,
      u = 1e4,
      c = (function () {
        function t() {
          var t = this;
          ((this.$2 = new Map()),
            (this.$3 = null),
            (this.$1 = new Map()),
            (this.$3 = window.setInterval(function () {
              t.$4();
            }, 2 * e)));
        }
        var n = t.prototype;
        return (
          (n.fetchIdentityFor = async function (t, n) {
            var e,
              r,
              a = t.isLid()
                ? (e =
                    (r = o("WAWebLidMigrationUtils").toPn(t)) == null
                      ? void 0
                      : r.toString()) != null
                  ? e
                  : ""
                : t.toString(),
              i = this.$1.get(a);
            if (i == null) {
              (this.$1.set(a, [n]), this.$2.set(a, Date.now()));
              try {
                await this.$5(t);
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
            } else i.push(n);
          }),
          (n.$5 = async function (t, n) {
            n === void 0 && (n = 0);
            try {
              await this.$6(t);
            } catch (r) {
              if (n < s) {
                var e = Math.min(1e3 * Math.pow(2, n), u);
                return (
                  await new Promise(function (t) {
                    return window.setTimeout(t, e);
                  }),
                  this.$5(t, n + 1)
                );
              }
              throw r;
            }
          }),
          (n.$6 = async function (n) {
            var t = new Promise(function (t, n) {
                window.setTimeout(function () {
                  return n(r("err")("Timeout"));
                }, e);
              }),
              a = o("WAWebGetIdentityKeysJob").getAndStoreIdentityKeys([n]);
            await Promise.race([a, t]);
          }),
          (n.$4 = function () {
            var t = this,
              n = Date.now(),
              r = [];
            for (var o of this.$2.entries()) {
              var a = o[0],
                i = o[1];
              n - i > e * 2 && r.push(a);
            }
            r.forEach(function (e) {
              (t.$1.delete(e), t.$2.delete(e));
            });
          }),
          t
        );
      })(),
      d = new c();
    l.GalaxyFlowsIdentityFetcher = d;
  },
  98,
);
