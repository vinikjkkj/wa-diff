__d(
  "WAWebOrgAdminGraphQLSendManagedGroupEmailInvitesMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "gid" },
        t = { defaultValue: null, kind: "LocalArgument", name: "orgID" },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "rosterEntryIDs",
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "status",
          storageKey: null,
        },
        o = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "gid", variableName: "gid" },
              { kind: "Variable", name: "org_id", variableName: "orgID" },
              {
                kind: "Variable",
                name: "roster_entry_ids",
                variableName: "rosterEntryIDs",
              },
            ],
            concreteType: "XWAOrgManagedGroupEmailInviteResponse",
            kind: "LinkedField",
            name: "xwa_org_managed_group_send_email_invites",
            plural: !1,
            selections: [
              r,
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
                concreteType: "XWAEmailInviteResult",
                kind: "LinkedField",
                name: "results",
                plural: !0,
                selections: [r],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, n],
          kind: "Fragment",
          metadata: null,
          name: "WAWebOrgAdminGraphQLSendManagedGroupEmailInvitesMutation",
          selections: o,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e, n],
          kind: "Operation",
          name: "WAWebOrgAdminGraphQLSendManagedGroupEmailInvitesMutation",
          selections: o,
        },
        params: {
          id: "38981821098132867",
          metadata: {},
          name: "WAWebOrgAdminGraphQLSendManagedGroupEmailInvitesMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
