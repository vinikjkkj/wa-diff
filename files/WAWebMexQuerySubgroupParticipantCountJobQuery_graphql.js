__d(
  "WAWebMexQuerySubgroupParticipantCountJobQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [{ kind: "Variable", name: "group_input", variableName: "input" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        r = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XWA2CommunitySubGroupsConnection",
              kind: "LinkedField",
              name: "sub_groups",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XWA2CommunitySubGroupEdge",
                  kind: "LinkedField",
                  name: "edges",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XWA2CommunitySubGroup",
                      kind: "LinkedField",
                      name: "node",
                      plural: !1,
                      selections: [
                        n,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "total_participants_count",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "XWA2CommunityGroup",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexQuerySubgroupParticipantCountJobQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "xwa2_group_query_by_id",
              plural: !1,
              selections: [r],
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
          name: "WAWebMexQuerySubgroupParticipantCountJobQuery",
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
                n,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "24079399904996141",
          metadata: {},
          name: "WAWebMexQuerySubgroupParticipantCountJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
