__d(
  "DGWRequestStreamClient",
  [
    "DGWRequestStreamRef",
    "DGWStreamFactory",
    "Promise",
    "SCIsolationRollout",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "streamcontroller",
      u = (function () {
        function t(e, t) {
          ((this.$1 = e),
            (this.$2 =
              t != null
                ? t
                : r("DGWStreamFactory").get(e.dgwStreamFactoryConfig)));
        }
        var a = t.prototype;
        return (
          (a.createStream = function (a, i, l, u, c) {
            var t = l,
              d = null;
            (c == null ? void 0 : c.serviceId) != null
              ? (d = c.serviceId)
              : a.method != null &&
                o("SCIsolationRollout").shouldUseSCIsolation(
                  this.$1.sciIsolationConfig,
                  a.method,
                ) &&
                (d = s);
            var m = null;
            return (
              c != null && d != null
                ? (m = babelHelpers.extends({}, c, { serviceId: d }))
                : c != null
                  ? (m = c)
                  : d != null && (m = { serviceId: d }),
              (e || (e = n("Promise"))).resolve(
                new (r("DGWRequestStreamRef"))(
                  a,
                  i,
                  u,
                  m,
                  t,
                  this.$2,
                  this.$1.dgwRequestStreamRefConfig,
                ),
              )
            );
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
