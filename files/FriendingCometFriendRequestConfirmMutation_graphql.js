__d(
  "FriendingCometFriendRequestConfirmMutation.graphql",
  ["FriendingCometFriendRequestConfirmMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "input" },
        t = { defaultValue: null, kind: "LocalArgument", name: "refresh_num" },
        r = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "should_fix_banner",
        },
        a = [{ kind: "Variable", name: "data", variableName: "input" }],
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "friendship_status",
          storageKey: null,
        },
        s = [
          { kind: "Literal", name: "action_type", value: "FRIEND" },
          {
            kind: "Literal",
            name: "render_location",
            value: "WWW_COMET_PROFILE",
          },
        ],
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_active",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        d = [i],
        m = {
          kind: "InlineFragment",
          selections: d,
          type: "Node",
          abstractKey: "__isNode",
        },
        p = { kind: "Literal", name: "environment", value: "COMET" };
      return {
        fragment: {
          argumentDefinitions: [e, t, r, o],
          kind: "Fragment",
          metadata: null,
          name: "FriendingCometFriendRequestConfirmMutation",
          selections: [
            {
              alias: null,
              args: a,
              concreteType: "FriendRequestAcceptResponsePayload",
              kind: "LinkedField",
              name: "friend_request_accept",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "friend_requester",
                  plural: !1,
                  selections: [
                    i,
                    {
                      condition: "should_fix_banner",
                      kind: "Condition",
                      passingValue: !0,
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "ProfileCometProfileHeaderBanner_user",
                        },
                      ],
                    },
                    l,
                    {
                      alias: null,
                      args: s,
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
                        u,
                      ],
                      storageKey:
                        'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")',
                    },
                  ],
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
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometRightSideHeaderCards_viewerSideFeed",
                    },
                    {
                      args: [
                        {
                          kind: "Literal",
                          name: "bookmarkID",
                          value: "2356318349",
                        },
                      ],
                      kind: "FragmentSpread",
                      name: "useTopTabBadgeCount_viewer",
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
          argumentDefinitions: [e, r, t, o],
          kind: "Operation",
          name: "FriendingCometFriendRequestConfirmMutation",
          selections: [
            {
              alias: null,
              args: a,
              concreteType: "FriendRequestAcceptResponsePayload",
              kind: "LinkedField",
              name: "friend_request_accept",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "friend_requester",
                  plural: !1,
                  selections: [
                    i,
                    {
                      condition: "should_fix_banner",
                      kind: "Condition",
                      passingValue: !0,
                      selections: [
                        {
                          alias: "top_banner",
                          args: [
                            {
                              kind: "Literal",
                              name: "render_location",
                              value: "PROFILE_HEADER",
                            },
                            {
                              kind: "Literal",
                              name: "supported",
                              value: "1R3rmD",
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "comet_profile_banner",
                          plural: !1,
                          selections: [
                            c,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometProfileHeaderBanner_user",
                                  fragmentName:
                                    "ProfileCometPendingFriendBanner_cometProfileBanner",
                                  fragmentPropName: "cometProfileBanner",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfilePendingFriendBanner",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "ProfileCometProfileHeaderBanner_user",
                                  fragmentName:
                                    "ProfilePlusCometAdminNoticeProfileBanner_cometProfileBanner",
                                  fragmentPropName: "cometProfileBanner",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ProfilePlusAdminNoticeRenderer",
                              abstractKey: null,
                            },
                            m,
                          ],
                          storageKey:
                            'comet_profile_banner(render_location:"PROFILE_HEADER",supported:"1R3rmD")',
                        },
                      ],
                    },
                    l,
                    {
                      alias: null,
                      args: s,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "profile_action",
                      plural: !1,
                      selections: [
                        c,
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
                        i,
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
                        u,
                      ],
                      storageKey:
                        'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")',
                    },
                  ],
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
                      args: [
                        p,
                        { kind: "Literal", name: "query_ego_units", value: !1 },
                        {
                          kind: "Variable",
                          name: "refresh_num",
                          variableName: "refresh_num",
                        },
                      ],
                      concreteType: "SideFeedConnection",
                      kind: "LinkedField",
                      name: "side_feed",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "nodes",
                          plural: !0,
                          selections: [
                            c,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometRightSideHeaderCards_viewerSideFeed",
                                  fragmentName:
                                    "PagesCometHomeAdminContainer_pagesPanel",
                                  fragmentPropName: "pagesPanel",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "PagesSideFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometRightSideHeaderCards_viewerSideFeed",
                                  fragmentName:
                                    "FriendingCometHomeInlineRHCContainer_friendsPanel",
                                  fragmentPropName: "friendsPanel",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "FriendingRequestsSideFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometRightSideHeaderCards_viewerSideFeed",
                                  fragmentName:
                                    "CometHomeRemindersContainer_reminderPanel",
                                  fragmentPropName: "reminderPanel",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "RemindersSideFeedUnit",
                              abstractKey: null,
                            },
                            m,
                            {
                              kind: "InlineFragment",
                              selections: d,
                              type: "AdsSideFeedUnitItem",
                              abstractKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: [
                        {
                          items: [
                            {
                              kind: "Literal",
                              name: "bookmark_ids.0",
                              value: "2356318349",
                            },
                          ],
                          kind: "ListValue",
                          name: "bookmark_ids",
                        },
                        p,
                        {
                          kind: "Literal",
                          name: "folder_id",
                          value: "PRODUCT",
                        },
                        {
                          kind: "Literal",
                          name: "sections",
                          value: ["FACEBOOK_APP"],
                        },
                      ],
                      concreteType: "BookmarksConnection",
                      kind: "LinkedField",
                      name: "bookmarks",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "BookmarksEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "Bookmark",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "bookmarked_node",
                                  plural: !1,
                                  selections: [c, i],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "bookmark_render_location",
                                      value: "COMET_TOP_TAB",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "unread_count",
                                  storageKey:
                                    'unread_count(bookmark_render_location:"COMET_TOP_TAB")',
                                },
                                i,
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey:
                        'bookmarks(bookmark_ids:["2356318349"],environment:"COMET",folder_id:"PRODUCT",sections:["FACEBOOK_APP"])',
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
            "FriendingCometFriendRequestConfirmMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "FriendingCometFriendRequestConfirmMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
