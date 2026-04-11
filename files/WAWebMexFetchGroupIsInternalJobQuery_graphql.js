__d(
  "WAWebMexFetchGroupIsInternalJobQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "id" }],
        t = [
          {
            fields: [
              { kind: "Variable", name: "group_id", variableName: "id" },
              { kind: "Literal", name: "query_context", value: "INTERACTIVE" },
            ],
            kind: "ObjectValue",
            name: "group_input",
          },
        ],
        n = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "internal",
            storageKey: null,
          },
        ],
        r = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XWA2CommunityProperties",
              kind: "LinkedField",
              name: "properties",
              plural: !1,
              selections: n,
              storageKey: null,
            },
          ],
          type: "XWA2CommunityGroup",
          abstractKey: null,
        },
        o = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XWA2CommunityDefaultSubGroupProperties",
              kind: "LinkedField",
              name: "properties",
              plural: !1,
              selections: n,
              storageKey: null,
            },
          ],
          type: "XWA2CommunityDefaultSubGroup",
          abstractKey: null,
        },
        a = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XWA2CommunitySubGroupProperties",
              kind: "LinkedField",
              name: "properties",
              plural: !1,
              selections: n,
              storageKey: null,
            },
          ],
          type: "XWA2CommunitySubGroup",
          abstractKey: null,
        },
        i = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XWA2GroupRegularGroupProperties",
              kind: "LinkedField",
              name: "properties",
              plural: !1,
              selections: n,
              storageKey: null,
            },
          ],
          type: "XWA2GroupRegularGroup",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexFetchGroupIsInternalJobQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "xwa2_group_query_by_id",
              plural: !1,
              selections: [r, o, a, i],
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
          name: "WAWebMexFetchGroupIsInternalJobQuery",
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
                r,
                o,
                a,
                i,
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
          id: "34119218944390847",
          metadata: {},
          name: "WAWebMexFetchGroupIsInternalJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
