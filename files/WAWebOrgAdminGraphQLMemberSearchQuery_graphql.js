__d(
  "WAWebOrgAdminGraphQLMemberSearchQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "after" },
        t = { defaultValue: null, kind: "LocalArgument", name: "first" },
        n = { defaultValue: null, kind: "LocalArgument", name: "memberTag" },
        r = { defaultValue: null, kind: "LocalArgument", name: "orgID" },
        o = { defaultValue: null, kind: "LocalArgument", name: "query" },
        a = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "after", variableName: "after" },
              { kind: "Variable", name: "first", variableName: "first" },
              {
                kind: "Variable",
                name: "member_tag",
                variableName: "memberTag",
              },
              { kind: "Variable", name: "org_id", variableName: "orgID" },
              { kind: "Variable", name: "query", variableName: "query" },
            ],
            concreteType: "XWAOrgMemberSearchConnection",
            kind: "LinkedField",
            name: "xwa_org_member_search",
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
                    name: "end_cursor",
                    storageKey: null,
                  },
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
                concreteType: "XWAOrgMemberSearchResult",
                kind: "LinkedField",
                name: "nodes",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "XWAOrgMember",
                    kind: "LinkedField",
                    name: "member",
                    plural: !1,
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
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r, o],
          kind: "Fragment",
          metadata: null,
          name: "WAWebOrgAdminGraphQLMemberSearchQuery",
          selections: a,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [r, o, n, t, e],
          kind: "Operation",
          name: "WAWebOrgAdminGraphQLMemberSearchQuery",
          selections: a,
        },
        params: {
          id: "28641250612201754",
          metadata: {},
          name: "WAWebOrgAdminGraphQLMemberSearchQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
