__d(
  "WAWebBizGetCustomUrlUserGraphqlQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        var e = [{ defaultValue: null, kind: "LocalArgument", name: "data" }],
          t = [
            {
              alias: null,
              args: [{ kind: "Variable", name: "data", variableName: "data" }],
              concreteType: "WAWebBizGetCustomUrlUserGraphqlQueryResponse",
              kind: "LinkedField",
              name: "xwa_custom_url_get_user",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "boolean",
                  kind: "ScalarField",
                  name: "success",
                  plural: !1,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "WAWebBizGetCustomUrlUser",
                  kind: "LinkedField",
                  name: "user",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "string",
                      name: "jid",
                      kind: "ScalarField",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "number",
                  kind: "ScalarField",
                  name: "error_code",
                  plural: !1,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "string",
                  kind: "ScalarField",
                  name: "error_text",
                  plural: !1,
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
            name: "WAWebBizGetCustomUrlUserGraphqlQuery",
            selections: t,
            type: "Query",
            abstractKey: null,
          },
          kind: "Request",
          operation: {
            argumentDefinitions: e,
            kind: "Operation",
            name: "WAWebBizGetCustomUrlUserGraphqlQuery",
            selections: t,
          },
          params: {
            id: "WAWebBizGetCustomUrlUserGraphqlQuery",
            metadata: {},
            name: "WAWebBizGetCustomUrlUserGraphqlQuery",
            operationKind: "query",
            text: null,
          },
        };
      })(),
      l = e;
    i.default = l;
  },
  66,
);
