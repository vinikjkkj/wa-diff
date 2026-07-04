__d(
  "WAWebMexNewsletterPinMessagesJobMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "input" },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "newsletter_id",
        },
        n = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "input", variableName: "input" },
              {
                kind: "Variable",
                name: "newsletter_id",
                variableName: "newsletter_id",
              },
            ],
            concreteType: "XWA2Newsletter",
            kind: "LinkedField",
            name: "xwa2_newsletter_pin_messages",
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
                concreteType: "XWA2NewsletterThreadMetadata",
                kind: "LinkedField",
                name: "thread_metadata",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "XWA2NewsletterPinnedMessage",
                    kind: "LinkedField",
                    name: "pinned_messages",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "message_id",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "expiry_ts",
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
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexNewsletterPinMessagesJobMutation",
          selections: n,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "WAWebMexNewsletterPinMessagesJobMutation",
          selections: n,
        },
        params: {
          id: "27165709459706559",
          metadata: {},
          name: "WAWebMexNewsletterPinMessagesJobMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
