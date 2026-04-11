__d(
  "CometContextualLayer.react",
  [
    "BaseContextualLayer.react",
    "react",
    "react-compiler-runtime",
    "useCometVisualChangeTracker",
    "useMergeRefs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(6),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = r("useCometVisualChangeTracker")(),
        s = r("useMergeRefs")(i, l),
        c;
      return (
        n[3] !== s || n[4] !== a
          ? ((c = u.jsx(
              r("BaseContextualLayer.react"),
              babelHelpers.extends({}, a, { ref: s }),
            )),
            (n[3] = s),
            (n[4] = a),
            (n[5] = c))
          : (c = n[5]),
        c
      );
    }
    l.default = c;
  },
  98,
);
