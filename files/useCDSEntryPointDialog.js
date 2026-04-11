__d(
  "useCDSEntryPointDialog",
  ["XMDSDialogLoadingState.react", "react", "useBaseEntryPointDialog"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = function (t) {
        return s.jsx(r("XMDSDialogLoadingState.react"), {
          onClose: t,
          withCloseButton: !0,
        });
      };
    function c(e, t, n, o, a) {
      var i = n === void 0 ? "button" : n;
      return r("useBaseEntryPointDialog")(e, t, i, o != null ? o : u, a);
    }
    l.default = c;
  },
  98,
);
