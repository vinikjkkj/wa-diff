__d(
  "useCometEntryPointDialog",
  ["FDSDialogLoadingState.react", "react", "useBaseEntryPointDialog"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = function (t) {
        return s.jsx(r("FDSDialogLoadingState.react"), { onClose: t });
      };
    function c(e, t, n, o, a) {
      var i = n === void 0 ? "button" : n;
      return r("useBaseEntryPointDialog")(e, t, i, o != null ? o : u, a);
    }
    l.default = c;
  },
  98,
);
