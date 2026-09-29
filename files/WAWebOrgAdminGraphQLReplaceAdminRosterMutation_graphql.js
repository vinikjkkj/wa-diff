__d(
  "WAWebOrgAdminGraphQLReplaceAdminRosterMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        n = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "XWAOrgAdminRosterReplacePayload",
            kind: "LinkedField",
            name: "xwa_org_admin_roster_replace",
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
                kind: "ScalarField",
                name: "invalid_row_number",
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
                  t,
                  {
                    alias: null,
                    args: null,
                    concreteType: "XWAOrgAdminRoster",
                    kind: "LinkedField",
                    name: "admin_roster",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_truncated",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "total_count",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "XWAOrgAdminRosterEntry",
                        kind: "LinkedField",
                        name: "entries",
                        plural: !0,
                        selections: [
                          t,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "name",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "member_tag",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "email_address",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "phone_number",
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
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebOrgAdminGraphQLReplaceAdminRosterMutation",
          selections: n,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebOrgAdminGraphQLReplaceAdminRosterMutation",
          selections: n,
        },
        params: {
          id: "38389150840730215",
          metadata: {},
          name: "WAWebOrgAdminGraphQLReplaceAdminRosterMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
