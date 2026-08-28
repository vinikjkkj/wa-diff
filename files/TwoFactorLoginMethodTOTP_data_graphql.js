__d(
  "TwoFactorLoginMethodTOTP_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "accountType" },
        { kind: "RootArgument", name: "encryptedContext" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "TwoFactorLoginMethodTOTP_data",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "XFBTwoStepVerificationContent",
            kind: "LinkedField",
            name: "xfb_two_factor_login_content",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "code_should_only_contain_digits",
                  storageKey: null,
                },
                action: "THROW",
                path: "xfb_two_factor_login_content.code_should_only_contain_digits",
              },
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: [
                    {
                      kind: "Variable",
                      name: "account_type",
                      variableName: "accountType",
                    },
                  ],
                  kind: "ScalarField",
                  name: "code_too_long",
                  storageKey: null,
                },
                action: "THROW",
                path: "xfb_two_factor_login_content.code_too_long",
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "trust_device_checkbox_title",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "xfb_two_factor_login_content",
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
          concreteType: "XFBShowTrustDeviceExperienceDataType",
          kind: "LinkedField",
          name: "xfb_show_trust_device_experience",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "show_experience",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "checkbox_default_checked",
              storageKey: null,
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
