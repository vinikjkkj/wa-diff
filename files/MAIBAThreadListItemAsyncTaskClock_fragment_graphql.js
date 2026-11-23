__d(
  "MAIBAThreadListItemAsyncTaskClock_fragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MAIBAThreadListItemAsyncTaskClock_fragment",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "MAIBAAsyncTaskExecution",
          kind: "LinkedField",
          name: "async_task_execution",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "action_needed",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "MAIBAProactiveTaskOrigin",
          kind: "LinkedField",
          name: "proactive_task_origin",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "__typename",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "XFBMAIBAGenAICharmanderConversation",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
