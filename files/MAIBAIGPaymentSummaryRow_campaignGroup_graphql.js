__d(
  "MAIBAIGPaymentSummaryRow_campaignGroup.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
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
      ];
      return {
        argumentDefinitions: [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "paymentSummaryEntryPoint",
          },
        ],
        kind: "Fragment",
        metadata: { throwOnFieldError: !0 },
        name: "MAIBAIGPaymentSummaryRow_campaignGroup",
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
                concreteType: "XFBBoostPostPreviewObjectPaymentAction",
                kind: "LinkedField",
                name: "inline_action",
                plural: !1,
                selections: e,
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
                name: "payment_method_description",
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
                name: "payment_method_logo_urls",
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
                name: "primary_action",
                plural: !1,
                selections: e,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "required_wizard_name",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "total_amount",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "AdCampaignGroupWithDraftData",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
