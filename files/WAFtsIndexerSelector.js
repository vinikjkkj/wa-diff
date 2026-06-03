__d(
  "WAFtsIndexerSelector",
  ["Promise", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (function () {
        function t(e) {
          ((this.$1 = new Map()), (this.versionsInfo = e));
        }
        var r = t.prototype;
        return (
          (r.$2 = function (t, n, r) {
            var e,
              o = (e = this.$1.get(t)) != null ? e : new Map();
            (this.$1.get(t) == null && this.$1.set(t, o), o.set(n, r));
          }),
          (r.$3 = function (t, n) {
            var e;
            return (e = this.$1.get(t)) == null ? void 0 : e.get(n);
          }),
          (r.select = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                if (t == null) return (e || (e = n("Promise"))).resolve(null);
                var r = this.$3(t.schemaVersion, t.tokenizerVersion),
                  o = this.versionsInfo,
                  a = o.indexers,
                  i = o.tokenizers;
                if (r == null && i[t.tokenizerVersion] && a[t.schemaVersion]) {
                  var l = yield i[t.tokenizerVersion]();
                  ((r = yield a[t.schemaVersion](l)),
                    r != null &&
                      this.$2(t.schemaVersion, t.tokenizerVersion, r));
                }
                return (e || (e = n("Promise"))).resolve(r);
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          t
        );
      })();
    i.default = l;
  },
  66,
);
