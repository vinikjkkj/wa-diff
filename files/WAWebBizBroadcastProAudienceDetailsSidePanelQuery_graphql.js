__d(
  "WAWebBizBroadcastProAudienceDetailsSidePanelQuery.graphql",
  [
    "WAWebBizBroadcastProAudienceDetailsSidePanelQuery_facebookRelayOperation",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "audienceId" },
          { defaultValue: null, kind: "LocalArgument", name: "caId" },
          { defaultValue: null, kind: "LocalArgument", name: "first" },
        ],
        t = { kind: "Variable", name: "first", variableName: "first" },
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
          name: "__typename",
          storageKey: null,
        },
        a = [{ kind: "Variable", name: "ca_id", variableName: "caId" }, t];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizBroadcastProAudienceDetailsSidePanelQuery",
          selections: [
            {
              args: [
                {
                  kind: "Variable",
                  name: "audienceId",
                  variableName: "audienceId",
                },
                { kind: "Variable", name: "caId", variableName: "caId" },
                t,
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
          name: "WAWebBizBroadcastProAudienceDetailsSidePanelQuery",
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
                    r,
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
                o,
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
                r,
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: a,
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
                        o,
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
              args: a,
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
            "WAWebBizBroadcastProAudienceDetailsSidePanelQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProAudienceDetailsSidePanelQuery",
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
