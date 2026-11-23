__d(
  "AdsPLRRecoCTAsPERecosForAdQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "ad_account_id" },
          { defaultValue: null, kind: "LocalArgument", name: "ad_id" },
        ],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "product_id",
          storageKey: null,
        },
        n = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "image_url",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "price",
            storageKey: null,
          },
          t,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "product_name",
            storageKey: null,
          },
        ],
        r = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "ad_account_id",
                variableName: "ad_account_id",
              },
              { kind: "Literal", name: "level", value: "AD" },
              { kind: "Variable", name: "object_id", variableName: "ad_id" },
            ],
            concreteType: "PLRRecosByLevel",
            kind: "LinkedField",
            name: "plr_recos_by_level",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "PLRRecosByLevelProductSetReco",
                kind: "LinkedField",
                name: "duplicate_pe_existing",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "product_set_id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBPLRTopProductSetRecommendation",
                    kind: "LinkedField",
                    name: "recommendation",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "pe_source_catalog_id",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBPLRAccountPEVirtualPSRecommendation",
                kind: "LinkedField",
                name: "duplicate_pe_virtual",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "adgroup_name",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "catalog_id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "virtual_ps_products",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBPLRProductInfo",
                    kind: "LinkedField",
                    name: "virtual_ps_product_infos",
                    plural: !0,
                    selections: n,
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBPLRVirtualPSProductValue",
                    kind: "LinkedField",
                    name: "virtual_ps_products_with_value",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "converted_value",
                        storageKey: null,
                      },
                      t,
                      {
                        alias: null,
                        args: null,
                        concreteType: "XFBPLRProductInfo",
                        kind: "LinkedField",
                        name: "product_info",
                        plural: !1,
                        selections: n,
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
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "AdsPLRRecoCTAsPERecosForAdQuery",
          selections: r,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsPLRRecoCTAsPERecosForAdQuery",
          selections: r,
        },
        params: {
          id: "40030899003167924",
          metadata: {},
          name: "AdsPLRRecoCTAsPERecosForAdQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
