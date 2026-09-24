__d(
  "WAWebBizBroadcastProNewBroadcastDrawer_query.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WAWebBizBroadcastProNewBroadcastDrawer_query",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "WAWebBizBroadcastProBudgetSection_query",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "WAWebBizBroadcastProNewBroadcastSendActions_query",
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
              concreteType: "XFBWABBProSendingRestriction",
              kind: "LinkedField",
              name: "sending_restriction",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_sending_allowed",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "upsell_business_verification",
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
    a.exports = e;
  },
  null,
);
