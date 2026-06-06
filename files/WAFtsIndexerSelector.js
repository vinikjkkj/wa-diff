__d(
  "WAFtsIndexerSelector",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$1 = new Map()), (this.versionsInfo = e));
      }
      var t = e.prototype;
      return (
        (t.$2 = function (t, n, r) {
          var e,
            o = (e = this.$1.get(t)) != null ? e : new Map();
          (this.$1.get(t) == null && this.$1.set(t, o), o.set(n, r));
        }),
        (t.$3 = function (t, n) {
          var e;
          return (e = this.$1.get(t)) == null ? void 0 : e.get(n);
        }),
        (t.select = async function (t) {
          if (t == null) return Promise.resolve(null);
          var e = this.$3(t.schemaVersion, t.tokenizerVersion),
            n = this.versionsInfo,
            r = n.indexers,
            o = n.tokenizers;
          if (e == null && o[t.tokenizerVersion] && r[t.schemaVersion]) {
            var a = await o[t.tokenizerVersion]();
            ((e = await r[t.schemaVersion](a)),
              e != null && this.$2(t.schemaVersion, t.tokenizerVersion, e));
          }
          return Promise.resolve(e);
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
