__d(
  "ZenonEventListenerCache",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e() {
        this.$1 = new Map();
      }
      var t = e.prototype;
      return (
        (t.add = function (t, n) {
          var e = this.getByType(t);
          (e.push(n), this.$1.set(t, e));
        }),
        (t.delete = function (t, n) {
          var e = this.getByType(t),
            r = e.filter(function (e) {
              return e !== n;
            });
          r.length < 1 ? this.$1.delete(t) : this.$1.set(t, r);
        }),
        (t.forEachEventListener = function (t) {
          var e = this,
            n = this.getCachedEventTypes();
          n.forEach(function (n) {
            var r = e.getByType(n);
            r.forEach(function (e) {
              t(n, e);
            });
          });
        }),
        (t.getByType = function (t) {
          var e;
          return (e = this.$1.get(t)) != null ? e : [];
        }),
        (t.getCachedEventTypes = function () {
          return Array.from(this.$1.keys());
        }),
        (t.getAll = function () {
          return this.$1;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
