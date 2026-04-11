__d(
  "WAWebGraphQLProductCatalogGetPublicKeyJobQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "request" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "request", variableName: "request" },
            ],
            concreteType: "XWAProductCatalogGetPublicKeyResponseSuccess",
            kind: "LinkedField",
            name: "xwa_product_catalog_get_public_key",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "public_key_certificate_pem",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XWAPublicKeyWithSignature",
                kind: "LinkedField",
                name: "public_key_with_signature",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "public_key_pem",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "public_key_signature",
                    storageKey: null,
                  },
                ],
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
          metadata: null,
          name: "WAWebGraphQLProductCatalogGetPublicKeyJobQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebGraphQLProductCatalogGetPublicKeyJobQuery",
          selections: t,
        },
        params: {
          id: "WAWebGraphQLProductCatalogGetPublicKeyJobQuery",
          metadata: {},
          name: "WAWebGraphQLProductCatalogGetPublicKeyJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    ((e.hash = "e072c0e33a10dd8a876a1c37c2ec40a5"), (a.exports = e));
  },
  null,
);
