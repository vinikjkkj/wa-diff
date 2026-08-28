__d(
  "BillingCheckRiskStateQuery.graphql",
  ["BillingCheckRiskStateQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "getRiskVerificationInfoForAllCredentialsOnPaymentAccount",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "paymentAccountID",
        },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "paymentMethodID",
        },
        o = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "paymentAccountID",
          },
        ],
        a = [
          {
            kind: "Variable",
            name: "credential_id",
            variableName: "paymentMethodID",
          },
        ],
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "use_case",
          storageKey: null,
        },
        l = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "resolvable_type",
              storageKey: null,
            },
          ],
          type: "CVCOCredentialRequiredVerificationInfo",
          abstractKey: null,
        },
        s = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "next_onboarding_step",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "status",
              storageKey: null,
            },
          ],
          type: "BillingSafeModeRequiredVerificationInfo",
          abstractKey: null,
        },
        u = [
          {
            kind: "InlineDataFragmentSpread",
            name: "BillingRiskCheckUtils_restriction",
            selections: [i, l, s],
            args: null,
            argumentDefinitions: [],
          },
        ],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "ent_credential_id",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        m = [
          d,
          {
            kind: "TypeDiscriminator",
            abstractKey: "__isBillingRequiredVerificationInfo",
          },
          i,
          l,
          s,
        ],
        p = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, r],
          kind: "Fragment",
          metadata: null,
          name: "BillingCheckRiskStateQuery",
          selections: [
            {
              alias: null,
              args: o,
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
                      condition:
                        "getRiskVerificationInfoForAllCredentialsOnPaymentAccount",
                      kind: "Condition",
                      passingValue: !1,
                      selections: [
                        {
                          alias: null,
                          args: a,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "specific_credential_required_risk_verification_info",
                          plural: !1,
                          selections: u,
                          storageKey: null,
                        },
                      ],
                    },
                  ],
                  storageKey: null,
                },
                {
                  kind: "InlineDataFragmentSpread",
                  name: "BillingCheckRiskState_paymentAccount",
                  selections: [
                    {
                      condition:
                        "getRiskVerificationInfoForAllCredentialsOnPaymentAccount",
                      kind: "Condition",
                      passingValue: !0,
                      selections: [
                        {
                          alias: "billing_payment_methods_risk",
                          args: null,
                          concreteType: "PaymentCredentialDetails",
                          kind: "LinkedField",
                          name: "billing_payment_methods",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "credential",
                              plural: !1,
                              selections: [
                                c,
                                {
                                  alias: null,
                                  args: o,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "required_risk_verification_info",
                                  plural: !1,
                                  selections: u,
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                    },
                  ],
                  args: [
                    {
                      kind: "Variable",
                      name: "getRiskVerificationInfoForAllCredentialsOnPaymentAccount",
                      variableName:
                        "getRiskVerificationInfoForAllCredentialsOnPaymentAccount",
                    },
                    {
                      kind: "Variable",
                      name: "paymentAccountID",
                      variableName: "paymentAccountID",
                    },
                  ],
                  argumentDefinitions: [e, t],
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
          argumentDefinitions: [t, r, e],
          kind: "Operation",
          name: "BillingCheckRiskStateQuery",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: null,
              kind: "LinkedField",
              name: "payment_account",
              plural: !1,
              selections: [
                d,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "billable_account",
                  plural: !1,
                  selections: [
                    d,
                    {
                      condition:
                        "getRiskVerificationInfoForAllCredentialsOnPaymentAccount",
                      kind: "Condition",
                      passingValue: !1,
                      selections: [
                        {
                          alias: null,
                          args: a,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "specific_credential_required_risk_verification_info",
                          plural: !1,
                          selections: m,
                          storageKey: null,
                        },
                      ],
                    },
                    p,
                  ],
                  storageKey: null,
                },
                {
                  kind: "TypeDiscriminator",
                  abstractKey: "__isPaymentAccount",
                },
                {
                  condition:
                    "getRiskVerificationInfoForAllCredentialsOnPaymentAccount",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: "billing_payment_methods_risk",
                      args: null,
                      concreteType: "PaymentCredentialDetails",
                      kind: "LinkedField",
                      name: "billing_payment_methods",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "credential",
                          plural: !1,
                          selections: [
                            d,
                            c,
                            {
                              alias: null,
                              args: o,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "required_risk_verification_info",
                              plural: !1,
                              selections: m,
                              storageKey: null,
                            },
                            p,
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                },
                p,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n("BillingCheckRiskStateQuery_facebookRelayOperation"),
          metadata: {},
          name: "BillingCheckRiskStateQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
