__d(
  "useCometDeferredDialog",
  ["FDSDialogLoadingState.react", "react", "useBaseDeferredDialog"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = r("react")),
      u = function (t) {
        return s.jsx(r("FDSDialogLoadingState.react"), { onClose: t });
      };
    function c(e, t) {
      return r("useBaseDeferredDialog")(e, t != null ? t : u);
    }
    l.default = c;
  },
  98,
);
