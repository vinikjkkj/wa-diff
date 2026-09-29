__d(
  "WAWebOrgAdminGraphQLSetMemberRoleMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "XWAOrgSetMemberRolePayload",
            kind: "LinkedField",
            name: "xwa_org_member_set_role",
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
                concreteType: "XWAOrg",
                kind: "LinkedField",
                name: "org",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "member_count",
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
          name: "WAWebOrgAdminGraphQLSetMemberRoleMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebOrgAdminGraphQLSetMemberRoleMutation",
          selections: t,
        },
        params: {
          id: "28470063769311553",
          metadata: {},
          name: "WAWebOrgAdminGraphQLSetMemberRoleMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
