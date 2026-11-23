__d(
  "MAIBAChatMessageDebugActions_fragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MAIBAChatMessageDebugActions_fragment",
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
          kind: "ScalarField",
          name: "created_timestamp",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "MAIBAChatMessageDebugModal_fragment",
        },
      ],
      type: "XFBMAIBAMessage",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
