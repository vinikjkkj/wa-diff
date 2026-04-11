__d(
  "WAWebMexFetchNewsletterFollowersJobQuery.graphql",
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
          name: "id",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "display_name",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "pn",
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
          name: "follow_time",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "role",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexFetchNewsletterFollowersJobQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XWA2NewsletterFollowersResponse",
              kind: "LinkedField",
              name: "xwa2_newsletter_followers",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XWA2NewsletterFollowerConnection",
                  kind: "LinkedField",
                  name: "followers",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XWA2NewsletterFollowerEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "XWA2User",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            n,
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
                        i,
                        l,
                      ],
                      storageKey: null,
                    },
                  ],
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
          name: "WAWebMexFetchNewsletterFollowersJobQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XWA2NewsletterFollowersResponse",
              kind: "LinkedField",
              name: "xwa2_newsletter_followers",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XWA2NewsletterFollowerConnection",
                  kind: "LinkedField",
                  name: "followers",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XWA2NewsletterFollowerEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "XWA2User",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            n,
                            r,
                            o,
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "username_info",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "__typename",
                                  storageKey: null,
                                },
                                a,
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        i,
                        l,
                      ],
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
          id: "25895136756785869",
          metadata: {},
          name: "WAWebMexFetchNewsletterFollowersJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
