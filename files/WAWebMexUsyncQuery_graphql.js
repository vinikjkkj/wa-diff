__d(
  "WAWebMexUsyncQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "include_country_code",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "include_orgs" },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "include_username",
        },
        r = { defaultValue: null, kind: "LocalArgument", name: "input" },
        o = [{ kind: "Variable", name: "input", variableName: "input" }],
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "jid",
          storageKey: null,
        },
        i = {
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
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        s = {
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
        u = {
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
                l,
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
                          name: "display_last_name",
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
                s,
              ],
              storageKey: null,
            },
          ],
        },
        c = {
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
                l,
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
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "timestamp",
                      storageKey: null,
                    },
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
                s,
              ],
              storageKey: null,
            },
          ],
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r],
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexUsyncQuery",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: null,
              kind: "LinkedField",
              name: "xwa2_fetch_wa_users",
              plural: !0,
              selections: [a, i, u, c],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [r, n, e, t],
          kind: "Operation",
          name: "WAWebMexUsyncQuery",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: null,
              kind: "LinkedField",
              name: "xwa2_fetch_wa_users",
              plural: !0,
              selections: [
                l,
                a,
                i,
                u,
                c,
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
          id: "28340427968970000",
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
