__d(
  "AdsPlayableHeatmapPerfSumWidgetQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "adID" }],
        t = [{ kind: "Variable", name: "id", variableName: "adID" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "total_touch_points",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "max_cell_count",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "AdsPlayableHeatmapPerfSumWidgetQuery",
          selections: [
            {
              alias: "adgroup",
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      fragment: {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            kind: "FragmentSpread",
                            name: "useAdsPlayableHeatmapData_adgroup",
                          },
                        ],
                        type: "Adgroup",
                        abstractKey: null,
                      },
                      kind: "AliasedInlineFragmentSpread",
                      name: "heatmapAdgroup",
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
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsPlayableHeatmapPerfSumWidgetQuery",
          selections: [
            {
              alias: "adgroup",
              args: t,
              concreteType: null,
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
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "PlayableHeatmap",
                      kind: "LinkedField",
                      name: "playable_heatmap",
                      plural: !1,
                      selections: [
                        n,
                        r,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "playable_url",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "PlayableHeatmapTimeBucket",
                          kind: "LinkedField",
                          name: "time_buckets",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "bucket_index",
                              storageKey: null,
                            },
                            n,
                            r,
                            {
                              alias: null,
                              args: null,
                              concreteType: "PlayableHeatmapCell",
                              kind: "LinkedField",
                              name: "cells",
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "grid_x",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "grid_y",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "cell_count",
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
                  type: "Adgroup",
                  abstractKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "24913527001677640",
          metadata: {},
          name: "AdsPlayableHeatmapPerfSumWidgetQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
