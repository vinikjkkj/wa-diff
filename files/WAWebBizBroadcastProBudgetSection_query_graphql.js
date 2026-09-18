__d(
  "WAWebBizBroadcastProBudgetSection_query.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WAWebBizBroadcastProBudgetSection_query",
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
                  args: null,
                  kind: "FragmentSpread",
                  name: "WAWebBizBroadcastProBudgetSection_backingWaba",
                },
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
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "WAWebBizBroadcastProBudgetSection_adAccount",
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
