__d(
  "WAWebOrgAdminGraphQLOrgsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "XWAOrgListResponse",
          kind: "LinkedField",
          name: "xwa_org_list",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XWAOrg",
              kind: "LinkedField",
              name: "orgs",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "description",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [{ kind: "Literal", name: "size", value: "SMALL" }],
                  concreteType: "XWAOrgIcon",
                  kind: "LinkedField",
                  name: "icon",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "uri",
                      storageKey: null,
                    },
                  ],
                  storageKey: 'icon(size:"SMALL")',
                },
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
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "member_tag_options",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_member_directory_enabled",
                  storageKey: null,
                },
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
                  name: "viewer_role",
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
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebOrgAdminGraphQLOrgsQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebOrgAdminGraphQLOrgsQuery",
          selections: e,
        },
        params: {
          id: "28450688771254327",
          metadata: {},
          name: "WAWebOrgAdminGraphQLOrgsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
