__d(
  "CometAdPrefsWAISTYouthDataSectionRow_targetingData.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometAdPrefsWAISTYouthDataSectionRow_targetingData",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "waist_ui_type",
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
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTYouthAgeRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTYouthLocationRow_targetingData",
        },
      ],
      type: "IWAISTUIType",
      abstractKey: "__isIWAISTUIType",
    };
    a.exports = e;
  },
  null,
);
