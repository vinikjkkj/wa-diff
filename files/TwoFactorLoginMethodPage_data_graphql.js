__d(
  "TwoFactorLoginMethodPage_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "encryptedContext" }],
      kind: "Fragment",
      metadata: null,
      name: "TwoFactorLoginMethodPage_data",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "TwoFactorLoginMethodTOTP_data",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "TwoFactorLoginMethodBackupCodes_data",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "TwoFactorLoginMethodSecurityKey_data",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "TwoFactorLoginMethodAdminCodes_data",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "TwoStepVerificationChallengeEnterCode_data",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "TwoStepVerificationUpdateLogin_data",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "TwoFactorLoginMethodPassword_data",
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
        {
          alias: null,
          args: null,
          concreteType: "XFBTwoStepVerificationContent",
          kind: "LinkedField",
          name: "xfb_two_factor_login_content",
          plural: !1,
          selections: [
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
      ],
      type: "Query",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
