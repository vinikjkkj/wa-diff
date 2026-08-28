__d(
  "BillingAwareOnboardingModalitySelectLandingScreenQuery.graphql",
  [
    "BillingAwareOnboardingModalitySelectLandingScreenQuery_facebookRelayOperation",
    "relay-runtime",
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
          name: "payment_modes",
          storageKey: null,
        },
        o = {
          alias: "isMissingPM",
          args: [
            {
              kind: "Literal",
              name: "requested_flags",
              value: ["MISSING_PAYMENT_METHOD"],
            },
          ],
          kind: "ScalarField",
          name: "billing_flags",
          storageKey:
            'billing_flags(requested_flags:["MISSING_PAYMENT_METHOD"])',
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
        },
        l = [i],
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "length",
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "offset",
          storageKey: null,
        },
        c = {
          alias: null,
          args: [{ kind: "Literal", name: "limit", value: 5 }],
          concreteType: "Image",
          kind: "LinkedField",
          name: "billing_icons",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "uri",
              storageKey: null,
            },
          ],
          storageKey: "billing_icons(limit:5)",
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "BillingAwareOnboardingModalitySelectLandingScreenQuery",
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
                  selections: [r, o],
                  storageKey: null,
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "BillingAwareOnboardingModalitySelectLandingView_paymentAccount",
                },
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "billing_payment_method_options",
                  plural: !0,
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "BillingAwareOnboardingModalitySelectLandingView_paymentMethodOptions",
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
          name: "BillingAwareOnboardingModalitySelectLandingScreenQuery",
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
                    r,
                    o,
                    i,
                    {
                      alias: null,
                      args: null,
                      concreteType: "BillingPageConfigs",
                      kind: "LinkedField",
                      name: "billing_page_configs",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "BillingTermsAndConditionsConfig",
                          kind: "LinkedField",
                          name: "terms_and_conditions_config",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "TextWithEntities",
                              kind: "LinkedField",
                              name: "text_with_entities",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "text",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "EntityAtRange",
                                  kind: "LinkedField",
                                  name: "ranges",
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "entity",
                                      plural: !1,
                                      selections: [
                                        a,
                                        {
                                          alias: null,
                                          args: [
                                            {
                                              kind: "Literal",
                                              name: "site",
                                              value: "comet",
                                            },
                                          ],
                                          kind: "ScalarField",
                                          name: "url",
                                          storageKey: 'url(site:"comet")',
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: l,
                                          type: "Node",
                                          abstractKey: "__isNode",
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: l,
                                          type: "XFBTopicTag",
                                          abstractKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "entity_is_weak_reference",
                                      storageKey: null,
                                    },
                                    s,
                                    u,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "InlineStyleAtRange",
                                  kind: "LinkedField",
                                  name: "inline_style_ranges",
                                  plural: !0,
                                  selections: [
                                    s,
                                    u,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "inline_style",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "ColorAtRange",
                                  kind: "LinkedField",
                                  name: "color_ranges",
                                  plural: !0,
                                  selections: [
                                    s,
                                    u,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "hex_rgb_color_with_pound_key",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  kind: "TypeDiscriminator",
                  abstractKey: "__isPaymentAccount",
                },
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "billing_payment_method_options",
                  plural: !0,
                  selections: [
                    a,
                    {
                      kind: "TypeDiscriminator",
                      abstractKey: "__isPaymentCredentialOption",
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "BillingPostPayPaymentMethodOptions_paymentMethodOptions",
                          fragmentName:
                            "BillingAwareOnboardingNewCreditCardOption_option",
                          fragmentPropName: "option",
                          kind: "ModuleImport",
                        },
                        c,
                      ],
                      type: "AdAccountNewCreditCardOption",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "BillingPostPayPaymentMethodOptions_paymentMethodOptions",
                          fragmentName:
                            "BillingAwareOnboardingNewPayPalOption_option",
                          fragmentPropName: "option",
                          kind: "ModuleImport",
                        },
                        c,
                      ],
                      type: "AdAccountNewPaypalOption",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "BillingPostPayPaymentMethodOptions_paymentMethodOptions",
                          fragmentName:
                            "BillingAwareOnboardingNewDirectDebitOption_option",
                          fragmentPropName: "option",
                          kind: "ModuleImport",
                        },
                        c,
                      ],
                      type: "AdAccountNewDirectDebitV2Option",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "BillingPostPayPaymentMethodOptions_paymentMethodOptions",
                          fragmentName:
                            "BillingAwareOnboardingNewCouponOption_option",
                          fragmentPropName: "option",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "AdAccountNewTokenOption",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "BillingPrePayPaymentMethodOptions_paymentMethodOptions",
                          fragmentName:
                            "BillingAwareOnboardingNewLPMOption_option",
                          fragmentPropName: "option",
                          kind: "ModuleImport",
                        },
                        c,
                      ],
                      type: "AdAccountAltpayOption",
                      abstractKey: null,
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
            "BillingAwareOnboardingModalitySelectLandingScreenQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "BillingAwareOnboardingModalitySelectLandingScreenQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
