__d(
  "BillingCountryCurrencyDecisionStateQuery.graphql",
  ["BillingCountryCurrencyDecisionStateQuery_facebookRelayOperation"],
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
          name: "__typename",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "application_type",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          concreteType: "BillingCanCreateNewFromOldInfo",
          kind: "LinkedField",
          name: "can_close_old_and_create_new_billable_account",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "can_create",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "reason",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "business_country_code",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_update_tax_country",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "currency",
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_update_currency_timezone",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_new_account_in_cnfo",
          storageKey: null,
        },
        d = {
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
          name: "BillingCountryCurrencyDecisionStateQuery",
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
                    r,
                    o,
                    {
                      kind: "InlineDataFragmentSpread",
                      name: "BillingAccountInformationUtilsCreateNewFromOld_account",
                      selections: [
                        r,
                        o,
                        a,
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "billable_account_tax_info",
                          plural: !1,
                          selections: [i, l],
                          storageKey: null,
                        },
                        s,
                        u,
                        c,
                      ],
                      args: null,
                      argumentDefinitions: [],
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
          name: "BillingCountryCurrencyDecisionStateQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "payment_account",
              plural: !1,
              selections: [
                r,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "billable_account",
                  plural: !1,
                  selections: [
                    r,
                    o,
                    {
                      kind: "TypeDiscriminator",
                      abstractKey: "__isBillableAccount",
                    },
                    a,
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "billable_account_tax_info",
                      plural: !1,
                      selections: [r, i, l],
                      storageKey: null,
                    },
                    s,
                    u,
                    c,
                    d,
                  ],
                  storageKey: null,
                },
                d,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "BillingCountryCurrencyDecisionStateQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "BillingCountryCurrencyDecisionStateQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
