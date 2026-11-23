__d(
  "MAIBAPaymentSummaryCard_campaignGroup.graphql",
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
      metadata: { throwOnFieldError: !0 },
      name: "MAIBAPaymentSummaryCard_campaignGroup",
      selections: [
        {
          args: [
            {
              kind: "Variable",
              name: "paymentSummaryEntryPoint",
              variableName: "paymentSummaryEntryPoint",
            },
          ],
          kind: "FragmentSpread",
          name: "MAIBAIGPaymentSummaryRow_campaignGroup",
        },
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
              name: "total_budget",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "daily_budget",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "duration_days",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "XFBBoostPostPreviewObjectTaxLineItem",
              kind: "LinkedField",
              name: "taxes",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "label",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "amount",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "total_amount",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "payment_method_label",
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
              kind: "ScalarField",
              name: "payment_method_logo_url",
              storageKey: null,
            },
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
              name: "billing_wizard_name",
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
