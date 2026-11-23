__d(
  "CometAdPrefsWAISTDialogContent_targetingData.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "ad_id" },
      ],
      kind: "Fragment",
      metadata: { plural: !0 },
      name: "CometAdPrefsWAISTDialogContent_targetingData",
      selections: [
        {
          args: [{ kind: "Variable", name: "ad_id", variableName: "ad_id" }],
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTDataSection_targetingData",
        },
      ],
      type: "IWAISTUIType",
      abstractKey: "__isIWAISTUIType",
    };
    a.exports = e;
  },
  null,
);
