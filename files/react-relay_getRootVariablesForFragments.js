__d(
  "react-relay/getRootVariablesForFragments",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("relay-runtime").getSelector;
    function l(t, n) {
      var r = {};
      return (
        Object.keys(t).forEach(function (o) {
          var a,
            i,
            l,
            s = t[o],
            u = n[o],
            c = e(s, u),
            d =
              c != null && c.kind === "PluralReaderSelector"
                ? (a =
                    (i = c.selectors[0]) == null
                      ? void 0
                      : i.owner.variables) != null
                  ? a
                  : {}
                : (l = c == null ? void 0 : c.owner.variables) != null
                  ? l
                  : {};
          r = babelHelpers.extends({}, r, d);
        }),
        r
      );
    }
    a.exports = l;
  },
  null,
);
