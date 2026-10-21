__d(
  "WAWebBizBroadcastProRemoveRecipientAudienceScreenQuery.graphql",
  [
    "WAWebBizBroadcastProRemoveRecipientAudienceScreenQuery_facebookRelayOperation",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "caId" },
          { defaultValue: null, kind: "LocalArgument", name: "first" },
        ],
        t = { kind: "Variable", name: "first", variableName: "first" },
        r = [{ kind: "Variable", name: "ca_id", variableName: "caId" }, t];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizBroadcastProRemoveRecipientAudienceScreenQuery",
          selections: [
            {
              args: [
                { kind: "Variable", name: "caId", variableName: "caId" },
                t,
              ],
              kind: "FragmentSpread",
              name: "WAWebBizBroadcastProRemoveRecipientAudienceList_query",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizBroadcastProRemoveRecipientAudienceScreenQuery",
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
            {
              alias: null,
              args: r,
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
            {
              alias: null,
              args: r,
              filters: ["ca_id"],
              handle: "connection",
              key: "WAWebBizBroadcastProRemoveRecipientAudienceList_xfb_whatsapp_subscriber_list_members",
              kind: "LinkedHandle",
              name: "xfb_whatsapp_subscriber_list_members",
            },
          ],
        },
        params: {
          id: n(
            "WAWebBizBroadcastProRemoveRecipientAudienceScreenQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProRemoveRecipientAudienceScreenQuery",
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
