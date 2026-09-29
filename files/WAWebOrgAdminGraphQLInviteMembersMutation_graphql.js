__d(
  "WAWebOrgAdminGraphQLInviteMembersMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "emails" },
        t = { defaultValue: null, kind: "LocalArgument", name: "orgID" },
        n = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "emails", variableName: "emails" },
              { kind: "Variable", name: "org_id", variableName: "orgID" },
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
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "WAWebOrgAdminGraphQLInviteMembersMutation",
          selections: n,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "WAWebOrgAdminGraphQLInviteMembersMutation",
          selections: n,
        },
        params: {
          id: "27941953275465289",
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
