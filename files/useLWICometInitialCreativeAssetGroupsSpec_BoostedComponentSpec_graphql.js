__d(
  "useLWICometInitialCreativeAssetGroupsSpec_BoostedComponentSpec.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "source",
        storageKey: null,
      };
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "lwi_goal" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "useLWICometInitialCreativeAssetGroupsSpec_BoostedComponentSpec",
        selections: [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "lwi_goal", variableName: "lwi_goal" },
            ],
            concreteType: "AdsLWIAdGroupSpec",
            kind: "LinkedField",
            name: "adgroup_spec",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "CreativeAssetGroupsSpec",
                kind: "LinkedField",
                name: "creative_asset_groups_spec",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "CreativeAssetGroupSpec",
                    kind: "LinkedField",
                    name: "groups",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "CreativeAssetGroupImageSpec",
                        kind: "LinkedField",
                        name: "images",
                        plural: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "hash",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "url",
                            storageKey: null,
                          },
                          e,
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "CreativeAssetGroupVideoSpec",
                        kind: "LinkedField",
                        name: "videos",
                        plural: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "image_hash",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "image_url",
                            storageKey: null,
                          },
                          e,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "thumbnail_id",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "thumbnail_source",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "video_id",
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "CreativeAssetGroupTextSpec",
                        kind: "LinkedField",
                        name: "texts",
                        plural: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "text_type",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "text",
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
                    kind: "ScalarField",
                    name: "origins",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "BoostedComponentSpec",
        abstractKey: "__isBoostedComponentSpec",
      };
    })();
    a.exports = e;
  },
  null,
);
