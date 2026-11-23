__d(
  "applyMAIBAIGBoostSourceToClientContext",
  ["MAIBAIGBoostEntryPointUtils.facebook"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.inlined_context;
      return t == null || n == null || n.tool !== "INSTAGRAM"
        ? e
        : babelHelpers.extends({}, e, {
            inlined_context: babelHelpers.extends({}, n, {
              maiba_ig_boost_entry_point: o(
                "MAIBAIGBoostEntryPointUtils.facebook",
              ).fromJSEnum(t),
            }),
          });
    }
    l.default = e;
  },
  98,
);
