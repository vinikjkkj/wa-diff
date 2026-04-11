__d(
  "IteratableElementWeakMap",
  ["WebAPIs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.$1 = []),
          (this.$2 = new (o("WebAPIs").WeakMap)()),
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
        (t.set = function (t, n) {
          if (!this.$2.has(t)) {
            var e = new (o("WebAPIs").WeakRef)(t);
            (this.$1.push(e), this.$2.set(t, n));
          }
          this.$3++ % 10 === 0 &&
            (this.$1 = this.$1.filter(function (e) {
              var t = e.deref();
              return t != null;
            }));
        }),
        (t.get = function (t) {
          return this.$2.get(t);
        }),
        (t.clear = function () {
          ((this.$1 = []), (this.$2 = new (o("WebAPIs").WeakMap)()));
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
        (t.entries = function* () {
          this.$1 = this.$1.filter(function (e) {
            return e.deref() != null;
          });
          for (var e of this.$1) {
            var t = e.deref();
            if (t) {
              var n = this.$2.get(t);
              if (n != null) {
                var r = [t, n];
                yield r;
              }
            }
          }
        }),
        (t.keys = function* () {
          var e = this.entries();
          for (var t of e) {
            var n = t[0],
              r = t[1];
            yield n;
          }
        }),
        (t.values = function* () {
          var e = this.entries();
          for (var t of e) {
            var n = t[0],
              r = t[1];
            yield r;
          }
        }),
        (t.forEach = function (t, n) {
          var e = this.entries();
          for (var r of e) {
            var o = r[0],
              a = r[1];
            t.call(n, a, o, this);
          }
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
