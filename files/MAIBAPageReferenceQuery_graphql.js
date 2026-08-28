__d(
  "MAIBAPageReferenceQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "id" }],
        t = [{ kind: "Variable", name: "id", variableName: "id" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = {
          alias: "page_url",
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        a = {
          alias: "user_url",
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBAPageReferenceQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                n,
                {
                  kind: "InlineFragment",
                  selections: [r, o],
                  type: "Page",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [r, a],
                  type: "User",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAPageReferenceQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                n,
                r,
                {
                  kind: "InlineFragment",
                  selections: [o],
                  type: "Page",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [a],
                  type: "User",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "35683211234657248",
          metadata: {},
          name: "MAIBAPageReferenceQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
