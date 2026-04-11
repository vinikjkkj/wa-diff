__d(
  "WAWebMexFetchNewsletterPollVotersJobQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: "voter_list",
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "XWA2NewsletterPollVoterListResponse",
            kind: "LinkedField",
            name: "xwa2_newsletters_poll_voter_list",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XWA2NewsletterPollOptionWithVoters",
                kind: "LinkedField",
                name: "votes",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "vote_hash",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XWA2NewsletterSubscriberConnection",
                    kind: "LinkedField",
                    name: "voter_list",
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
                            kind: "ScalarField",
                            name: "action_time",
                            storageKey: null,
                          },
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
          name: "WAWebMexFetchNewsletterPollVotersJobQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebMexFetchNewsletterPollVotersJobQuery",
          selections: t,
        },
        params: {
          id: "9407762219322536",
          metadata: {},
          name: "WAWebMexFetchNewsletterPollVotersJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
