__d(
  "SecuredActionChallengeCDSMetaPasswordDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "SecuredActionChallengeCDSMetaPasswordDialogQuery$Parameters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        return {
          queries: {
            query: {
              options: { fetchPolicy: "store-and-network" },
              parameters: r(
                "SecuredActionChallengeCDSMetaPasswordDialogQuery$Parameters",
              ),
              variables: { category_name: t.category_name },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "SecuredActionChallengeCDSMetaPasswordDialog.react",
      ).__setRef("SecuredActionChallengeCDSMetaPasswordDialog.entrypoint"),
    };
    l.default = e;
  },
  98,
);
