__d(
  "ConversationalSupport2FAChatExperienceQuery.graphql",
  ["ConversationalSupport2FAChatExperienceQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "request" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "request", variableName: "request" },
            ],
            concreteType: "ConversationalSupportInitAttemptResponse",
            kind: "LinkedField",
            name: "init_conversational_support_attempt_for_2fa",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_cometai_chat_available",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "attempt_token",
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
          name: "ConversationalSupport2FAChatExperienceQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "ConversationalSupport2FAChatExperienceQuery",
          selections: t,
        },
        params: {
          id: n(
            "ConversationalSupport2FAChatExperienceQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "ConversationalSupport2FAChatExperienceQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
