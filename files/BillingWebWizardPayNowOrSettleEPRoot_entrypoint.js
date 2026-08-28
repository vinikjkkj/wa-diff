__d(
  "BillingWebWizardPayNowOrSettleEPRoot.entrypoint",
  [
    "BillingPayNowOrSettleEPWizard.entrypoint",
    "JSResourceForInteraction",
    "NestedRelayEntryPointBuilderUtils",
    "getWizardContextQuery.entrypointutils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        return {
          entryPoints: {
            wizard: o(
              "NestedRelayEntryPointBuilderUtils",
            ).NestedRelayEntryPoint({
              entryPoint: r("BillingPayNowOrSettleEPWizard.entrypoint"),
              entryPointParams: t,
            }),
          },
          queries: r("getWizardContextQuery.entrypointutils")(t),
        };
      },
      root: r("JSResourceForInteraction")(
        "BillingWebWizardRoot.react",
      ).__setRef("BillingWebWizardPayNowOrSettleEPRoot.entrypoint"),
    };
    l.default = e;
  },
  98,
);
