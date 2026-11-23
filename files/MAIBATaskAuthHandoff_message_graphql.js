__d(
  "MAIBATaskAuthHandoff_message.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MAIBATaskAuthHandoff_message",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "XFBToolCallObject",
          kind: "LinkedField",
          name: "tool_calls",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "tool_call_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "tool_name",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "tool_call_args",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "tool_result",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_completed",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "tool_status",
              storageKey: null,
            },
          ],
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
