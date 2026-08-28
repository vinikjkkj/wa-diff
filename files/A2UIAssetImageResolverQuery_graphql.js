__d(
  "A2UIAssetImageResolverQuery.graphql",
  ["A2UIAssetImageResolverQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "ASAAssetImageResult",
            kind: "LinkedField",
            name: "asa_asset_images",
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
                name: "image_url",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "A2UIAssetImageResolverQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "A2UIAssetImageResolverQuery",
          selections: t,
        },
        params: {
          id: n("A2UIAssetImageResolverQuery_facebookRelayOperation"),
          metadata: {},
          name: "A2UIAssetImageResolverQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
