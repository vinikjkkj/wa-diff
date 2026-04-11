__d(
  "IteratableElementWeakSet",
  ["WebAPIs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.$1 = []),
          (this.$2 = new (o("WebAPIs").WeakSet)()),
          (this.$3 = 0));
      }
      var t = e.prototype;
      return (
        (t.delete = function (t) {
          (this.$2.delete(t),
            (this.$1 = this.$1.filter(function (e) {
              var n = e.deref();
              return n !== t && n != null;
            })));
        }),
        (t.add = function (t) {
          if (!this.$2.has(t)) {
            var e = new (o("WebAPIs").WeakRef)(t);
            (this.$1.push(e), this.$2.add(t));
          }
          this.$3++ % 10 === 0 &&
            (this.$1 = this.$1.filter(function (e) {
              var t = e.deref();
              return t != null;
            }));
        }),
        (t.clear = function () {
          ((this.$1 = []), (this.$2 = new (o("WebAPIs").WeakSet)()));
        }),
        (t.has = function (t) {
          return this.$2.has(t);
        }),
        (t.size = function () {
          var e = 0;
          for (var t of this.$1) {
            var n = t.deref();
            n != null && e++;
          }
          return e;
        }),
        (t.values = function* () {
          this.$1 = this.$1.filter(function (e) {
            return e.deref() != null;
          });
          for (var e of this.$1) {
            var t = e.deref();
            t && (yield t);
          }
        }),
        (t.keys = function* () {
          yield* this.values();
        }),
        (t.entries = function* () {
          var e = this.values();
          for (var t of e) yield [t, t];
        }),
        (t.forEach = function (t, n) {
          var e = this.values();
          for (var r of e) t.call(n, r, r, this);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
