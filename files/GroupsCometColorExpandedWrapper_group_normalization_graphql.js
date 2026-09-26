__d(
  "GroupsCometColorExpandedWrapper_group$normalization.graphql",
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
        kind: "SplitOperation",
        metadata: {},
        name: "GroupsCometColorExpandedWrapper_group$normalization",
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
      };
    })();
    a.exports = e;
  },
  null,
);
