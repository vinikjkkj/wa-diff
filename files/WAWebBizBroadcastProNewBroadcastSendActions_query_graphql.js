__d(
  "WAWebBizBroadcastProNewBroadcastSendActions_query.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WAWebBizBroadcastProNewBroadcastSendActions_query",
      selections: [
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
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "currency",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [
                    {
                      kind: "Literal",
                      name: "specific_entrypoint",
                      value: "WHATSAPP_SMB",
                    },
                  ],
                  concreteType: "XFBBillableAccountBillingInfo",
                  kind: "LinkedField",
                  name: "billing_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBBillableAccountRequiredAction",
                      kind: "LinkedField",
                      name: "required_action",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "XFBBillableAccountBillingInfoAction",
                          kind: "LinkedField",
                          name: "action",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "wizard_name",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey:
                    'billing_info(specific_entrypoint:"WHATSAPP_SMB")',
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
