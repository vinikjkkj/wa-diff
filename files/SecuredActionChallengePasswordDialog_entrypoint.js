__d(
  "SecuredActionChallengePasswordDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "SecuredActionChallengePasswordDialogQuery$Parameters",
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
                "SecuredActionChallengePasswordDialogQuery$Parameters",
              ),
              variables: { height: 60, scale: 1, width: 60 },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "SecuredActionChallengePasswordDialog.react",
      ).__setRef("SecuredActionChallengePasswordDialog.entrypoint"),
    };
    l.default = e;
  },
  98,
);
