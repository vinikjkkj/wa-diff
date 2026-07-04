__d(
  "WAWebMexNewsletterQuestionResponseStateUpdateJobMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "newsletter_id",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "response_server_id",
        },
        n = { defaultValue: null, kind: "LocalArgument", name: "server_id" },
        r = { defaultValue: null, kind: "LocalArgument", name: "state" },
        o = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "newsletter_id",
                variableName: "newsletter_id",
              },
              {
                kind: "Variable",
                name: "response_server_id",
                variableName: "response_server_id",
              },
              {
                kind: "Variable",
                name: "server_id",
                variableName: "server_id",
              },
              { kind: "Variable", name: "state", variableName: "state" },
            ],
            concreteType: "XWA2NewsletterMutationResponse",
            kind: "LinkedField",
            name: "xwa2_newsletter_question_response_state_update",
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
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r],
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexNewsletterQuestionResponseStateUpdateJobMutation",
          selections: o,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, n, t, r],
          kind: "Operation",
          name: "WAWebMexNewsletterQuestionResponseStateUpdateJobMutation",
          selections: o,
        },
        params: {
          id: "24636260219323456",
          metadata: {},
          name: "WAWebMexNewsletterQuestionResponseStateUpdateJobMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
