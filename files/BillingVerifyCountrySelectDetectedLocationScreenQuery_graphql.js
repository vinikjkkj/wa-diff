__d(
  "BillingVerifyCountrySelectDetectedLocationScreenQuery.graphql",
  [
    "BillingVerifyCountrySelectDetectedLocationScreenQuery_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "paymentAccountID",
          },
        ],
        t = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "paymentAccountID",
          },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "label",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "value",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "BillingVerifyCountrySelectDetectedLocationScreenQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "payment_account",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "billable_account",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBBillingOptionListItem",
                      kind: "LinkedField",
                      name: "country_validation_available_country_options",
                      plural: !0,
                      selections: [
                        {
                          kind: "RequiredField",
                          field: r,
                          action: "THROW",
                          path: "payment_account.billable_account.country_validation_available_country_options.label",
                        },
                        {
                          kind: "RequiredField",
                          field: o,
                          action: "THROW",
                          path: "payment_account.billable_account.country_validation_available_country_options.value",
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "useBillingSupportedCountries_values",
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
          argumentDefinitions: e,
          kind: "Operation",
          name: "BillingVerifyCountrySelectDetectedLocationScreenQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "payment_account",
              plural: !1,
              selections: [
                a,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "billable_account",
                  plural: !1,
                  selections: [
                    a,
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBBillingOptionListItem",
                      kind: "LinkedField",
                      name: "country_validation_available_country_options",
                      plural: !0,
                      selections: [r, o],
                      storageKey: null,
                    },
                    {
                      kind: "TypeDiscriminator",
                      abstractKey: "__isBillableAccount",
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "supported_countries",
                      storageKey: null,
                    },
                    i,
                  ],
                  storageKey: null,
                },
                i,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "BillingVerifyCountrySelectDetectedLocationScreenQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "BillingVerifyCountrySelectDetectedLocationScreenQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
