__d(
  "CometFeedStoryTitleEntityRenderersRelay_entity.graphql",
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
        name: "CometFeedStoryTitleEntityRenderersRelay_entity",
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
                name: "category_type",
                storageKey: null,
              },
            ],
            type: "Page",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              e,
              {
                alias: null,
                args: null,
                concreteType: "WorkUserInfo",
                kind: "LinkedField",
                name: "work_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_active_account",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: [{ kind: "Literal", name: "surface", value: "FEED" }],
                kind: "ScalarField",
                name: "show_promode_badge",
                storageKey: 'show_promode_badge(surface:"FEED")',
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null,
              },
            ],
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
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "work_official_status",
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
