__d(
  "useWAWebBizAdCreationAdAccountSpec_boostedComponentWrapper.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "id",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "useWAWebBizAdCreationAdAccountSpec_boostedComponentWrapper",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "spec",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [{ kind: "Literal", name: "is_forced", value: !0 }],
                concreteType: "AdAccount",
                kind: "LinkedField",
                name: "ad_account",
                plural: !1,
                selections: [
                  e,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null,
                  },
                  {
                    alias: "legacyAccountID",
                    args: null,
                    kind: "ScalarField",
                    name: "legacy_account_id",
                    storageKey: null,
                  },
                  {
                    alias: "currencyCodeEnum",
                    args: null,
                    kind: "ScalarField",
                    name: "currency_code_enum",
                    storageKey: null,
                  },
                  {
                    alias: "canSeeSAFRV3",
                    args: [
                      {
                        kind: "Literal",
                        name: "capability",
                        value: "CAN_SEE_SAFR_V3_FLOW",
                      },
                    ],
                    kind: "ScalarField",
                    name: "has_capability",
                    storageKey:
                      'has_capability(capability:"CAN_SEE_SAFR_V3_FLOW")',
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "payment_account",
                    plural: !1,
                    selections: [e],
                    storageKey: null,
                  },
                ],
                storageKey: "ad_account(is_forced:true)",
              },
            ],
            storageKey: null,
          },
        ],
        type: "BoostedComponentCommonWrapper",
        abstractKey: "__isBoostedComponentCommonWrapper",
      };
    })();
    a.exports = e;
  },
  null,
);
