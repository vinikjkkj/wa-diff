__d(
  "WAWebBizBroadcastProRemoveRecipientAudienceList_query.graphql",
  ["WAWebBizBroadcastProRemoveRecipientAudienceListPaginationQuery.graphql"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = ["xfb_whatsapp_subscriber_list_members"];
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "after" },
          { defaultValue: null, kind: "LocalArgument", name: "caId" },
          { defaultValue: null, kind: "LocalArgument", name: "first" },
        ],
        kind: "Fragment",
        metadata: {
          connection: [
            { count: "first", cursor: "after", direction: "forward", path: e },
          ],
          refetch: {
            connection: {
              forward: { count: "first", cursor: "after" },
              backward: null,
              path: e,
            },
            fragmentPathInResult: [],
            operation: n(
              "WAWebBizBroadcastProRemoveRecipientAudienceListPaginationQuery.graphql",
            ),
          },
        },
        name: "WAWebBizBroadcastProRemoveRecipientAudienceList_query",
        selections: [
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
                concreteType: "WhatsAppBusinessAccount",
                kind: "LinkedField",
                name: "backing_waba",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_custom_param_restricted_for_first_party_paid_messaging",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: "xfb_whatsapp_subscriber_list_members",
            args: [{ kind: "Variable", name: "ca_id", variableName: "caId" }],
            concreteType: "XFBWhatsappSubscriberListMembersConnection",
            kind: "LinkedField",
            name: "__WAWebBizBroadcastProRemoveRecipientAudienceList_xfb_whatsapp_subscriber_list_members_connection",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XFBWhatsappSubscriberListMembersEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBWhatsAppSubscriberListMember",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "full_name",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "phone_number",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "cursor",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "PageInfo",
                kind: "LinkedField",
                name: "page_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "end_cursor",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "has_next_page",
                    storageKey: null,
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
      };
    })();
    a.exports = e;
  },
  null,
);
