__d(
  "WAWebBizBroadcastsEligibilityGate.react",
  [
    "WAWebBizBroadcastsFeatureEligibilityModal.react",
    "WAWebBizBroadcastsLoadingModal.react",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useEffect;
    function c(e) {
      var t = e.children,
        n = e.entryPoint,
        a = e.onClose,
        i = e.surface,
        l = o(
          "WAWebBizBroadcastsFeatureEligibilityModal.react",
        ).useMarketingMessagesEligibility(),
        c = l == null ? void 0 : l.status;
      return (
        u(
          function () {
            c != null &&
              o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.eligibilityCheckResult(
                c,
                n,
                i,
              );
          },
          [c, n, i],
        ),
        u(
          function () {
            l == null
              ? o("WAWebModalManager").ModalManager.open(
                  s.jsx(r("WAWebBizBroadcastsLoadingModal.react"), {
                    onCancel: function () {
                      (o("WAWebModalManager").ModalManager.close(), a());
                    },
                  }),
                )
              : (o("WAWebModalManager").ModalManager.close(),
                l.status !== "SUCCESS" &&
                  (a(),
                  o("WAWebModalManager").ModalManager.open(
                    s.jsx(
                      o("WAWebBizBroadcastsFeatureEligibilityModal.react")
                        .WAWebBizBroadcastsFeatureEligibilityModal,
                      {
                        eligibility: l,
                        onCancel: o("WAWebModalManager").closeModalManager,
                      },
                    ),
                  )));
          },
          [l, a],
        ),
        (l == null ? void 0 : l.status) === "SUCCESS" ? t : null
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
