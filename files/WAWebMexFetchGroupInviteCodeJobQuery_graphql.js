__d(
  "WAWebMexFetchGroupInviteCodeJobQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "id" },
          { defaultValue: null, kind: "LocalArgument", name: "query_context" },
        ],
        t = [
          {
            fields: [
              { kind: "Variable", name: "group_id", variableName: "id" },
              {
                kind: "Variable",
                name: "query_context",
                variableName: "query_context",
              },
            ],
            kind: "ObjectValue",
            name: "group_input",
          },
        ],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "invite_code",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexFetchGroupInviteCodeJobQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "xwa2_group_query_by_id",
              plural: !1,
              selections: [n],
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
          name: "WAWebMexFetchGroupInviteCodeJobQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "xwa2_group_query_by_id",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                n,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "29247029834912157",
          metadata: {},
          name: "WAWebMexFetchGroupInviteCodeJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
