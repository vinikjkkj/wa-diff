__d(
  "CometAdPrefsWAISTInterestsRow_targetingData.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        kind: "RequiredField",
        field: {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        action: "THROW",
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometAdPrefsWAISTInterestsRow_targetingData",
        selections: [
          e,
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              concreteType: "TWAISTTargetingInterestData",
              kind: "LinkedField",
              name: "interests",
              plural: !0,
              selections: [
                e,
                {
                  kind: "RequiredField",
                  field: {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null,
                  },
                  action: "THROW",
                },
              ],
              storageKey: null,
            },
            action: "THROW",
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "serialized_data",
              storageKey: null,
            },
            action: "THROW",
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "manage_ad_topics_uri",
            storageKey: null,
          },
        ],
        type: "WAISTUIInterestsType",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
