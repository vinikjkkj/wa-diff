__d(
  "MAIBACanvasPublishBoost_paymentGate.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        {
          defaultValue: null,
          kind: "LocalArgument",
          name: "paymentSummaryEntryPoint",
        },
      ],
      kind: "Fragment",
      metadata: null,
      name: "MAIBACanvasPublishBoost_paymentGate",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "entry_point",
              variableName: "paymentSummaryEntryPoint",
            },
          ],
          concreteType: "XFBBoostPostPreviewObjectPaymentSummary",
          kind: "LinkedField",
          name: "payment_summary",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "payment_account_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "payment_method_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "XFBBoostPostPreviewObjectPaymentAction",
              kind: "LinkedField",
              name: "required_action",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "wizard_name",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "wizard_props_json",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "AdCampaignGroupWithDraftData",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
