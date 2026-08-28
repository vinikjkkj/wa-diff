__d(
  "BillingTermsAndConditionsFooter_paymentAccount.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "BillingTermsAndConditionsFooter_paymentAccount",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "billable_account",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  concreteType: "BillingPageConfigs",
                  kind: "LinkedField",
                  name: "billing_page_configs",
                  plural: !1,
                  selections: [
                    {
                      kind: "RequiredField",
                      field: {
                        alias: null,
                        args: null,
                        concreteType: "BillingTermsAndConditionsConfig",
                        kind: "LinkedField",
                        name: "terms_and_conditions_config",
                        plural: !1,
                        selections: [
                          {
                            kind: "RequiredField",
                            field: {
                              alias: null,
                              args: null,
                              concreteType: "TextWithEntities",
                              kind: "LinkedField",
                              name: "text_with_entities",
                              plural: !1,
                              selections: [
                                {
                                  args: null,
                                  kind: "FragmentSpread",
                                  name: "FrontierTextWithEntitiesRelay_textWithEntities",
                                },
                              ],
                              storageKey: null,
                            },
                            action: "LOG",
                            path: "billable_account.billing_page_configs.terms_and_conditions_config.text_with_entities",
                          },
                        ],
                        storageKey: null,
                      },
                      action: "LOG",
                      path: "billable_account.billing_page_configs.terms_and_conditions_config",
                    },
                  ],
                  storageKey: null,
                },
                action: "LOG",
                path: "billable_account.billing_page_configs",
              },
            ],
            storageKey: null,
          },
          action: "LOG",
          path: "billable_account",
        },
      ],
      type: "PaymentAccount",
      abstractKey: "__isPaymentAccount",
    };
    a.exports = e;
  },
  null,
);
