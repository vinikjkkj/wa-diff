__d(
  "MAIBAAdDraftEditorContextProvider_catalogOptions.graphql",
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
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "isAdsManager" },
        ],
        kind: "Fragment",
        metadata: { throwOnFieldError: !0 },
        name: "MAIBAAdDraftEditorContextProvider_catalogOptions",
        selections: [
          {
            condition: "isAdsManager",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                kind: "CatchField",
                field: {
                  alias: null,
                  args: [{ kind: "Literal", name: "limit", value: 10 }],
                  concreteType: "ProductCatalog",
                  kind: "LinkedField",
                  name: "maiba_eligible_product_catalogs",
                  plural: !0,
                  selections: [
                    e,
                    t,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "vertical",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "CommerceMerchantSettings",
                      kind: "LinkedField",
                      name: "commerce_merchant_settings",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "shop_ads_capabilities",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "ProductSet",
                      kind: "LinkedField",
                      name: "all_products_product_set",
                      plural: !1,
                      selections: [e],
                      storageKey: null,
                    },
                    {
                      kind: "CatchField",
                      field: {
                        alias: null,
                        args: [{ kind: "Literal", name: "first", value: 25 }],
                        concreteType: "ProductCatalogSetsConnection",
                        kind: "LinkedField",
                        name: "sets",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: "ProductSet",
                            kind: "LinkedField",
                            name: "nodes",
                            plural: !0,
                            selections: [e, t],
                            storageKey: null,
                          },
                        ],
                        storageKey: "sets(first:25)",
                      },
                      to: "NULL",
                    },
                  ],
                  storageKey: "maiba_eligible_product_catalogs(limit:10)",
                },
                to: "NULL",
              },
            ],
          },
        ],
        type: "AdAccount",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
