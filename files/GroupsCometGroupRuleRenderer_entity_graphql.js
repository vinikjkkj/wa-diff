__d(
  "GroupsCometGroupRuleRenderer_entity.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { mask: !1 },
      name: "GroupsCometGroupRuleRenderer_entity",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        {
          alias: null,
          args: [{ kind: "Literal", name: "site", value: "comet" }],
          kind: "ScalarField",
          name: "url",
          storageKey: 'url(site:"comet")',
        },
      ],
      type: "Entity",
      abstractKey: "__isEntity",
    };
    a.exports = e;
  },
  null,
);
