__d(
  "MAIBAMidChatPrompts_fragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MAIBAMidChatPrompts_fragment",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "bot_response_id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "XFBMAIBAFollowUpPrompt",
          kind: "LinkedField",
          name: "follow_up_prompts",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "text",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "type",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "streaming_state",
          storageKey: null,
        },
      ],
      type: "XFBMAIBAMessage",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
