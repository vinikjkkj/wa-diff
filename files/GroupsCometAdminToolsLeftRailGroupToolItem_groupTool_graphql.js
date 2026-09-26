__d(
  "GroupsCometAdminToolsLeftRailGroupToolItem_groupTool.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometAdminToolsLeftRailGroupToolItem_groupTool",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
          action: "THROW",
          path: "id",
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "Group",
            kind: "LinkedField",
            name: "group",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "GroupsCometAdminToolsLeftRailGroupItem_group",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "group",
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "QuickPromotion",
              kind: "LinkedField",
              name: "quick_promotion",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "useCometTooltipQP_quickPromotion",
                },
              ],
              storageKey: null,
            },
          ],
          type: "GroupToolWithCometSupport",
          abstractKey: "__isGroupToolWithCometSupport",
        },
      ],
      type: "GroupTool",
      abstractKey: "__isGroupTool",
    };
    a.exports = e;
  },
  null,
);
