__d(
  "MAIBACampaignSummaryCard_adgroup.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: !0, kind: "LocalArgument", name: "isAdsManager" },
      ],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBACampaignSummaryCard_adgroup",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creative_format",
          storageKey: null,
        },
        {
          condition: "isAdsManager",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              kind: "CatchField",
              field: {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "creative_product_set_id",
                storageKey: null,
              },
              to: "NULL",
            },
            {
              kind: "CatchField",
              field: {
                alias: null,
                args: null,
                concreteType: "ProductSet",
                kind: "LinkedField",
                name: "maiba_creative_product_set",
                plural: !1,
                selections: [
                  {
                    kind: "CatchField",
                    field: {
                      alias: null,
                      args: [{ kind: "Literal", name: "first", value: 3 }],
                      concreteType: "ProductSetDynamicItemsV2Connection",
                      kind: "LinkedField",
                      name: "dynamic_items_v2",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "nodes",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "ProductImage",
                              kind: "LinkedField",
                              name: "dynamic_item_main_image",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "height",
                                      value: 120,
                                    },
                                    {
                                      kind: "Literal",
                                      name: "sizing",
                                      value: "contain-fit",
                                    },
                                    {
                                      kind: "Literal",
                                      name: "width",
                                      value: 120,
                                    },
                                  ],
                                  concreteType: "Image",
                                  kind: "LinkedField",
                                  name: "image",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "uri",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey:
                                    'image(height:120,sizing:"contain-fit",width:120)',
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: "dynamic_items_v2(first:3)",
                    },
                    to: "NULL",
                  },
                ],
                storageKey: null,
              },
              to: "NULL",
            },
          ],
        },
        {
          alias: null,
          args: null,
          concreteType: "AdDraftRenderableCreativeMediaItem",
          kind: "LinkedField",
          name: "creative_renderable_media_items",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "media_source",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "media_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "url",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "AdAdgroupWithDraftData",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
