__d(
  "AdsExperimentsPortfolioOptimizerTestCompletedContainer_adgroups.graphql",
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
          { defaultValue: null, kind: "LocalArgument", name: "adgroupIDs" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "AdsExperimentsPortfolioOptimizerTestCompletedContainer_adgroups",
        selections: [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "ids", variableName: "adgroupIDs" },
            ],
            concreteType: null,
            kind: "LinkedField",
            name: "nodes",
            plural: !0,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  e,
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
