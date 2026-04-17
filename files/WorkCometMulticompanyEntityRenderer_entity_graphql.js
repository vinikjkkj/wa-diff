__d(
  "WorkCometMulticompanyEntityRenderer_entity.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        concreteType: "WorkForeignEntityInfo",
        kind: "LinkedField",
        name: "work_foreign_entity_info",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "type",
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: { mask: !1 },
        name: "WorkCometMulticompanyEntityRenderer_entity",
        selections: [
          {
            kind: "InlineFragment",
            selections: [e],
            type: "User",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              e,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_multi_company_group",
                storageKey: null,
              },
            ],
            type: "Group",
            abstractKey: null,
          },
        ],
        type: "Entity",
        abstractKey: "__isEntity",
      };
    })();
    a.exports = e;
  },
  null,
);
