__d(
  "SecuredActionReauthDialog.entrypoint",
  ["JSResourceForInteraction", "TwoStepVerificationRootQuery$Parameters"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.encryptedContext;
        return {
          queries: {
            query: {
              parameters: r("TwoStepVerificationRootQuery$Parameters"),
              variables: {
                doesRequireTwoFacData: !0,
                encryptedContext: e,
                isLoginChallenges: !1,
                isPreAuthentication: !1,
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "TwoStepVerificationRoot.react",
      ).__setRef("SecuredActionReauthDialog.entrypoint"),
    };
    l.default = e;
  },
  98,
);
