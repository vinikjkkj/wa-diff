__d(
  "WAWebBizBroadcastProAudienceDetailsSidePanelPaginationQuery.graphql",
  [
    "WAWebBizBroadcastProAudienceDetailsSidePanelPaginationQuery_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "after" },
          { defaultValue: null, kind: "LocalArgument", name: "audienceId" },
          { defaultValue: null, kind: "LocalArgument", name: "caId" },
          { defaultValue: null, kind: "LocalArgument", name: "first" },
        ],
        t = { kind: "Variable", name: "after", variableName: "after" },
        r = { kind: "Variable", name: "first", variableName: "first" },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        i = [t, { kind: "Variable", name: "ca_id", variableName: "caId" }, r];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizBroadcastProAudienceDetailsSidePanelPaginationQuery",
          selections: [
            {
              args: [
                t,
                {
                  kind: "Variable",
                  name: "audienceId",
                  variableName: "audienceId",
                },
                { kind: "Variable", name: "caId", variableName: "caId" },
                r,
              ],
              kind: "FragmentSpread",
              name: "WAWebBizBroadcastProAudienceDetailsSidePanel_query",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizBroadcastProAudienceDetailsSidePanelPaginationQuery",
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
                    o,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: [
                { kind: "Variable", name: "id", variableName: "audienceId" },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                a,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "creation_time",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "name",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "CustomAudienceOperationStatus",
                      kind: "LinkedField",
                      name: "operation_status",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "status_code",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "subscriber_size",
                      storageKey: null,
                    },
                  ],
                  type: "AdCustomAudience",
                  abstractKey: null,
                },
                o,
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: i,
              concreteType: "XFBWhatsappSubscriberListMembersConnection",
              kind: "LinkedField",
              name: "xfb_whatsapp_subscriber_list_members",
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
                        a,
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
            {
              alias: null,
              args: i,
              filters: ["ca_id"],
              handle: "connection",
              key: "WAWebBizBroadcastProAudienceDetailsSidePanel_xfb_whatsapp_subscriber_list_members",
              kind: "LinkedHandle",
              name: "xfb_whatsapp_subscriber_list_members",
            },
          ],
        },
        params: {
          id: n(
            "WAWebBizBroadcastProAudienceDetailsSidePanelPaginationQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProAudienceDetailsSidePanelPaginationQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
