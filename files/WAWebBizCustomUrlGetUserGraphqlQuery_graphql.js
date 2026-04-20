__d(
  "WAWebBizCustomUrlGetUserGraphqlQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "data" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "request", variableName: "data" }],
            concreteType: "XWACustomUrlGetUserResponse",
            kind: "LinkedField",
            name: "xwa_custom_url_get_user",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "lid",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error_code",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error_text",
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
          name: "WAWebBizCustomUrlGetUserGraphqlQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizCustomUrlGetUserGraphqlQuery",
          selections: t,
        },
        params: {
          id: "26867176859566677",
          metadata: {},
          name: "WAWebBizCustomUrlGetUserGraphqlQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
