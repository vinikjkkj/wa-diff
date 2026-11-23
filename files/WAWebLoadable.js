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
        a = t.renderLoadingImmediately,
        l = a === void 0 ? !1 : a,
        u = r("react-loadable")({
          loader: n,
          loading: function (t) {
            return !t.pastDelay && !l ? null : o(t);
          },
          render: function (n, r) {
            var t = r.forwardedRefDoNotUse,
              o = babelHelpers.objectWithoutPropertiesLoose(r, e);
            return c.jsx(n, babelHelpers.extends({ ref: t }, o));
          },
        });
      function d(e) {
        var t = e.ref,
          n = babelHelpers.objectWithoutPropertiesLoose(e, s);
        return c.jsx(u, babelHelpers.extends({ forwardedRefDoNotUse: t }, n));
      }
      return ((d.displayName = d.name + " [from " + i.id + "]"), d);
    }
    l.default = d;
  },
  98,
);
