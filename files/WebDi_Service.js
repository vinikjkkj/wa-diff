__d(
  "WebDi.Service",
  ["WebDi.Node", "WebDi.Provider", "WebDi.UnsafeCoerce"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "Scope",
      s = (function () {
        function e(e) {
          ((this.tag = "Service"), (this.id = e));
        }
        var t = e.prototype;
        return (
          (t.make = function (t) {
            return new (o("WebDi.Provider").ProviderImpl)(this, function () {
              return new (o("WebDi.Node").Gen)(
                o("WebDi.UnsafeCoerce").coerce(t),
              );
            });
          }),
          (t.of = function (t) {
            return new (o("WebDi.Provider").ProviderImpl)(this, function () {
              return new (o("WebDi.Node").Sync)(function () {
                return t;
              });
            });
          }),
          (t[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"] =
            function () {
              return o("WebDi.UnsafeCoerce").coerce(
                new (o("WebDi.Node").SingleShot)(this),
              );
            }),
          (t.toString = function () {
            return "Service(" + this.id + ")";
          }),
          e
        );
      })(),
      u = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, t) || this),
            (r.lazy = !1),
            (r.phantom = null),
            (r.provides = r),
            (r.build = n),
            r
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.toString = function () {
            return "Service(" + this.id + ", with default)";
          }),
          t
        );
      })(s);
    function c(e, t) {
      return e == null || t == null
        ? function (e) {
            return new s(e);
          }
        : new u(e, function () {
            return new (o("WebDi.Node").Gen)(o("WebDi.UnsafeCoerce").coerce(t));
          });
    }
    var d = o("WebDi.UnsafeCoerce").coerce(c);
    ((l.SCOPE_NAME = e), (l.Service = s), (l.Defaulted = u), (l.service = d));
  },
  98,
);
