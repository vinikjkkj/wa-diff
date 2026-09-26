__d(
  "GroupsCometColorExpandedWrapper_group.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "hexcolor",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "GroupsCometColorExpandedWrapper_group",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "GroupThemeColor",
            kind: "LinkedField",
            name: "group_theme_color",
            plural: !1,
            selections: e,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "GroupThemeColor",
            kind: "LinkedField",
            name: "group_secondary_theme_color",
            plural: !1,
            selections: e,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "GroupThemeColor",
            kind: "LinkedField",
            name: "group_wash_theme_color",
            plural: !1,
            selections: e,
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
