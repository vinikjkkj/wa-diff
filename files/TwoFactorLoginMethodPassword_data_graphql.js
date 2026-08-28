__d(
  "TwoFactorLoginMethodPassword_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "TwoFactorLoginMethodPassword_data",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "PublicKeyAndIDForEncryption",
          kind: "LinkedField",
          name: "public_key_and_id_for_encryption",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "public_key",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "key_id",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "FXManageAccountsQueries",
            kind: "LinkedField",
            name: "fx_accounts_management",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "accounts",
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
                      path: "fx_accounts_management.accounts.id",
                    },
                    {
                      kind: "RequiredField",
                      field: {
                        alias: null,
                        args: null,
                        concreteType: "XFBFXPlatformInfo",
                        kind: "LinkedField",
                        name: "platform_info",
                        plural: !1,
                        selections: [
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
                            path: "fx_accounts_management.accounts.platform_info.type",
                          },
                        ],
                        storageKey: null,
                      },
                      action: "THROW",
                      path: "fx_accounts_management.accounts.platform_info",
                    },
                    {
                      kind: "RequiredField",
                      field: {
                        alias: null,
                        args: null,
                        concreteType: "XFBFXProfilePictureInfo",
                        kind: "LinkedField",
                        name: "profile_picture_info",
                        plural: !1,
                        selections: [
                          {
                            kind: "RequiredField",
                            field: {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "url",
                              storageKey: null,
                            },
                            action: "THROW",
                            path: "fx_accounts_management.accounts.profile_picture_info.url",
                          },
                        ],
                        storageKey: null,
                      },
                      action: "THROW",
                      path: "fx_accounts_management.accounts.profile_picture_info",
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "identity_type",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_msplit",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                action: "THROW",
                path: "fx_accounts_management.accounts",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "fx_accounts_management",
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
