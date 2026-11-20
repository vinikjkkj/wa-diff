__d(
  "WebDi.Provider",
  ["WebDi.Fx", "WebDi.Result", "WebDi.UnsafeCoerce"],
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
    function u(e) {
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
    ((l.ProviderImpl = e), (l.lazy = s), (l.provided = u));
  },
  98,
);
