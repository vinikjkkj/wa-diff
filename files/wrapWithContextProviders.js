__d(
  "wrapWithContextProviders",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      return t.reduceRight(function (e, t) {
        return t(e);
      }, e);
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e, t) {
      return function (n) {
        return s.jsx(e.Provider, { value: t, children: n });
      };
    }
    ((l.wrapWithContextProviders = u), (l.makeRenderProviderFn = c));
  },
  98,
);
