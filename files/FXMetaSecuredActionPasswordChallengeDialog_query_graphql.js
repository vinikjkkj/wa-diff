__d(
  "FXMetaSecuredActionPasswordChallengeDialog_query.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "meta_title",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "meta_description",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "continue_button_text",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "category_name" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "FXMetaSecuredActionPasswordChallengeDialog_query",
        selections: [
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: [
                {
                  kind: "Variable",
                  name: "category_name",
                  variableName: "category_name",
                },
              ],
              concreteType: "XFBFXCalMetaSAPasswordChallengeConfig",
              kind: "LinkedField",
              name: "fxcal_meta_sa_password_challenge_entry",
              plural: !1,
              selections: [
                {
                  kind: "RequiredField",
                  field: {
                    alias: null,
                    args: null,
                    concreteType:
                      "XFBFXSettingsSecuredActionPasswordReauthContent",
                    kind: "LinkedField",
                    name: "content",
                    plural: !1,
                    selections: [
                      {
                        kind: "RequiredField",
                        field: e,
                        action: "THROW",
                        path: "fxcal_meta_sa_password_challenge_entry.content.meta_title",
                      },
                      {
                        kind: "RequiredField",
                        field: t,
                        action: "THROW",
                        path: "fxcal_meta_sa_password_challenge_entry.content.meta_description",
                      },
                      {
                        kind: "RequiredField",
                        field: n,
                        action: "THROW",
                        path: "fxcal_meta_sa_password_challenge_entry.content.continue_button_text",
                      },
                      {
                        kind: "RequiredField",
                        field: {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "password_text",
                          storageKey: null,
                        },
                        action: "THROW",
                        path: "fxcal_meta_sa_password_challenge_entry.content.password_text",
                      },
                      {
                        kind: "RequiredField",
                        field: {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "forgot_password_text",
                          storageKey: null,
                        },
                        action: "THROW",
                        path: "fxcal_meta_sa_password_challenge_entry.content.forgot_password_text",
                      },
                    ],
                    storageKey: null,
                  },
                  action: "THROW",
                  path: "fxcal_meta_sa_password_challenge_entry.content",
                },
                {
                  kind: "RequiredField",
                  field: {
                    alias: null,
                    args: null,
                    concreteType: "XFBFXSettingsPasswordlessReauthIGContent",
                    kind: "LinkedField",
                    name: "ig_passwordless_content",
                    plural: !1,
                    selections: [
                      {
                        kind: "RequiredField",
                        field: e,
                        action: "THROW",
                        path: "fxcal_meta_sa_password_challenge_entry.ig_passwordless_content.meta_title",
                      },
                      {
                        kind: "RequiredField",
                        field: t,
                        action: "THROW",
                        path: "fxcal_meta_sa_password_challenge_entry.ig_passwordless_content.meta_description",
                      },
                      {
                        kind: "RequiredField",
                        field: n,
                        action: "THROW",
                        path: "fxcal_meta_sa_password_challenge_entry.ig_passwordless_content.continue_button_text",
                      },
                    ],
                    storageKey: null,
                  },
                  action: "THROW",
                  path: "fxcal_meta_sa_password_challenge_entry.ig_passwordless_content",
                },
                {
                  kind: "RequiredField",
                  field: {
                    alias: null,
                    args: null,
                    concreteType: "PublicKeyAndIDForEncryption",
                    kind: "LinkedField",
                    name: "public_key_and_id_for_encryption",
                    plural: !1,
                    selections: [
                      {
                        kind: "RequiredField",
                        field: {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "public_key",
                          storageKey: null,
                        },
                        action: "THROW",
                        path: "fxcal_meta_sa_password_challenge_entry.public_key_and_id_for_encryption.public_key",
                      },
                      {
                        kind: "RequiredField",
                        field: {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "key_id",
                          storageKey: null,
                        },
                        action: "THROW",
                        path: "fxcal_meta_sa_password_challenge_entry.public_key_and_id_for_encryption.key_id",
                      },
                    ],
                    storageKey: null,
                  },
                  action: "THROW",
                  path: "fxcal_meta_sa_password_challenge_entry.public_key_and_id_for_encryption",
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_passwordless",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "password_reset_uri",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "mar_contact_point",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "linked_identities",
                  plural: !0,
                  selections: [
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
                      concreteType: "XFBFXProfilePictureInfo",
                      kind: "LinkedField",
                      name: "profile_picture_info",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "url",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBFXPlatformInfo",
                      kind: "LinkedField",
                      name: "platform_info",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "type",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            action: "THROW",
            path: "fxcal_meta_sa_password_challenge_entry",
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
