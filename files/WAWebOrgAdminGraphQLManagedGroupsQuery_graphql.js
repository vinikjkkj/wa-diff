__d(
  "WAWebOrgAdminGraphQLManagedGroupsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "orgID" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "org_id", variableName: "orgID" }],
            concreteType: "XWAOrgManagedGroupListResponse",
            kind: "LinkedField",
            name: "xwa_org_managed_groups",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "status",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error_reason",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XWAOrgManagedGroup",
                kind: "LinkedField",
                name: "groups",
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
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebOrgAdminGraphQLManagedGroupsQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebOrgAdminGraphQLManagedGroupsQuery",
          selections: t,
        },
        params: {
          id: "38372552505692451",
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
