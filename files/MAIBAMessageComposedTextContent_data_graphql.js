__d(
  "MAIBAMessageComposedTextContent_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MAIBAMessageComposedTextContent_data",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "snippet",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "XFBMAIBAComposedBlockWithEntities",
          kind: "LinkedField",
          name: "composed_text",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "content",
              plural: !0,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBAComposedBlockWithEntitiesRelay_composedText",
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "XFBMAIBAMessageComposedTextContent",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
