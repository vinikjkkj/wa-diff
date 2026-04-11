__d(
  "BillingWhatsAppWebWizardRoot.entrypoint",
  [
    "BillingLazyWizard.entrypoint",
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
              entryPoint: r("BillingLazyWizard.entrypoint"),
              entryPointParams: t,
            }),
          },
          queries: r("getWizardContextQuery.entrypointutils")(t),
        };
      },
      root: r("JSResourceForInteraction")(
        "BillingWhatsAppWebWizardRoot.react",
      ).__setRef("BillingWhatsAppWebWizardRoot.entrypoint"),
    };
    l.default = e;
  },
  98,
);
