__d(
  "BillingMIUpdateBillToPartyView_values.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "legal_entity_name",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "organizationID" },
          { kind: "RootArgument", name: "paymentAccountID" },
          { kind: "RootArgument", name: "paymentMethodID" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "BillingMIUpdateBillToPartyView_values",
        selections: [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "payment_legacy_account_id",
                variableName: "paymentAccountID",
              },
            ],
            concreteType: null,
            kind: "LinkedField",
            name: "billable_account_by_payment_account",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null,
              },
              {
                alias: "ads_pausing_options",
                args: [
                  {
                    kind: "Literal",
                    name: "gk_name",
                    value: "AOAB_PAUSING_ADS_OPTIONS",
                  },
                ],
                kind: "ScalarField",
                name: "gk_on_payment_account",
                storageKey:
                  'gk_on_payment_account(gk_name:"AOAB_PAUSING_ADS_OPTIONS")',
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: "billToOrgName",
                    args: null,
                    kind: "ScalarField",
                    name: "billto_legal_entity_name",
                    storageKey: null,
                  },
                  {
                    alias: "liableOrgName",
                    args: null,
                    kind: "ScalarField",
                    name: "liable_legal_entity_name",
                    storageKey: null,
                  },
                ],
                type: "AdAccount",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: [
              { kind: "Variable", name: "id", variableName: "organizationID" },
            ],
            concreteType: "Organization",
            kind: "LinkedField",
            name: "organization",
            plural: !1,
            selections: e,
            storageKey: null,
          },
          {
            alias: null,
            args: [
              { kind: "Variable", name: "id", variableName: "paymentMethodID" },
            ],
            concreteType: null,
            kind: "LinkedField",
            name: "extended_credit",
            plural: !1,
            selections: e,
            storageKey: null,
          },
        ],
        type: "Query",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
