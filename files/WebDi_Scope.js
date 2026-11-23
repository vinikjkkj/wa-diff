__d(
  "WebDi.Scope",
  ["WebDi.Fx", "WebDi.Result", "WebDi.Service", "WebDi.UnsafeCoerce", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {
          ((this.$1 = []), (this.$2 = !1));
        }
        e.make = function () {
          return new e();
        };
        var t = e.prototype;
        return (
          (t.isClosed = function () {
            return this.$2;
          }),
          (t.size = function () {
            return this.$1.length;
          }),
          (t.addFinalizer = function (t) {
            if (this.$2)
              throw r("err")("WebDI: cannot add a finalizer to a closed scope");
            this.$1.push(t);
          }),
          (t.close = function (t) {
            var e = this;
            return new (o("WebDi.Fx").Suspend)(function () {
              if (e.$2) return new (o("WebDi.Result").Ok)(void 0);
              e.$2 = !0;
              var n = [].concat(e.$1).reverse();
              e.$1.length = 0;
              var r = function (a) {
                if (a >= n.length) return new (o("WebDi.Result").Ok)(void 0);
                var e = n[a],
                  i = new (o("WebDi.Fx").Recover)(
                    new (o("WebDi.Fx").Suspend)(function () {
                      return e(t);
                    }),
                    function () {
                      return new (o("WebDi.Result").Ok)(void 0);
                    },
                    !0,
                  );
                return new (o("WebDi.Fx").Chain)(i, function () {
                  return r(a + 1);
                });
              };
              return o("WebDi.UnsafeCoerce").coerce(r(0));
            });
          }),
          e
        );
      })(),
      s = o("WebDi.Service").service()("Scope");
    ((l.Scope = e), (l.ScopeService = s));
  },
  98,
);
