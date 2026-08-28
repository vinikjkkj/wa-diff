__d(
  "BillingWebWizardAwareOnboardingAddPMV2Root.entrypoint",
  [
    "BillingAwareOnboardingAddPMV2Wizard.entrypoint",
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
              entryPoint: r("BillingAwareOnboardingAddPMV2Wizard.entrypoint"),
              entryPointParams: t,
            }),
          },
          queries: r("getWizardContextQuery.entrypointutils")(t),
        };
      },
      root: r("JSResourceForInteraction")(
        "BillingWebWizardRoot.react",
      ).__setRef("BillingWebWizardAwareOnboardingAddPMV2Root.entrypoint"),
    };
    l.default = e;
  },
  98,
);
