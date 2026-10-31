__d(
  "WAWebOrgAdminGraphQLInviteMembersMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "orgID" },
        t = { defaultValue: null, kind: "LocalArgument", name: "resend" },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "rosterEntryIDs",
        },
        r = [
          {
            alias: null,
            args: [
              { kind: "Literal", name: "emails", value: [] },
              { kind: "Variable", name: "org_id", variableName: "orgID" },
              { kind: "Variable", name: "resend", variableName: "resend" },
              {
                kind: "Variable",
                name: "roster_entry_ids",
                variableName: "rosterEntryIDs",
              },
            ],
            concreteType: "XWAOrgStatusResponse",
            kind: "LinkedField",
            name: "xwa_org_invite_members",
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
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, n],
          kind: "Fragment",
          metadata: null,
          name: "WAWebOrgAdminGraphQLInviteMembersMutation",
          selections: r,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, n, t],
          kind: "Operation",
          name: "WAWebOrgAdminGraphQLInviteMembersMutation",
          selections: r,
        },
        params: {
          id: "28461077290259979",
          metadata: {},
          name: "WAWebOrgAdminGraphQLInviteMembersMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
