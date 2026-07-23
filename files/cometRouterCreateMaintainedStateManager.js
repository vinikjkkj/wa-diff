__d(
  "cometRouterCreateMaintainedStateManager",
  ["FBLogger", "clearTimeout", "setTimeout", "withoutKey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = {},
        t = {};
      function n(n, a, i, l, s) {
        var u;
        if (
          ((e = babelHelpers.extends({}, e, ((u = {}), (u[n] = a), u))),
          i != null)
        ) {
          var c = r("setTimeout")(function () {
            (o(n), s == null || s());
          }, i);
          t[n] = function () {
            (r("clearTimeout")(c), l == null || l());
          };
        } else l != null && (t[n] = l);
      }
      function o(n) {
        if (e[n] == null) {
          r("FBLogger")("comet_infra").mustfix(
            "Comet Router Maintain State: unmaintain called with unmaintained object",
          );
          return;
        }
        ((e = r("withoutKey")(e, n)), t[n] != null && (t[n](), delete t[n]));
      }
      function a(t) {
        return t != null && e[t] != null;
      }
      function i() {
        return e;
      }
      function l(t) {
        return t == null ? null : e[t];
      }
      return {
        getMaintainableWithKey: l,
        getMaintainedState: i,
        isMaintained: a,
        maintain: n,
        unmaintain: o,
      };
    }
    l.default = e;
  },
  98,
);
