__d(
  "WAWebOrgAdminGraphQLInviteMembersMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "orgID" },
          { defaultValue: null, kind: "LocalArgument", name: "rosterEntryIDs" },
        ],
        t = [
          {
            alias: null,
            args: [
              { kind: "Literal", name: "emails", value: [] },
              { kind: "Variable", name: "org_id", variableName: "orgID" },
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
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebOrgAdminGraphQLInviteMembersMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebOrgAdminGraphQLInviteMembersMutation",
          selections: t,
        },
        params: {
          id: "39921184154161445",
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
