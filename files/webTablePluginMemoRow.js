__d(
  "webTablePluginMemoRow",
  ["react", "shallowEqual"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["props"],
      s = ["props"],
      u,
      c = u || (u = o("react"));
    function d(t, n) {
      var o = t.props,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = n.props,
        l = babelHelpers.objectWithoutPropertiesLoose(n, s);
      return r("shallowEqual")(o, i) && r("shallowEqual")(a, l);
    }
    function m(e) {
      return c.memo(e, d);
    }
    l.default = m;
  },
  98,
);
