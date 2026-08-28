__d(
  "TwoStepVerificationChallengeArkoseCaptcha_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "encryptedContext" }],
      kind: "Fragment",
      metadata: null,
      name: "TwoStepVerificationChallengeArkoseCaptcha_data",
      selections: [
        {
          kind: "RequiredField",
          field: {
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
                  name: "captcha_client_config_name",
                  storageKey: null,
                },
                action: "THROW",
                path: "xfb_pre_authentication_captcha_details.captcha_client_config_name",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "xfb_pre_authentication_captcha_details",
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
