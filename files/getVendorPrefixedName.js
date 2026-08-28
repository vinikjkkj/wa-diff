__d(
  "getVendorPrefixedName",
  ["invariant", "ExecutionEnvironment", "UserAgent", "camelize"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = {},
      c = ["Webkit", "ms", "Moz", "O"],
      d = new RegExp("^(" + c.join("|") + ")"),
      m = (e || (e = r("ExecutionEnvironment"))).canUseDOM
        ? document.createElement("div").style
        : {};
    function p(e) {
      for (var t = 0; t < c.length; t++) {
        var n = c[t] + e;
        if (n in m) return n;
      }
      return null;
    }
    function _(e) {
      switch (e) {
        case "lineClamp":
          return r("UserAgent").isEngine_DEPRECATED_DANGEROUS(
            "WebKit >= 315.14.2",
          ) || r("UserAgent").isEngine("Blink")
            ? "WebkitLineClamp"
            : null;
        default:
          return null;
      }
    }
    function f(t) {
      var n = r("camelize")(t);
      if (u[n] === void 0) {
        var o = n.charAt(0).toUpperCase() + n.slice(1);
        (d.test(o) && s(0, 957, t),
          (e || (e = r("ExecutionEnvironment"))).canUseDOM
            ? (u[n] = n in m ? n : p(o))
            : (u[n] = _(n)));
      }
      return u[n];
    }
    l.default = f;
  },
  98,
);
