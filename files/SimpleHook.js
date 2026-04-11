__d(
  "SimpleHook",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.__callbacks = []), (this.call = this.$2));
      }
      var t = e.prototype;
      return (
        (t.hasCallback = function (t) {
          var e = this.__callbacks;
          return (
            e.length > 0 &&
            (t == null ||
              e.some(function (e) {
                return e === t || e.$1 === t;
              }))
          );
        }),
        (t.add = function (t, n) {
          var e = this,
            r;
          if ((n == null ? void 0 : n.once) === !0) {
            var o = function () {
              (e.remove(r), t.apply(null, arguments));
            };
            ((o.$1 = t), (r = o));
          } else r = t;
          return (this.__callbacks.push(r), r);
        }),
        (t.removeLast = function () {
          return this.__callbacks.pop();
        }),
        (t.remove = function (t) {
          return this.removeIf(function (e) {
            return e === t;
          });
        }),
        (t.removeIf = function (t) {
          var e = this.__callbacks;
          return (
            (this.__callbacks = e.filter(function (e) {
              return !t(e);
            })),
            e.length > this.__callbacks.length
          );
        }),
        (t.clear = function () {
          this.__callbacks = [];
        }),
        (t.$2 = function () {
          for (var e = this.__callbacks, t = 0, n = e.length; t < n; ++t) {
            var r = e[t];
            r.apply(null, arguments);
          }
        }),
        e
      );
    })();
    i.SimpleHook = e;
  },
  66,
);
