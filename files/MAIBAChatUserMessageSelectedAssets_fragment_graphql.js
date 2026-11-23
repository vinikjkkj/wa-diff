__d(
  "MAIBAChatUserMessageSelectedAssets_fragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MAIBAChatUserMessageSelectedAssets_fragment",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "XFBMAIBASelectedAsset",
          kind: "LinkedField",
          name: "selected_assets",
          plural: !0,
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "asset_id",
                storageKey: null,
              },
              action: "LOG",
            },
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "asset_name",
                storageKey: null,
              },
              action: "LOG",
            },
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "asset_type",
                storageKey: null,
              },
              action: "LOG",
            },
          ],
          storageKey: null,
        },
      ],
      type: "XFBMAIBAMessage",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
