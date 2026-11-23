__d(
  "WAWebBizBroadcastProUnsubscribeRecipientsFlowQuery.graphql",
  [
    "WAWebBizBroadcastProUnsubscribeRecipientsFlowQuery_facebookRelayOperation",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        t = [e];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizBroadcastProUnsubscribeRecipientsFlowQuery",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "WAWebBizBroadcastProUnsubscribeRecipientsScreen_query",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizBroadcastProUnsubscribeRecipientsFlowQuery",
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
                      concreteType: "AdBusiness",
                      kind: "LinkedField",
                      name: "owner_business",
                      plural: !1,
                      selections: t,
                      storageKey: null,
                    },
                    e,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "XFBWhatsAppSMBBBPro",
              kind: "LinkedField",
              name: "xfb_whatsapp_bb_pro",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBMarketingMessageWhatsAppSubscriberPool",
                  kind: "LinkedField",
                  name: "default_subscriber_pool",
                  plural: !1,
                  selections: t,
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "WAWebBizBroadcastProUnsubscribeRecipientsFlowQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProUnsubscribeRecipientsFlowQuery",
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
