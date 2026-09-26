__d(
  "GroupsCometAdminToolsLeftRailSimpleItemBody_simpleGroupToolWithCometSupport.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometAdminToolsLeftRailSimpleItemBody_simpleGroupToolWithCometSupport",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "badge_context",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometTextWithEntitiesRelay_textWithEntities",
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "text",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "description",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "description_circle_color",
          storageKey: null,
        },
      ],
      type: "SimpleGroupToolWithCometSupport",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
