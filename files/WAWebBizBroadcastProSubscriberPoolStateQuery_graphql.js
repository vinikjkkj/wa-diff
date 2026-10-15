__d(
  "WAWebBizBroadcastProSubscriberPoolStateQuery.graphql",
  ["WAWebBizBroadcastProSubscriberPoolStateQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_custom_param_restricted_for_first_party_paid_messaging",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          concreteType: "XFBMarketingMessageWhatsAppSubscriberPool",
          kind: "LinkedField",
          name: "default_subscriber_pool",
          plural: !1,
          selections: [t],
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizBroadcastProSubscriberPoolStateQuery",
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
                  selections: [e],
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
                r,
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBMarketingMessageWhatsAppSubscriberPool",
                  kind: "LinkedField",
                  name: "subscriber_pools",
                  plural: !0,
                  selections: [
                    t,
                    o,
                    {
                      alias: null,
                      args: null,
                      concreteType: "AdBusiness",
                      kind: "LinkedField",
                      name: "owning_business",
                      plural: !1,
                      selections: [o],
                      storageKey: null,
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "WAWebBizBroadcastProSubscriberPoolSelectionDialog_subscriberPools",
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
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizBroadcastProSubscriberPoolStateQuery",
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
                  selections: [e, t],
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
                r,
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBMarketingMessageWhatsAppSubscriberPool",
                  kind: "LinkedField",
                  name: "subscriber_pools",
                  plural: !0,
                  selections: [
                    t,
                    o,
                    {
                      alias: null,
                      args: null,
                      concreteType: "AdBusiness",
                      kind: "LinkedField",
                      name: "owning_business",
                      plural: !1,
                      selections: [o, t],
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
            "WAWebBizBroadcastProSubscriberPoolStateQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProSubscriberPoolStateQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
