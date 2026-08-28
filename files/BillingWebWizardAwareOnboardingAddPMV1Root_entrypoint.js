__d(
  "BillingWebWizardAwareOnboardingAddPMV1Root.entrypoint",
  [
    "BillingAwareOnboardingAddPMV1Wizard.entrypoint",
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
              entryPoint: r("BillingAwareOnboardingAddPMV1Wizard.entrypoint"),
              entryPointParams: t,
            }),
          },
          queries: r("getWizardContextQuery.entrypointutils")(t),
        };
      },
      root: r("JSResourceForInteraction")(
        "BillingWebWizardRoot.react",
      ).__setRef("BillingWebWizardAwareOnboardingAddPMV1Root.entrypoint"),
    };
    l.default = e;
  },
  98,
);
