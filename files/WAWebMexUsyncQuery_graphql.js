__d(
  "WAWebMexUsyncQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "include_about_status",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "include_country_code",
        },
        n = { defaultValue: null, kind: "LocalArgument", name: "include_orgs" },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "include_username",
        },
        o = { defaultValue: null, kind: "LocalArgument", name: "input" },
        a = [{ kind: "Variable", name: "input", variableName: "input" }],
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "jid",
          storageKey: null,
        },
        l = {
          condition: "include_country_code",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "country_code",
              storageKey: null,
            },
          ],
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        u = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "status",
              storageKey: null,
            },
          ],
          type: "XWA2ResponseStatus",
          abstractKey: null,
        },
        c = {
          condition: "include_orgs",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "orgs_info",
              plural: !1,
              selections: [
                s,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XWA2Org",
                      kind: "LinkedField",
                      name: "orgs",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "org_id",
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
                      ],
                      storageKey: null,
                    },
                  ],
                  type: "XWA2Orgs",
                  abstractKey: null,
                },
                u,
              ],
              storageKey: null,
            },
          ],
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "timestamp",
          storageKey: null,
        },
        m = {
          condition: "include_username",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "username_info",
              plural: !1,
              selections: [
                s,
                {
                  kind: "InlineFragment",
                  selections: [
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
                      name: "state",
                      storageKey: null,
                    },
                    d,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "pin",
                      storageKey: null,
                    },
                  ],
                  type: "XWA2Username",
                  abstractKey: null,
                },
                u,
              ],
              storageKey: null,
            },
          ],
        },
        p = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "text",
              storageKey: null,
            },
            d,
          ],
          type: "XWA2AboutStatus",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r, o],
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexUsyncQuery",
          selections: [
            {
              alias: null,
              args: a,
              concreteType: null,
              kind: "LinkedField",
              name: "xwa2_fetch_wa_users",
              plural: !0,
              selections: [
                i,
                l,
                c,
                m,
                {
                  condition: "include_about_status",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "about_status_info",
                      plural: !1,
                      selections: [p, u],
                      storageKey: null,
                    },
                  ],
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
          argumentDefinitions: [o, r, e, t, n],
          kind: "Operation",
          name: "WAWebMexUsyncQuery",
          selections: [
            {
              alias: null,
              args: a,
              concreteType: null,
              kind: "LinkedField",
              name: "xwa2_fetch_wa_users",
              plural: !0,
              selections: [
                s,
                i,
                l,
                c,
                m,
                {
                  condition: "include_about_status",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "about_status_info",
                      plural: !1,
                      selections: [s, p, u],
                      storageKey: null,
                    },
                  ],
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "id",
                      storageKey: null,
                    },
                  ],
                  type: "XWA2User",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "28496738596651319",
          metadata: {},
          name: "WAWebMexUsyncQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
