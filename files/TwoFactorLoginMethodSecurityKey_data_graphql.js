__d(
  "TwoFactorLoginMethodSecurityKey_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "encryptedContext" }],
      kind: "Fragment",
      metadata: null,
      name: "TwoFactorLoginMethodSecurityKey_data",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "encrypted_context",
              variableName: "encryptedContext",
            },
          ],
          concreteType: "WebAuthnCredentialAuthenticationOptions",
          kind: "LinkedField",
          name: "xfb_two_step_verification_authentication_options",
          plural: !1,
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: null,
                concreteType: "WebAuthnAuthenticationData",
                kind: "LinkedField",
                name: "public_key",
                plural: !1,
                selections: [
                  {
                    kind: "RequiredField",
                    field: {
                      alias: null,
                      args: null,
                      concreteType: "WebAuthnPublicKeyCredentialDescriptor",
                      kind: "LinkedField",
                      name: "allow_credentials",
                      plural: !0,
                      selections: [
                        {
                          kind: "RequiredField",
                          field: {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "id",
                            storageKey: null,
                          },
                          action: "THROW",
                          path: "xfb_two_step_verification_authentication_options.public_key.allow_credentials.id",
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
                          path: "xfb_two_step_verification_authentication_options.public_key.allow_credentials.type",
                        },
                      ],
                      storageKey: null,
                    },
                    action: "THROW",
                    path: "xfb_two_step_verification_authentication_options.public_key.allow_credentials",
                  },
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
                    path: "xfb_two_step_verification_authentication_options.public_key.challenge",
                  },
                  {
                    kind: "RequiredField",
                    field: {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "rp_id",
                      storageKey: null,
                    },
                    action: "THROW",
                    path: "xfb_two_step_verification_authentication_options.public_key.rp_id",
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "timeout",
                    storageKey: null,
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
                    path: "xfb_two_step_verification_authentication_options.public_key.user_verification",
                  },
                ],
                storageKey: null,
              },
              action: "THROW",
              path: "xfb_two_step_verification_authentication_options.public_key",
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
