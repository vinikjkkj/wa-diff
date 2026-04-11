__d(
  "WAWebMexGetPrivacyListsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [{ kind: "Variable", name: "input", variableName: "input" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "dhash",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "jid",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "pn_jid",
          storageKey: null,
        },
        a = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "username",
              storageKey: null,
            },
          ],
          type: "XWA2Username",
          abstractKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexGetPrivacyListsQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "xwa2_fetch_wa_users",
              plural: !0,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XWA2ContactListResponse",
                      kind: "LinkedField",
                      name: "privacy_contact_list",
                      plural: !1,
                      selections: [
                        n,
                        {
                          alias: null,
                          args: null,
                          concreteType: "XWA2ContactEntry",
                          kind: "LinkedField",
                          name: "contacts",
                          plural: !0,
                          selections: [
                            r,
                            o,
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "username_info",
                              plural: !1,
                              selections: [a],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
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
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebMexGetPrivacyListsQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "xwa2_fetch_wa_users",
              plural: !0,
              selections: [
                i,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XWA2ContactListResponse",
                      kind: "LinkedField",
                      name: "privacy_contact_list",
                      plural: !1,
                      selections: [
                        n,
                        {
                          alias: null,
                          args: null,
                          concreteType: "XWA2ContactEntry",
                          kind: "LinkedField",
                          name: "contacts",
                          plural: !0,
                          selections: [
                            r,
                            o,
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "username_info",
                              plural: !1,
                              selections: [i, a],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
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
          id: "26806428515612550",
          metadata: {},
          name: "WAWebMexGetPrivacyListsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
