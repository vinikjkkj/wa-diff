__d(
  "WebDi.Provider",
  ["WebDi.Fx", "WebDi.Result", "WebDi.UnsafeCoerce", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        (n === void 0 && (n = !1),
          (this.phantom = null),
          (this.provides = e),
          (this.build = t),
          (this.lazy = n));
      }
      var t = e.prototype;
      return (
        (t.toString = function () {
          return (
            "Provider(" + this.provides.id + (this.lazy ? ", lazy" : "") + ")"
          );
        }),
        e
      );
    })();
    function s(t) {
      return new e(t.provides, t.build, !0);
    }
    function u(t, n, a) {
      var i = new (o("WebDi.Fx").Async)(function (e) {
        n().then(
          function (t) {
            return e(
              new (o("WebDi.Fx").Suspend)(function () {
                return new (o("WebDi.Result").Ok)(a(t));
              }),
            );
          },
          function (t) {
            return e(
              new (o("WebDi.Fx").Suspend)(function () {
                throw t;
              }),
            );
          },
        );
      });
      return new e(
        t,
        function () {
          return new (o("WebDi.Fx").Chain)(i, function (e) {
            var n = o("WebDi.UnsafeCoerce").coerce(e);
            if (n.provides.id !== t.id)
              throw r("err")(
                "WebDI: deferred(" +
                  t.id +
                  ") loaded a provider for " +
                  n.provides.id,
              );
            return n.build();
          });
        },
        !0,
      );
    }
    function c(e) {
      return new (o("WebDi.Fx").WithFiber)(function (t) {
        var n = t.services,
          r = {};
        return (
          Object.keys(e).forEach(function (t) {
            var a = o("WebDi.UnsafeCoerce").coerce(e[t]);
            r[t] = function () {
              return new (o("WebDi.Fx").WithServices)(
                a.apply(void 0, arguments),
                [],
                n,
              );
            };
          }),
          new (o("WebDi.Result").Ok)(r)
        );
      });
    }
    ((l.ProviderImpl = e), (l.lazy = s), (l.deferred = u), (l.provided = c));
  },
  98,
);
