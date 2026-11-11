__d(
  "WAWebOrgAdminGraphQLLeaveMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "orgID" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "org_id", variableName: "orgID" }],
            concreteType: "XWAOrgStatusResponse",
            kind: "LinkedField",
            name: "xwa_org_leave",
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
          name: "WAWebOrgAdminGraphQLLeaveMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebOrgAdminGraphQLLeaveMutation",
          selections: t,
        },
        params: {
          id: "29001080236228055",
          metadata: {},
          name: "WAWebOrgAdminGraphQLLeaveMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
