__d(
  "PreAuthenticationChallengePage_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "encryptedContext" }],
      kind: "Fragment",
      metadata: null,
      name: "PreAuthenticationChallengePage_data",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "TwoStepVerificationChallengeTextCaptcha_data",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "TwoStepVerificationChallengeArkoseCaptcha_data",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "TwoStepVerificationChallengeGoogleReCaptcha_data",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "TwoStepVerificationChallengeGoogleReCaptchaBloks_data",
        },
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "encrypted_context",
              variableName: "encryptedContext",
            },
          ],
          concreteType: "XFBTextCaptchaDetails",
          kind: "LinkedField",
          name: "xfb_pre_authentication_captcha_details",
          plural: !1,
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_in_app_browser",
                storageKey: null,
              },
              action: "THROW",
              path: "xfb_pre_authentication_captcha_details.is_in_app_browser",
            },
          ],
          storageKey: null,
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
