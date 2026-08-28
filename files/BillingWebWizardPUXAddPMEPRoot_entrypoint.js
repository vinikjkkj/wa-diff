__d(
  "BillingWebWizardPUXAddPMEPRoot.entrypoint",
  [
    "BillingAddPMPUXEPWizard.entrypoint",
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
              entryPoint: r("BillingAddPMPUXEPWizard.entrypoint"),
              entryPointParams: t,
            }),
          },
          queries: r("getWizardContextQuery.entrypointutils")(t),
        };
      },
      root: r("JSResourceForInteraction")(
        "BillingWebWizardRoot.react",
      ).__setRef("BillingWebWizardPUXAddPMEPRoot.entrypoint"),
    };
    l.default = e;
  },
  98,
);
