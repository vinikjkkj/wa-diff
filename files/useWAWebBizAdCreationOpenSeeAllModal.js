__d(
  "useWAWebBizAdCreationOpenSeeAllModal",
  [
    "WAWebBizAdCreationAudienceSeeAllModal.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdsCreationOpenModal",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e, t, n, a, i, l) {
      var u = o("react-compiler-runtime").c(8),
        c = r("useWAWebBizAdsCreationOpenModal")(),
        m;
      u[0] !== e ||
      u[1] !== t ||
      u[2] !== n ||
      u[3] !== a ||
      u[4] !== i ||
      u[5] !== c ||
      u[6] !== l
        ? ((m = function () {
            c(
              s.jsx(r("WAWebBizAdCreationAudienceSeeAllModal.react"), {
                adAccountID: e,
                audienceData: t,
                loggerContext: n,
                lwiAudiences: a,
                onSelectAudience: i,
                savedAudiences: l,
                onClose: d,
              }),
            );
          }),
          (u[0] = e),
          (u[1] = t),
          (u[2] = n),
          (u[3] = a),
          (u[4] = i),
          (u[5] = c),
          (u[6] = l),
          (u[7] = m))
        : (m = u[7]);
      var p = m;
      return p;
    }
    function d() {
      return o("WAWebModalManager").ModalManager.close();
    }
    l.default = c;
  },
  98,
);
