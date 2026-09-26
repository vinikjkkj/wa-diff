__d(
  "FriendingCometFriendRequestSendMutation.graphql",
  ["FriendingCometFriendRequestSendMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "input" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        t = [{ kind: "Variable", name: "data", variableName: "input" }],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "friendship_status",
          storageKey: null,
        },
        a = [
          { kind: "Literal", name: "action_type", value: "FRIEND" },
          {
            kind: "Literal",
            name: "render_location",
            value: "WWW_COMET_PROFILE",
          },
        ],
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "FriendingCometFriendRequestSendMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "FriendRequestSendResponsePayload",
              kind: "LinkedField",
              name: "friend_request_send",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "friend_requestees",
                  plural: !0,
                  selections: [
                    r,
                    o,
                    {
                      alias: null,
                      args: a,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "profile_action",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "ProfileActionMutationUtils_action",
                        },
                      ],
                      storageKey:
                        'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")',
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "ProfileCometTimelineTabTopBanner_user",
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "FriendingCometFriendRequestSendMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "FriendRequestSendResponsePayload",
              kind: "LinkedField",
              name: "friend_request_send",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "friend_requestees",
                  plural: !0,
                  selections: [
                    r,
                    o,
                    {
                      alias: null,
                      args: a,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "profile_action",
                      plural: !1,
                      selections: [
                        i,
                        {
                          kind: "TypeDiscriminator",
                          abstractKey: "__isProfileAction",
                        },
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "icon_color",
                              value: "fds-black",
                            },
                            { kind: "Literal", name: "icon_size", value: "16" },
                            {
                              kind: "Literal",
                              name: "icon_variant",
                              value: "filled",
                            },
                            {
                              kind: "Variable",
                              name: "scale",
                              variableName: "scale",
                            },
                          ],
                          concreteType: "Image",
                          kind: "LinkedField",
                          name: "icon_image",
                          plural: !1,
                          selections: [
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
                          ],
                          storageKey: null,
                        },
                        r,
                        {
                          alias: null,
                          args: null,
                          concreteType: "TextWithEntities",
                          kind: "LinkedField",
                          name: "title",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "text",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          kind: "ClientExtension",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_optimistic_update",
                              storageKey: null,
                            },
                          ],
                        },
                      ],
                      storageKey:
                        'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")',
                    },
                    {
                      alias: null,
                      args: [
                        {
                          kind: "Literal",
                          name: "render_location",
                          value: "TIMELINE_TAB_TOP",
                        },
                        { kind: "Literal", name: "supported", value: "2R7NW9" },
                      ],
                      concreteType: null,
                      kind: "LinkedField",
                      name: "comet_profile_banner",
                      plural: !1,
                      selections: [
                        i,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "ProfileCometTimelineTabTopBanner_user",
                              fragmentName:
                                "ProfilePlusCometAdminNotice_cometProfileBanner",
                              fragmentPropName: "cometProfileBanner",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ProfilePlusAdminNoticeRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "ProfileCometTimelineTabTopBanner_user",
                              fragmentName:
                                "ProfileCometAppealBanner_cometProfileBanner",
                              fragmentPropName: "cometProfileBanner",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ProfileAppealBanner",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "ProfileCometTimelineTabTopBanner_user",
                              fragmentName:
                                "ProfileCometBannerGeneric_cometProfileBanner",
                              fragmentPropName: "cometProfileBanner",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ProfileBanner",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "ProfileCometTimelineTabTopBanner_user",
                              fragmentName:
                                "FriendingCometProfilePYMKHScroll_cometProfileBanner",
                              fragmentPropName: "cometProfileBanner",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ProfilePYMKBanner",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "ProfileCometTimelineTabTopBanner_user",
                              fragmentName:
                                "ProfileCometCoppaSelfCertBanner_cometProfileBanner",
                              fragmentPropName: "cometProfileBanner",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CoppaSelfCertifyBanner",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [r],
                          type: "Node",
                          abstractKey: "__isNode",
                        },
                      ],
                      storageKey:
                        'comet_profile_banner(render_location:"TIMELINE_TAB_TOP",supported:"2R7NW9")',
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
            "FriendingCometFriendRequestSendMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "FriendingCometFriendRequestSendMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
