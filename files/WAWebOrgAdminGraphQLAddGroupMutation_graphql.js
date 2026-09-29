__d(
  "WAWebOrgAdminGraphQLAddGroupMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "gid" },
        t = { defaultValue: null, kind: "LocalArgument", name: "orgID" },
        n = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "gid", variableName: "gid" },
              { kind: "Variable", name: "org_id", variableName: "orgID" },
            ],
            concreteType: "XWAOrgManagedGroupResponse",
            kind: "LinkedField",
            name: "xwa_org_managed_group_add",
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
                name: "group",
                plural: !1,
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
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "WAWebOrgAdminGraphQLAddGroupMutation",
          selections: n,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "WAWebOrgAdminGraphQLAddGroupMutation",
          selections: n,
        },
        params: {
          id: "28671827069172109",
          metadata: {},
          name: "WAWebOrgAdminGraphQLAddGroupMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
