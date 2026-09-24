__d(
  "CometReelsFeedUnitStrategy_feedUnit.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometReelsFeedUnitStrategy_feedUnit",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null,
          },
          action: "THROW",
          path: "__typename",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "ReelsIFUHScroll_feedUnit",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "ReelsIFUHScroll_feedUnitConnection",
        },
      ],
      type: "ShowcaseFeedUnit",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
