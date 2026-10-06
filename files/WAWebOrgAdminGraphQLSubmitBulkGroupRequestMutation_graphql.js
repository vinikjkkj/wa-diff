__d(
  "WAWebOrgAdminGraphQLSubmitBulkGroupRequestMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "createGroupsPlan",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "operation" },
        n = { defaultValue: null, kind: "LocalArgument", name: "orgID" },
        r = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "create_groups_plan",
                variableName: "createGroupsPlan",
              },
              {
                kind: "Variable",
                name: "operation",
                variableName: "operation",
              },
              { kind: "Variable", name: "org_id", variableName: "orgID" },
            ],
            concreteType: "XWAOrgBulkGroupRequestSubmitPayload",
            kind: "LinkedField",
            name: "xwa_org_bulk_group_request_submit",
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
                name: "request_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "invalid_group_index",
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
          name: "WAWebOrgAdminGraphQLSubmitBulkGroupRequestMutation",
          selections: r,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [n, t, e],
          kind: "Operation",
          name: "WAWebOrgAdminGraphQLSubmitBulkGroupRequestMutation",
          selections: r,
        },
        params: {
          id: "27966707869675123",
          metadata: {},
          name: "WAWebOrgAdminGraphQLSubmitBulkGroupRequestMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
