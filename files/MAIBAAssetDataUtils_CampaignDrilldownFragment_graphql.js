__d(
  "MAIBAAssetDataUtils_CampaignDrilldownFragment.graphql",
  ["CampaignPaginationQuery.graphql"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = ["adgroups"],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { defaultValue: 10, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
        ],
        kind: "Fragment",
        metadata: {
          connection: [
            { count: "count", cursor: "cursor", direction: "forward", path: e },
          ],
          refetch: {
            connection: {
              forward: { count: "count", cursor: "cursor" },
              backward: null,
              path: e,
            },
            fragmentPathInResult: ["node"],
            operation: n("CampaignPaginationQuery.graphql"),
            identifierInfo: {
              identifierField: "id",
              identifierQueryVariableName: "id",
            },
          },
        },
        name: "MAIBAAssetDataUtils_CampaignDrilldownFragment",
        selections: [
          {
            alias: "adgroups",
            args: null,
            concreteType: "AdCampaignAdgroupsConnection",
            kind: "LinkedField",
            name: "__MAIBAAssetDataUtils_CampaignDrilldownFragment_adgroups_connection",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "AdCampaignAdgroupsEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "Adgroup",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [
                      { kind: "RequiredField", field: t, action: "LOG" },
                      {
                        kind: "RequiredField",
                        field: {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "name",
                          storageKey: null,
                        },
                        action: "LOG",
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "cursor",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "Adgroup",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
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
                concreteType: "PageInfo",
                kind: "LinkedField",
                name: "page_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "end_cursor",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "has_next_page",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          t,
        ],
        type: "AdCampaign",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
