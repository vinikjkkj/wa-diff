__d(
  "ReStoreOperationLock",
  ["ReStoreCommonUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "\u2757";
    }
    var s = (function () {
        function e(e) {
          var t = this;
          ((this.isSync = !1),
            (this.waitFor = null),
            (this.waitFor = e.then(function (e) {
              return (t.waitFor = null);
            })));
        }
        var t = e.prototype;
        return (
          (t.chainPromiseOrValue = function (t) {
            return this.waitFor != null
              ? this.waitFor.then(function () {
                  return t("\u{1F512}");
                })
              : t("\u{1F512}");
          }),
          e
        );
      })(),
      u = (function () {
        function e() {
          this.isSync = !0;
        }
        var t = e.prototype;
        return (
          (t.chainPromiseOrValue = function (t) {
            return t("\u2757");
          }),
          e
        );
      })(),
      c = (function () {
        function e() {
          ((this.isSync = !1), (this.$1 = Promise.resolve()));
        }
        var t = e.prototype;
        return (
          (t.chainPromiseOrValue = function (t) {
            var e = this;
            return new Promise(function (n, r) {
              e.$1 = e.$1.then(async function () {
                try {
                  n(await t("\u{1F512}"));
                } catch (e) {
                  r(e);
                }
              });
            });
          }),
          e
        );
      })();
    function d(e, t) {
      return {
        next: function (r) {
          return t.chainPromiseOrValue(function (t) {
            return o("ReStoreCommonUtils").gen(e.next(t, r));
          });
        },
      };
    }
    ((l.isNoopLockProof = e),
      (l.WaitForPromiseLock = s),
      (l.NoopLock = u),
      (l.ReStoreOperationLock = c),
      (l.lockIterator = d));
  },
  98,
);
