__d(
  "TwoFactorLoginMethodPasskeyFooter_data.graphql",
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
        ],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "encryptedContext" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "TwoFactorLoginMethodPasskeyFooter_data",
        selections: [
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: e,
              concreteType: "XFBPasskeyAuthOptions",
              kind: "LinkedField",
              name: "xfb_two_step_verification_authentication_passkey_options",
              plural: !1,
              selections: [
                {
                  kind: "RequiredField",
                  field: {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "challenge",
                    storageKey: null,
                  },
                  action: "THROW",
                  path: "xfb_two_step_verification_authentication_passkey_options.challenge",
                },
                {
                  kind: "RequiredField",
                  field: {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "user_verification",
                    storageKey: null,
                  },
                  action: "THROW",
                  path: "xfb_two_step_verification_authentication_passkey_options.user_verification",
                },
                {
                  kind: "RequiredField",
                  field: {
                    alias: null,
                    args: null,
                    concreteType: "XFBPasskeyRp",
                    kind: "LinkedField",
                    name: "rp",
                    plural: !1,
                    selections: [
                      {
                        kind: "RequiredField",
                        field: t,
                        action: "THROW",
                        path: "xfb_two_step_verification_authentication_passkey_options.rp.id",
                      },
                    ],
                    storageKey: null,
                  },
                  action: "THROW",
                  path: "xfb_two_step_verification_authentication_passkey_options.rp",
                },
                {
                  kind: "RequiredField",
                  field: {
                    alias: null,
                    args: null,
                    concreteType: "XFBPasskeyCredentialDescriptor",
                    kind: "LinkedField",
                    name: "allow_credentials",
                    plural: !0,
                    selections: [
                      {
                        kind: "RequiredField",
                        field: t,
                        action: "THROW",
                        path: "xfb_two_step_verification_authentication_passkey_options.allow_credentials.id",
                      },
                      {
                        kind: "RequiredField",
                        field: {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "type",
                          storageKey: null,
                        },
                        action: "THROW",
                        path: "xfb_two_step_verification_authentication_passkey_options.allow_credentials.type",
                      },
                    ],
                    storageKey: null,
                  },
                  action: "THROW",
                  path: "xfb_two_step_verification_authentication_passkey_options.allow_credentials",
                },
              ],
              storageKey: null,
            },
            action: "THROW",
            path: "xfb_two_step_verification_authentication_passkey_options",
          },
          {
            alias: null,
            args: e,
            kind: "ScalarField",
            name: "two_step_verification_passkey_auto_trigger_enabled",
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
