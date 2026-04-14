__d(
  "WAWebLoadable",
  ["react", "react-loadable"],
  function (t, n, r, o, a, i, l) {
    var e = ["forwardedRefDoNotUse"],
      s = ["ref"],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = t.loader,
        o = t.loading,
        a = r("react-loadable")({
          loader: n,
          loading: function (t) {
            return t.pastDelay ? o(t) : null;
          },
          render: function (n, r) {
            var t = r.forwardedRefDoNotUse,
              o = babelHelpers.objectWithoutPropertiesLoose(r, e);
            return c.jsx(n, babelHelpers.extends({ ref: t }, o));
          },
        });
      function l(e) {
        var t = e.ref,
          n = babelHelpers.objectWithoutPropertiesLoose(e, s);
        return c.jsx(a, babelHelpers.extends({ forwardedRefDoNotUse: t }, n));
      }
      return ((l.displayName = l.name + " [from " + i.id + "]"), l);
    }
    l.default = d;
  },
  98,
);
