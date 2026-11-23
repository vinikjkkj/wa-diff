__d(
  "AdsExperimentsPortfolioOptimizerAdgroupThumbnailsContainer_adgroups.graphql",
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
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "adgroupIds" },
          { defaultValue: 144, kind: "LocalArgument", name: "thumbnailSize" },
        ],
        kind: "Fragment",
        metadata: { vultureHash: "sznD2C14HwY6YGNKFlB-mHu-1zA=" },
        name: "AdsExperimentsPortfolioOptimizerAdgroupThumbnailsContainer_adgroups",
        selections: [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "ids", variableName: "adgroupIds" },
            ],
            concreteType: null,
            kind: "LinkedField",
            name: "nodes",
            plural: !0,
            selections: [
              e,
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "status",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "Adgroup",
                    kind: "LinkedField",
                    name: "primary_adgroup",
                    plural: !1,
                    selections: [e],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: [
                      {
                        kind: "Variable",
                        name: "height",
                        variableName: "thumbnailSize",
                      },
                      {
                        kind: "Variable",
                        name: "width",
                        variableName: "thumbnailSize",
                      },
                    ],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "preview_image",
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
                    storageKey: null,
                  },
                ],
                type: "Adgroup",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "Query",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
