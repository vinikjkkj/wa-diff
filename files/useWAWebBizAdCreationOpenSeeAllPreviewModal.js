__d(
  "useWAWebBizAdCreationOpenSeeAllPreviewModal",
  [
    "WAWebBizAdCreationPreviewSeeAllModal.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e, t, n) {
      var a = o("react-compiler-runtime").c(4),
        i;
      a[0] !== e || a[1] !== t || a[2] !== n
        ? ((i = function () {
            o("WAWebModalManager").ModalManager.open(
              s.jsx(r("WAWebBizAdCreationPreviewSeeAllModal.react"), {
                adAccountID: e,
                loggerContext: t,
                onClose: d,
                previewData: n,
              }),
            );
          }),
          (a[0] = e),
          (a[1] = t),
          (a[2] = n),
          (a[3] = i))
        : (i = a[3]);
      var l = i;
      return l;
    }
    function d() {
      return o("WAWebModalManager").ModalManager.close();
    }
    l.default = c;
  },
  98,
);
