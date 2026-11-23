__d(
  "CometAdPrefsWAIST30DataSection_targetingData.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "ad_id" },
      ],
      kind: "Fragment",
      metadata: { plural: !0 },
      name: "CometAdPrefsWAIST30DataSection_targetingData",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
          action: "THROW",
        },
        {
          args: [{ kind: "Variable", name: "ad_id", variableName: "ad_id" }],
          kind: "FragmentSpread",
          name: "CometAdPrefsWAIST30DataSectionRow_targetingData",
        },
      ],
      type: "IWAISTUIType",
      abstractKey: "__isIWAISTUIType",
    };
    a.exports = e;
  },
  null,
);
