__d(
  "SecuredActionChallengeCDSPasswordDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "SecuredActionChallengeCDSPasswordDialogQuery$Parameters",
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
                "SecuredActionChallengeCDSPasswordDialogQuery$Parameters",
              ),
              variables: {
                account_id: t.account_id,
                account_type: t.account_type,
                category_name: t.category_name,
                reauth_content_type: t.reauth_content_type,
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "SecuredActionChallengeCDSPasswordDialog.react",
      ).__setRef("SecuredActionChallengeCDSPasswordDialog.entrypoint"),
    };
    l.default = e;
  },
  98,
);
