__d(
  "WAWebPaymentOnboardingFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingModal.react",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebPaymentOnboardingFlow.react",
        )
          .__setRef("WAWebPaymentOnboardingFlowLoadable")
          .load();
        return e;
      }, "PaymentOnboardingFlow"),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), { error: !!t.error });
        },
      });
    l.PaymentOnboardingFlowLoadable = c;
  },
  98,
);
