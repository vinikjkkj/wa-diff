__d(
  "CometAIHTSIGAccountSearchDataSourceQuery.graphql",
  ["CometAIHTSIGAccountSearchDataSourceQuery_instagramRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "limit" },
          { defaultValue: null, kind: "LocalArgument", name: "search_query" },
        ],
        t = [
          { kind: "Variable", name: "limit", variableName: "limit" },
          {
            kind: "Variable",
            name: "search_query",
            variableName: "search_query",
          },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "fbid_v2",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "username",
          storageKey: null,
        },
        a = {
          alias: null,
          args: [{ kind: "Literal", name: "size", value: 48 }],
          kind: "ScalarField",
          name: "profile_image_uri",
          storageKey: "profile_image_uri(size:48)",
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "CometAIHTSIGAccountSearchDataSourceQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "User",
              kind: "LinkedField",
              name: "xig_search_users",
              plural: !0,
              selections: [r, o, a],
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
          name: "CometAIHTSIGAccountSearchDataSourceQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "User",
              kind: "LinkedField",
              name: "xig_search_users",
              plural: !0,
              selections: [
                r,
                o,
                a,
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
          id: n(
            "CometAIHTSIGAccountSearchDataSourceQuery_instagramRelayOperation",
          ),
          metadata: {},
          name: "CometAIHTSIGAccountSearchDataSourceQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
