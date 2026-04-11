__d(
  "WAWebMexFetchAboutStatusJobQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "user" }],
        t = [
          { kind: "Literal", name: "updates", value: ["STATUS"] },
          {
            items: [
              { kind: "Variable", name: "users.0", variableName: "user" },
            ],
            kind: "ListValue",
            name: "users",
          },
        ],
        n = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "text",
              storageKey: null,
            },
          ],
          type: "XWA2UserStatusUpdate",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexFetchAboutStatusJobQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XWA2UserUpdate",
              kind: "LinkedField",
              name: "xwa2_users_updates_since",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "updates",
                  plural: !0,
                  selections: [n],
                  storageKey: null,
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
          name: "WAWebMexFetchAboutStatusJobQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XWA2UserUpdate",
              kind: "LinkedField",
              name: "xwa2_users_updates_since",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "updates",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                    n,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "24535500086059408",
          metadata: {},
          name: "WAWebMexFetchAboutStatusJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
