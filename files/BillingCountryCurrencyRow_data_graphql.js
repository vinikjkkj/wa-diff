__d(
  "BillingCountryCurrencyRow_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "label",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "value",
          storageKey: null,
        };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "BillingCountryCurrencyRow_data",
        selections: [
          {
            kind: "InlineDataFragmentSpread",
            name: "useBillingCountry_data",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "billable_account_tax_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "business_country_code",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "predicated_business_country_code",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            args: null,
            argumentDefinitions: [],
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "currency",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "XFBBillingOptionListItem",
            kind: "LinkedField",
            name: "supported_country_options",
            plural: !0,
            selections: [
              {
                kind: "RequiredField",
                field: e,
                action: "THROW",
                path: "supported_country_options.label",
              },
              {
                kind: "RequiredField",
                field: t,
                action: "THROW",
                path: "supported_country_options.value",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "XFBBillingOptionListItem",
            kind: "LinkedField",
            name: "supported_currency_options",
            plural: !0,
            selections: [
              {
                kind: "RequiredField",
                field: e,
                action: "THROW",
                path: "supported_currency_options.label",
              },
              {
                kind: "RequiredField",
                field: t,
                action: "THROW",
                path: "supported_currency_options.value",
              },
            ],
            storageKey: null,
          },
        ],
        type: "BillableAccount",
        abstractKey: "__isBillableAccount",
      };
    })();
    a.exports = e;
  },
  null,
);
