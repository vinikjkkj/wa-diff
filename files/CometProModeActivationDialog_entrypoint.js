__d(
  "CometProModeActivationDialog.entrypoint",
  [
    "CometProModeActivationDialogWelcomeStepRootQuery$Parameters",
    "JSResourceForInteraction",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function () {
        var e = r("gkx")("7303") && !r("gkx")("4403");
        return {
          queries: {
            welcomeStepQueryRef: {
              parameters: n(
                "CometProModeActivationDialogWelcomeStepRootQuery$Parameters",
              ),
              variables: { isV4ActivationFlow: e },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "CometProModeActivationDialog.react",
      ).__setRef("CometProModeActivationDialog.entrypoint"),
    };
    l.default = e;
  },
  98,
);
