__d(
  "WAWebOrgAdminGraphQLAppendAdminRosterMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "XWAOrgAdminRosterAppendPayload",
            kind: "LinkedField",
            name: "xwa_org_admin_roster_append",
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
                kind: "ScalarField",
                name: "added_count",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "deduplicated_count",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "total_count",
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
          name: "WAWebOrgAdminGraphQLAppendAdminRosterMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebOrgAdminGraphQLAppendAdminRosterMutation",
          selections: t,
        },
        params: {
          id: "28096717049979269",
          metadata: {},
          name: "WAWebOrgAdminGraphQLAppendAdminRosterMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
