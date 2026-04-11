__d(
  "react-relay/relay-hooks/MatchContainer",
  ["react"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = e || (e = n("react")),
      s = l.useMemo;
    function u(e) {
      var t = e.fallback,
        n = e.loader,
        r = e.match,
        o = e.props;
      if (r != null && typeof r != "object")
        throw new Error(
          "MatchContainer: Expected `match` value to be an object or null/undefined.",
        );
      var a = r != null ? r : {},
        i = a.__id,
        u = a.__fragments,
        c = a.__fragmentOwner,
        d = a.__fragmentPropName,
        m = a.__module_component;
      if (
        (c != null && typeof c != "object") ||
        (d != null && typeof d != "string") ||
        (u != null && typeof u != "object") ||
        (i != null && typeof i != "string")
      )
        throw new Error(
          "MatchContainer: Invalid 'match' value, expected an object that has a '...SomeFragment' spread.",
        );
      var p = m != null ? n(m) : null,
        _ = s(
          function () {
            if (d != null && i != null && u != null) {
              var e = {};
              return (
                (e[d] = { __id: i, __fragments: u, __fragmentOwner: c }),
                e
              );
            }
            return null;
          },
          [i, u, c, d],
        );
      return p != null && _ != null
        ? l.jsx(p, babelHelpers.extends({}, o, _))
        : t != null
          ? t
          : null;
    }
    ((u.displayName = u.name + " [from " + a.id + "]"), (a.exports = u));
  },
  null,
);
