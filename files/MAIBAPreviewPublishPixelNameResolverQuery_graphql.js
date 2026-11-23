__d(
  "MAIBAPreviewPublishPixelNameResolverQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "ids" }],
        t = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null,
          },
        ],
        n = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "ids", variableName: "ids" }],
            concreteType: null,
            kind: "LinkedField",
            name: "nodes",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
              {
                kind: "InlineFragment",
                selections: t,
                type: "AdsPixel",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: t,
                type: "AdConversionPixel",
                abstractKey: null,
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
          name: "MAIBAPreviewPublishPixelNameResolverQuery",
          selections: n,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAPreviewPublishPixelNameResolverQuery",
          selections: n,
        },
        params: {
          id: "38977235585208359",
          metadata: {},
          name: "MAIBAPreviewPublishPixelNameResolverQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
