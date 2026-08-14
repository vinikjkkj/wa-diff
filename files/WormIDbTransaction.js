__d(
  "WormIDbTransaction",
  ["WAResolvable", "WormIDbStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          var t,
            n = "WormUnknownError";
          return (
            (t = e.call(this, n) || this),
            (t.name = n),
            (t.message = n),
            t
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      s = (function (e) {
        function t() {
          var t,
            n = "WormUnknownAbortError";
          return (
            (t = e.call(this, n) || this),
            (t.name = n),
            (t.message = n),
            t
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      u = (function () {
        function t(t, n, r, a, i) {
          var l = this;
          ((this.$1 = t),
            (this.$2 = new (o("WAResolvable").Resolvable)()),
            (this.$1.oncomplete = function () {
              l.$2.resolve();
            }),
            (this.$1.onerror = function () {
              var t;
              l.$2.reject((t = l.$1.error) != null ? t : new e());
            }),
            (this.$1.onabort = function () {
              var e;
              l.$2.reject((e = l.$1.error) != null ? e : new s());
            }),
            (this.stores = a.reduce(function (e, t) {
              var a;
              return babelHelpers.extends(
                {},
                e,
                ((a = {}),
                (a[t] = new (o("WormIDbStore").WormIDbStore)(
                  t,
                  l.$1,
                  n,
                  r,
                  i[t],
                )),
                a),
              );
            }, {})));
        }
        var n = t.prototype;
        return (
          (n.commit = function () {
            var e, t;
            return (
              (e = (t = this.$1).commit) == null || e.call(t),
              this.$2.promise
            );
          }),
          (n.abort = function () {
            this.$2.isSettled || this.$1.abort();
          }),
          t
        );
      })();
    l.WormIDbTransaction = u;
  },
  98,
);
