__d(
  "WAWebOrgAdminGraphQLGroupQuery.graphql",
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
            name: "xwa_org_managed_group",
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
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "WAWebOrgAdminGraphQLGroupQuery",
          selections: n,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "WAWebOrgAdminGraphQLGroupQuery",
          selections: n,
        },
        params: {
          id: "26407716885592599",
          metadata: {},
          name: "WAWebOrgAdminGraphQLGroupQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
