__d(
  "MAIBAComposedTextV2Content_message.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MAIBAComposedTextV2Content_message",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "ComposedTextInstance",
          kind: "LinkedField",
          name: "composed_text_v2",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "useMAIBAComposedTextV2Nodes_composedText",
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
