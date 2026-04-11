__d(
  "WAWebMexFetchNewsletterMessageReactionSenderListJobQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "XWA2NewsletterReactionSenderListResponse",
            kind: "LinkedField",
            name: "xwa2_newsletters_reaction_sender_list",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XWA2NewsletterReactionWithSenders",
                kind: "LinkedField",
                name: "reactions",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "reaction_code",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XWA2NewsletterSubscriberConnection",
                    kind: "LinkedField",
                    name: "sender_list",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "XWA2NewsletterSubscriberEdge",
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
                                name: "profile_pic_direct_path",
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
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexFetchNewsletterMessageReactionSenderListJobQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebMexFetchNewsletterMessageReactionSenderListJobQuery",
          selections: t,
        },
        params: {
          id: "29575462448733991",
          metadata: {},
          name: "WAWebMexFetchNewsletterMessageReactionSenderListJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
