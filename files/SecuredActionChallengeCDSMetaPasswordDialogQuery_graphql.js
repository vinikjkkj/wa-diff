__d(
  "SecuredActionChallengeCDSMetaPasswordDialogQuery.graphql",
  [
    "SecuredActionChallengeCDSMetaPasswordDialogQuery_facebookRelayOperation",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "category_name" },
        ],
        t = [
          {
            kind: "Variable",
            name: "category_name",
            variableName: "category_name",
          },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "meta_title",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "meta_description",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "continue_button_text",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "SecuredActionChallengeCDSMetaPasswordDialogQuery",
          selections: [
            {
              args: t,
              kind: "FragmentSpread",
              name: "FXMetaSecuredActionPasswordChallengeDialog_query",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "SecuredActionChallengeCDSMetaPasswordDialogQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XFBFXCalMetaSAPasswordChallengeConfig",
              kind: "LinkedField",
              name: "fxcal_meta_sa_password_challenge_entry",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType:
                    "XFBFXSettingsSecuredActionPasswordReauthContent",
                  kind: "LinkedField",
                  name: "content",
                  plural: !1,
                  selections: [
                    r,
                    o,
                    a,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "password_text",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "forgot_password_text",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBFXSettingsPasswordlessReauthIGContent",
                  kind: "LinkedField",
                  name: "ig_passwordless_content",
                  plural: !1,
                  selections: [r, o, a],
                  storageKey: null,
                },
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
                      name: "__typename",
                      storageKey: null,
                    },
                    {
                      kind: "TypeDiscriminator",
                      abstractKey: "__isXFBFXIdentityInfo",
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
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "id",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "SecuredActionChallengeCDSMetaPasswordDialogQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "SecuredActionChallengeCDSMetaPasswordDialogQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
