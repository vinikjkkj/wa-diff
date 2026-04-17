__d(
  "PageWhatsAppNumberCometRenderer_entity.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { mask: !1 },
      name: "PageWhatsAppNumberCometRenderer_entity",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "deep_link_number",
              storageKey: null,
            },
          ],
          type: "PageWhatsAppNumber",
          abstractKey: null,
        },
      ],
      type: "Entity",
      abstractKey: "__isEntity",
    };
    a.exports = e;
  },
  null,
);
