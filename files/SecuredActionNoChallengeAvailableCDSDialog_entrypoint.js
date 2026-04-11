__d(
  "SecuredActionNoChallengeAvailableCDSDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "SecuredActionNoChallengeAvailableCDSDialogQuery$Parameters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function () {
        return {
          queries: {
            query: {
              options: { fetchPolicy: "store-and-network" },
              parameters: r(
                "SecuredActionNoChallengeAvailableCDSDialogQuery$Parameters",
              ),
              variables: {},
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "SecuredActionNoChallengeAvailableCDSDialog.react",
      ).__setRef("SecuredActionNoChallengeAvailableCDSDialog.entrypoint"),
    };
    l.default = e;
  },
  98,
);
