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
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "timestamp",
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
                    s,
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
        d = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "text",
              storageKey: null,
            },
            s,
          ],
          type: "XWA2AboutStatus",
          abstractKey: null,
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
              selections: [
                a,
                i,
                c,
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
                      selections: [d, u],
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
                c,
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
                      selections: [l, d, u],
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
          id: "29829202653362039",
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
