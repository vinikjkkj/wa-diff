__d(
  "GroupsCometAdminToolsLeftRailOverviewItem_group.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometAdminToolsLeftRailOverviewItem_group",
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
          args: null,
          kind: "FragmentSpread",
          name: "GroupsCometAdminToolsLeftRailGroupItem_group",
        },
      ],
      type: "Group",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
