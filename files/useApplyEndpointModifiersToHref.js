__d(
  "useApplyEndpointModifiersToHref",
  [
    "BaseLinkEndpointModifierContext",
    "FBLogger",
    "isCometRouterUrl",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useContext;
    function d(e, t, n) {
      return t == null
        ? null
        : e.reduce(function (e, t) {
            var o = t(e);
            return n && !r("isCometRouterUrl")(o)
              ? (r("FBLogger")("comet_infra").mustfix(
                  "Endpoint modifier returned a non-router URL, ignoring.",
                ),
                e)
              : o;
          }, t);
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e === void 0 ? !0 : e,
        a = c(r("BaseLinkEndpointModifierContext")),
        i;
      return (
        t[0] !== n || t[1] !== a
          ? ((i = function (t) {
              return d(a, t, n);
            }),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    l.default = m;
  },
  98,
);
