__d(
  "GroupsCometHeaderJoinRestriction_group.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometTextWithEntitiesRelay_textWithEntities",
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "GroupsCometHeaderJoinRestriction_group",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "GroupJoinRestrictionReason",
            kind: "LinkedField",
            name: "join_restriction_reason",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "headline_text",
                plural: !1,
                selections: e,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "body_text",
                plural: !1,
                selections: e,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "Group",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
