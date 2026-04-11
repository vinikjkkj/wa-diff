__d(
  "CometExceptionDialog.react",
  [
    "BaseModal.react",
    "CometExceptionDialog",
    "FDSCometExceptionDialog.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = o("CometExceptionDialog").getInjectedImplementation()),
          (t[0] = n))
        : (n = t[0]);
      var a = n,
        i;
      return (
        t[1] !== e
          ? ((i = s.jsx(r("BaseModal.react"), {
              stackingBehavior: "above-everything",
              children:
                a == null
                  ? s.jsx(
                      r("FDSCometExceptionDialog.react"),
                      babelHelpers.extends({}, e),
                    )
                  : s.jsx(a, babelHelpers.extends({}, e)),
            })),
            (t[1] = e),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    l.default = u;
  },
  98,
);
