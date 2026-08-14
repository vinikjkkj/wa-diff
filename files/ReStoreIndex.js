__d(
  "ReStoreIndex",
  ["ReQLBounds", "ReStoreOperationLock", "ReStoreUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function e(e, t, n, r, a) {
          var i = this;
          ((this.entries = function (e, t, n) {
            return (
              t === void 0 && (t = "asc"),
              o("ReStoreOperationLock").lockIterator(
                o("ReStoreUtils").entries(i.$5, e, i.$1, i.$3, t, n, i.$2),
                i.$4,
              )
            );
          }),
            (this.get = function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return i.$4.chainPromiseOrValue(function (e) {
                return o("ReStoreUtils").getLocked(
                  i.$5,
                  new WeakMap(),
                  i.$1.name,
                  i.$3,
                  t,
                  e,
                  i.$2,
                );
              });
            }),
            (this.getKey = function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return i.$4.chainPromiseOrValue(function (e) {
                return i.$6(i.$5, new WeakMap(), t, e);
              });
            }),
            (this.keys = function (e, t, n) {
              return (
                t === void 0 && (t = "asc"),
                o("ReStoreOperationLock").lockIterator(
                  o("ReStoreUtils").keys(i.$5, e, i.$1, i.$3, t, n),
                  i.$4,
                )
              );
            }),
            (this.$3 = e),
            (this.keyFields = t.indexes[e]),
            (this.$1 = t),
            (this.$2 = n),
            (this.$4 = r),
            (this.$5 = a));
        }
        var t = e.prototype;
        return (
          (t.$6 = function (t, n, r, a) {
            var e = this;
            return o("ReStoreUtils")
              .getLocked(t, n, this.$1.name, this.$3, r, a, this.$2)
              .then(function (t) {
                if (t !== void 0) return o("ReStoreUtils").searchKey(e.$1, t);
              });
          }),
          e
        );
      })(),
      u = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s),
      c = (function (t) {
        function n(n, r, a, i, l, s) {
          var u;
          return (
            (u = t.call(this, n, r, a, i, l) || this),
            (u.subscribe = function (t, n, r) {
              return u.$ReStoreIndex$p_3.subscribeIndex(
                u.$ReStoreIndex$p_1.name,
                u.$ReStoreIndex$p_2,
                t,
                (e || (e = o("ReQLBounds"))).extendBounds(
                  n,
                  u.$ReStoreIndex$p_1.indexes[u.$ReStoreIndex$p_2].length,
                ),
                r,
              );
            }),
            (u.$ReStoreIndex$p_2 = n),
            (u.$ReStoreIndex$p_1 = r),
            (u.$ReStoreIndex$p_3 = s),
            u
          );
        }
        return (babelHelpers.inheritsLoose(n, t), n);
      })(s);
    ((l.ReStoreTransactionIndex = u), (l.ReStoreIndex = c));
  },
  98,
);
