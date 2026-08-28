__d(
  "SecuredActionChallengePasswordDialogQuery.graphql",
  [
    "SecuredActionChallengePasswordDialogQuery_facebookRelayOperation",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "height" },
        t = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        r = { defaultValue: null, kind: "LocalArgument", name: "width" },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "public_key",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key_id",
          storageKey: null,
        },
        i = [
          { kind: "Variable", name: "height", variableName: "height" },
          { kind: "Variable", name: "scale", variableName: "scale" },
          { kind: "Variable", name: "width", variableName: "width" },
        ],
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          concreteType: "Story",
          kind: "LinkedField",
          name: "first_story_to_show",
          plural: !1,
          selections: [
            s,
            {
              alias: null,
              args: null,
              concreteType: "StoryCardSeenState",
              kind: "LinkedField",
              name: "story_card_seen_state",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_seen_by_viewer",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, r],
          kind: "Fragment",
          metadata: null,
          name: "SecuredActionChallengePasswordDialogQuery",
          selections: [
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
                    field: o,
                    action: "THROW",
                    path: "public_key_and_id_for_encryption.public_key",
                  },
                  {
                    kind: "RequiredField",
                    field: a,
                    action: "THROW",
                    path: "public_key_and_id_for_encryption.key_id",
                  },
                ],
                storageKey: null,
              },
              action: "THROW",
              path: "public_key_and_id_for_encryption",
            },
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "actor",
                  plural: !1,
                  selections: [
                    {
                      args: i,
                      kind: "FragmentSpread",
                      name: "SecuredActionChallengeDialogBase_actor",
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, r, e],
          kind: "Operation",
          name: "SecuredActionChallengePasswordDialogQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "PublicKeyAndIDForEncryption",
              kind: "LinkedField",
              name: "public_key_and_id_for_encryption",
              plural: !1,
              selections: [o, a],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "actor",
                  plural: !1,
                  selections: [
                    l,
                    { kind: "TypeDiscriminator", abstractKey: "__isActor" },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "name",
                      storageKey: null,
                    },
                    s,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: "profile_url",
                          args: null,
                          kind: "ScalarField",
                          name: "url",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "url",
                          storageKey: null,
                        },
                      ],
                      type: "Entity",
                      abstractKey: "__isEntity",
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "pages_story_bucket_v2",
                          plural: !1,
                          selections: [l, s, u],
                          storageKey: null,
                        },
                      ],
                      type: "Page",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: [{ kind: "Literal", name: "first", value: 1 }],
                          concreteType: "DirectInboxBroadcastBucketConnection",
                          kind: "LinkedField",
                          name: "story_bucket",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "DirectMessageThreadBucket",
                              kind: "LinkedField",
                              name: "nodes",
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "should_show_close_friend_badge",
                                  storageKey: null,
                                },
                                s,
                                u,
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: "story_bucket(first:1)",
                        },
                        {
                          kind: "ClientExtension",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "availability",
                              storageKey: null,
                            },
                          ],
                        },
                      ],
                      type: "User",
                      abstractKey: null,
                    },
                    {
                      alias: null,
                      args: i,
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "profile_picture",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "uri",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "width",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "height",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "scale",
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
          ],
        },
        params: {
          id: n(
            "SecuredActionChallengePasswordDialogQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "SecuredActionChallengePasswordDialogQuery",
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
