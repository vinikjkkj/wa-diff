__d(
  "CometAdPrefsWAIST30DialogFrame_advertiserData.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometAdPrefsWAIST30DialogFrame_advertiserData",
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
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "advertiser_id",
            storageKey: null,
          },
          action: "THROW",
        },
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
          name: "profile_picture_url",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAIST30DialogContent_advertiserData",
        },
      ],
      type: "WAISTAdvertiserInfo",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
