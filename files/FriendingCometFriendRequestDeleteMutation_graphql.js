__d(
  "FriendingCometFriendRequestDeleteMutation.graphql",
  ["FriendingCometFriendRequestDeleteMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "input" },
        t = { defaultValue: null, kind: "LocalArgument", name: "refresh_num" },
        r = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        o = [{ kind: "Variable", name: "data", variableName: "input" }],
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "friendship_status",
          storageKey: null,
        },
        l = [
          { kind: "Literal", name: "action_type", value: "FRIEND" },
          {
            kind: "Literal",
            name: "render_location",
            value: "WWW_COMET_PROFILE",
          },
        ],
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        u = { kind: "Literal", name: "environment", value: "COMET" },
        c = [a];
      return {
        fragment: {
          argumentDefinitions: [e, t, r],
          kind: "Fragment",
          metadata: null,
          name: "FriendingCometFriendRequestDeleteMutation",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: "FriendRequestDeleteResponsePayload",
              kind: "LinkedField",
              name: "friend_request_delete",
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
                    a,
                    i,
                    {
                      alias: null,
                      args: l,
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
          argumentDefinitions: [e, r, t],
          kind: "Operation",
          name: "FriendingCometFriendRequestDeleteMutation",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: "FriendRequestDeleteResponsePayload",
              kind: "LinkedField",
              name: "friend_request_delete",
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
                    a,
                    i,
                    {
                      alias: null,
                      args: l,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "profile_action",
                      plural: !1,
                      selections: [
                        s,
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
                        a,
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
                        u,
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
                            s,
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
                            {
                              kind: "InlineFragment",
                              selections: c,
                              type: "Node",
                              abstractKey: "__isNode",
                            },
                            {
                              kind: "InlineFragment",
                              selections: c,
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
                        u,
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
                                  selections: [s, a],
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
                                a,
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
            "FriendingCometFriendRequestDeleteMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "FriendingCometFriendRequestDeleteMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
