__d(
  "withCometTypeaheadInputStrategyShouldQueryStringFollowHighlightedEntry",
  ["react", "react-compiler-runtime", "useCometInternalTypeaheadState"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref", "queryString"],
      s,
      u = s || (s = o("react"));
    function c(t, n) {
      var a = n.shouldQueryStringFollowHighlightedEntry;
      function i(n) {
        var i = o("react-compiler-runtime").c(8),
          l,
          s,
          c;
        i[0] !== n
          ? ((l = n.ref),
            (s = n.queryString),
            (c = babelHelpers.objectWithoutPropertiesLoose(n, e)),
            (i[0] = n),
            (i[1] = l),
            (i[2] = s),
            (i[3] = c))
          : ((l = i[1]), (s = i[2]), (c = i[3]));
        var d = r("useCometInternalTypeaheadState")(),
          m = d.highlightedEntry,
          p = d.highlightedEntrySource,
          _ = a && p === "keyboard" && m != null ? m.label : s,
          f;
        return (
          i[4] !== l || i[5] !== _ || i[6] !== c
            ? ((f = u.jsx(
                t,
                babelHelpers.extends({}, c, { queryString: _, ref: l }),
              )),
              (i[4] = l),
              (i[5] = _),
              (i[6] = c),
              (i[7] = f))
            : (f = i[7]),
          f
        );
      }
      return i;
    }
    l.default = c;
  },
  98,
);
