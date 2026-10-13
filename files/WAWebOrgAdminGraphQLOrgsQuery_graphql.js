__d(
  "WAWebOrgAdminGraphQLOrgsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        t = [
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
                    alias: "icon_large",
                    args: [{ kind: "Literal", name: "size", value: "LARGE" }],
                    concreteType: "XWAOrgIcon",
                    kind: "LinkedField",
                    name: "icon",
                    plural: !1,
                    selections: [e],
                    storageKey: 'icon(size:"LARGE")',
                  },
                  {
                    alias: "icon_small",
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
                        name: "handle",
                        storageKey: null,
                      },
                      e,
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
                    ],
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
                    name: "org_member_updated_ts_usec",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "org_updated_ts_usec",
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
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebOrgAdminGraphQLOrgsQuery",
          selections: t,
        },
        params: {
          id: "28528010626842072",
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
