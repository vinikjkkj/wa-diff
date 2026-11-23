__d(
  "MAIBAPlatformUserMessageSelectedAssets_fragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MAIBAPlatformUserMessageSelectedAssets_fragment",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "MAIBAConversationSelectedAsset",
          kind: "LinkedField",
          name: "selected_assets",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "asset_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "asset_name",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "asset_type",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "MAIBAConversationNode",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
