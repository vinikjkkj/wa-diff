__d(
  "SecuredActionDialogRoot.entrypoint",
  ["JSResourceForInteraction", "TwoStepVerificationRootQuery$Parameters"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        return {
          queries: {
            query: {
              parameters: r("TwoStepVerificationRootQuery$Parameters"),
              variables: {
                doesRequireTwoFacData: !0,
                encryptedContext: t.encryptedContext,
                isLoginChallenges: t.flow === "login_challenges",
                isPreAuthentication: t.flow === "pre_authentication",
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "TwoStepVerificationRoot.react",
      ).__setRef("SecuredActionDialogRoot.entrypoint"),
    };
    l.default = e;
  },
  98,
);
