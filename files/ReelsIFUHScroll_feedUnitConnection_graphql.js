__d(
  "ReelsIFUHScroll_feedUnitConnection.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ReelsIFUHScroll_feedUnitConnection",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          kind: "ClientExtension",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "TombstoneFeedUnit",
              kind: "LinkedField",
              name: "tombstone_feedunit",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_hidden_from_client",
                  storageKey: null,
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometFeedTombstoneFactory_tombstoneFeedUnit",
                },
              ],
              storageKey: null,
            },
          ],
        },
      ],
      type: "ShowcaseFeedUnit",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
