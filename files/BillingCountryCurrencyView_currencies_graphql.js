__d(
  "BillingCountryCurrencyView_currencies.graphql",
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
        argumentDefinitions: [
          { kind: "RootArgument", name: "skipVerficationOptions" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "BillingCountryCurrencyView_currencies",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null,
          },
          {
            condition: "skipVerficationOptions",
            kind: "Condition",
            passingValue: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XFBBillingOptionListItem",
                kind: "LinkedField",
                name: "account_credential_country_options",
                plural: !0,
                selections: [
                  {
                    kind: "RequiredField",
                    field: e,
                    action: "THROW",
                    path: "account_credential_country_options.label",
                  },
                  {
                    kind: "RequiredField",
                    field: t,
                    action: "THROW",
                    path: "account_credential_country_options.value",
                  },
                ],
                storageKey: null,
              },
            ],
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
            args: null,
            kind: "FragmentSpread",
            name: "BillingSelectSupportedCurrencies_data",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useBillingSupportedTimezoneOptions_values",
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
