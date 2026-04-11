__d(
  "WAWebBizBroadcastsEligibilityGate.react",
  [
    "WAWebBizBroadcastsFeatureEligibilityModal.react",
    "WAWebBizBroadcastsLoadingModal.react",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useEffect;
    function c(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.children,
        a = e.entryPoint,
        i = e.onClose,
        l = e.surface,
        c = o(
          "WAWebBizBroadcastsFeatureEligibilityModal.react",
        ).useMarketingMessagesEligibility(),
        d = c == null ? void 0 : c.status,
        m,
        p;
      (t[0] !== a || t[1] !== d || t[2] !== l
        ? ((m = function () {
            d != null &&
              o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.eligibilityCheckResult(
                d,
                a,
                l,
              );
          }),
          (p = [d, a, l]),
          (t[0] = a),
          (t[1] = d),
          (t[2] = l),
          (t[3] = m),
          (t[4] = p))
        : ((m = t[3]), (p = t[4])),
        u(m, p));
      var _, f;
      return (
        t[5] !== c || t[6] !== i
          ? ((_ = function () {
              c == null
                ? o("WAWebModalManager").ModalManager.open(
                    s.jsx(r("WAWebBizBroadcastsLoadingModal.react"), {
                      onCancel: function () {
                        (o("WAWebModalManager").ModalManager.close(), i());
                      },
                    }),
                  )
                : (o("WAWebModalManager").ModalManager.close(),
                  c.status !== "SUCCESS" &&
                    (i(),
                    o("WAWebModalManager").ModalManager.open(
                      s.jsx(
                        o("WAWebBizBroadcastsFeatureEligibilityModal.react")
                          .WAWebBizBroadcastsFeatureEligibilityModal,
                        {
                          eligibility: c,
                          onCancel: o("WAWebModalManager").closeModalManager,
                        },
                      ),
                    )));
            }),
            (f = [c, i]),
            (t[5] = c),
            (t[6] = i),
            (t[7] = _),
            (t[8] = f))
          : ((_ = t[7]), (f = t[8])),
        u(_, f),
        (c == null ? void 0 : c.status) === "SUCCESS" ? n : null
      );
    }
    l.default = c;
  },
  98,
);
