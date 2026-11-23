__d(
  "AdsExperimentsTestDetailsQuery.graphql",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "id" },
          { defaultValue: null, kind: "LocalArgument", name: "skip" },
        ],
        t = [{ kind: "Variable", name: "id", variableName: "id" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "daily_budget",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "lifetime_budget",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          concreteType: "TimeSuggestion",
          kind: "LinkedField",
          name: "time_suggestion",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_enabled",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsExperimentsTestDetailsQuery",
          selections: [
            {
              condition: "skip",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
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
                          alias: null,
                          args: null,
                          concreteType: "AdStudyCellsConnection",
                          kind: "LinkedField",
                          name: "cells",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "AdStudyCell",
                              kind: "LinkedField",
                              name: "nodes",
                              plural: !0,
                              selections: [
                                n,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "AdStudyCellAdEntitiesConnection",
                                  kind: "LinkedField",
                                  name: "ad_entities",
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
                                        r,
                                        {
                                          kind: "InlineFragment",
                                          selections: [n, o, a, i],
                                          type: "AdCampaign",
                                          abstractKey: null,
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
                      type: "AdStudy",
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsExperimentsTestDetailsQuery",
          selections: [
            {
              condition: "skip",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
                  args: t,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [
                    r,
                    n,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "AdStudyCellsConnection",
                          kind: "LinkedField",
                          name: "cells",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "AdStudyCell",
                              kind: "LinkedField",
                              name: "nodes",
                              plural: !0,
                              selections: [
                                n,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "AdStudyCellAdEntitiesConnection",
                                  kind: "LinkedField",
                                  name: "ad_entities",
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
                                        r,
                                        n,
                                        {
                                          kind: "InlineFragment",
                                          selections: [o, a, i],
                                          type: "AdCampaign",
                                          abstractKey: null,
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
                      type: "AdStudy",
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          id: "9558522747582542",
          metadata: {},
          name: "AdsExperimentsTestDetailsQuery",
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
