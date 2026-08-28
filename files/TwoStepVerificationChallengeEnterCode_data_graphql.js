__d(
  "TwoStepVerificationChallengeEnterCode_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          kind: "Variable",
          name: "encrypted_context",
          variableName: "encryptedContext",
        },
      ];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "encryptedContext" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "TwoStepVerificationChallengeEnterCode_data",
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
                    name: "resend_code_link",
                    storageKey: null,
                  },
                  action: "THROW",
                  path: "xfb_two_factor_login_content.resend_code_link",
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
            args: e,
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
            args: e,
            kind: "ScalarField",
            name: "xfb_two_step_verification_can_try_another_way",
            storageKey: null,
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: e,
              concreteType: "XFBTwoStepVerificationChallengesCooldown",
              kind: "LinkedField",
              name: "xfb_two_step_verification_send_rate_limit_cooldown",
              plural: !1,
              selections: [
                {
                  kind: "RequiredField",
                  field: {
                    alias: null,
                    args: null,
                    concreteType: "XFBTwoStepVerificationChallengeCooldown",
                    kind: "LinkedField",
                    name: "rate_limits",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "challenge",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "cooldown_seconds",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  action: "THROW",
                  path: "xfb_two_step_verification_send_rate_limit_cooldown.rate_limits",
                },
              ],
              storageKey: null,
            },
            action: "THROW",
            path: "xfb_two_step_verification_send_rate_limit_cooldown",
          },
          {
            alias: null,
            args: e,
            concreteType: "XFBTwoStepVerificationRobocallDetails",
            kind: "LinkedField",
            name: "xfb_two_step_verification_robocall_details",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_eligible_for_robocall",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "robocall_link",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "Query",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
