__d(
  "WAWebOrgAdminGraphQLDirectoryPageQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "first" },
        t = { defaultValue: null, kind: "LocalArgument", name: "orgID" },
        n = [{ kind: "Variable", name: "org_id", variableName: "orgID" }],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "status",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "error_reason",
          storageKey: null,
        },
        a = {
          alias: null,
          args: [{ kind: "Variable", name: "first", variableName: "first" }],
          concreteType: "XWAOrgMembersConnection",
          kind: "LinkedField",
          name: "members",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "count",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "PageInfo",
              kind: "LinkedField",
              name: "page_info",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "has_next_page",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "XWAOrgMember",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "lid",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "display_name",
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
                  name: "role",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "username",
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
        };
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "WAWebOrgAdminGraphQLDirectoryPageQuery",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: "XWAOrgGetResponse",
              kind: "LinkedField",
              name: "xwa_org_get",
              plural: !1,
              selections: [
                r,
                o,
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
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "WAWebOrgAdminGraphQLDirectoryPageQuery",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: "XWAOrgGetResponse",
              kind: "LinkedField",
              name: "xwa_org_get",
              plural: !1,
              selections: [
                r,
                o,
                {
                  alias: null,
                  args: null,
                  concreteType: "XWAOrg",
                  kind: "LinkedField",
                  name: "org_info",
                  plural: !1,
                  selections: [
                    a,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "id",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "28428616673445598",
          metadata: {},
          name: "WAWebOrgAdminGraphQLDirectoryPageQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
