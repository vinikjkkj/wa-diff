__d(
  "useWAWebBizAdCreationOpenSeeAllModal",
  [
    "WAWebBizAdCreationAudienceSeeAllModal.react",
    "WAWebModalManager",
    "react",
    "useWAWebBizAdsCreationOpenModal",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e, t, n, a, i, l) {
      var c = r("useWAWebBizAdsCreationOpenModal")(),
        d = u(
          function () {
            c(
              s.jsx(r("WAWebBizAdCreationAudienceSeeAllModal.react"), {
                adAccountID: e,
                audienceData: t,
                loggerContext: n,
                lwiAudiences: a,
                onSelectAudience: i,
                savedAudiences: l,
                onClose: function () {
                  return o("WAWebModalManager").ModalManager.close();
                },
              }),
            );
          },
          [e, t, n, a, i, c, l],
        );
      return d;
    }
    l.default = c;
  },
  98,
);
