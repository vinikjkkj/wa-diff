__d(
  "WAWebOrgAdminGraphQLManagedGroupsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "orgID" }],
        t = [{ kind: "Variable", name: "org_id", variableName: "orgID" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "status",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "error_reason",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          concreteType: "XWAOrgManagedGroupsConnection",
          kind: "LinkedField",
          name: "managed_groups",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XWAOrgManagedGroup",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "gid",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "subject",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "creation_timestamp_s",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "participant_count",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "roster_partial",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "XWAOrgManagedGroupParticipant",
                  kind: "LinkedField",
                  name: "participants",
                  plural: !0,
                  selections: [
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
                      name: "role",
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
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebOrgAdminGraphQLManagedGroupsQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XWAOrgGetResponse",
              kind: "LinkedField",
              name: "xwa_org_get",
              plural: !1,
              selections: [
                n,
                r,
                {
                  alias: null,
                  args: null,
                  concreteType: "XWAOrg",
                  kind: "LinkedField",
                  name: "org_info",
                  plural: !1,
                  selections: [o],
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
          name: "WAWebOrgAdminGraphQLManagedGroupsQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XWAOrgGetResponse",
              kind: "LinkedField",
              name: "xwa_org_get",
              plural: !1,
              selections: [
                n,
                r,
                {
                  alias: null,
                  args: null,
                  concreteType: "XWAOrg",
                  kind: "LinkedField",
                  name: "org_info",
                  plural: !1,
                  selections: [
                    o,
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
              storageKey: null,
            },
          ],
        },
        params: {
          id: "28885446151060025",
          metadata: {},
          name: "WAWebOrgAdminGraphQLManagedGroupsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
