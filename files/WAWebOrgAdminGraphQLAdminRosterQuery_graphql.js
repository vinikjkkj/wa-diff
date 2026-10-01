__d(
  "WAWebOrgAdminGraphQLAdminRosterQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "orgID" }],
        t = [{ kind: "Variable", name: "org_id", variableName: "orgID" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "status",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "error_reason",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        a = {
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
                o,
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
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "member_lid",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebOrgAdminGraphQLAdminRosterQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XWAOrgGetResponse",
              kind: "LinkedField",
              name: "xwa_org_get",
              plural: !1,
              selections: [
                n,
                r,
                {
                  alias: null,
                  args: null,
                  concreteType: "XWAOrg",
                  kind: "LinkedField",
                  name: "org_info",
                  plural: !1,
                  selections: [a],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebOrgAdminGraphQLAdminRosterQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XWAOrgGetResponse",
              kind: "LinkedField",
              name: "xwa_org_get",
              plural: !1,
              selections: [
                n,
                r,
                {
                  alias: null,
                  args: null,
                  concreteType: "XWAOrg",
                  kind: "LinkedField",
                  name: "org_info",
                  plural: !1,
                  selections: [a, o],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "28588811080804291",
          metadata: {},
          name: "WAWebOrgAdminGraphQLAdminRosterQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
