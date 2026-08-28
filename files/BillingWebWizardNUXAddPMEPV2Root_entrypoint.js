__d(
  "BillingWebWizardNUXAddPMEPV2Root.entrypoint",
  [
    "BillingAddPMNUXEPV2Wizard.entrypoint",
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
              entryPoint: r("BillingAddPMNUXEPV2Wizard.entrypoint"),
              entryPointParams: t,
            }),
          },
          queries: r("getWizardContextQuery.entrypointutils")(t),
        };
      },
      root: r("JSResourceForInteraction")(
        "BillingWebWizardRoot.react",
      ).__setRef("BillingWebWizardNUXAddPMEPV2Root.entrypoint"),
    };
    l.default = e;
  },
  98,
);
