__d(
  "baseTextTransformAllStrings",
  ["DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t, n;
      return (
        ((t = r(
          "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
        )(e)) == null
          ? void 0
          : t.type) === s.Fragment &&
        typeof ((n = r(
          "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
        )(e)) == null || (n = n.props) == null
          ? void 0
          : n.children) == "string"
      );
    }
    function c(e, t, n, r) {
      var o, a;
      (n === void 0 && (n = 3), r === void 0 && (r = 0));
      var i = 0;
      if (e == null || typeof e == "number" || typeof e == "boolean") return e;
      if (typeof e == "string") {
        var l = e;
        return t(l, r + "-" + i++);
      }
      if (Array.isArray(e))
        return e.map(function (e) {
          return u(e)
            ? s.cloneElement(e, {
                children: t(e.props.children, r + "-" + i++),
              })
            : r < n
              ? c(e, t, n, r + 1)
              : e;
        });
      var d = s.Children.only(e);
      return u(d)
        ? s.cloneElement(d, { children: t(d.props.children, r + "-" + i++) })
        : typeof (d == null || (o = d.props) == null ? void 0 : o.children) ==
            "string"
          ? s.cloneElement(d, { children: t(d.props.children, r + "-" + i++) })
          : Array.isArray(
                d == null || (a = d.props) == null ? void 0 : a.children,
              )
            ? s.cloneElement(d, { children: c(d.props.children, t, n, r + 1) })
            : e;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
