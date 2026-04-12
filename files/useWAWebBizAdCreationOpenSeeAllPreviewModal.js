__d(
  "useWAWebBizAdCreationOpenSeeAllPreviewModal",
  ["WAWebBizAdCreationPreviewSeeAllModal.react", "WAWebModalManager", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e, t, n) {
      var a = u(
        function () {
          o("WAWebModalManager").ModalManager.open(
            s.jsx(r("WAWebBizAdCreationPreviewSeeAllModal.react"), {
              adAccountID: e,
              loggerContext: t,
              onClose: function () {
                return o("WAWebModalManager").ModalManager.close();
              },
              previewData: n,
            }),
          );
        },
        [e, t, n],
      );
      return a;
    }
    l.default = c;
  },
  98,
);
