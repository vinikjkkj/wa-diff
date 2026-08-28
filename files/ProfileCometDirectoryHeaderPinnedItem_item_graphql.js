__d(
  "ProfileCometDirectoryHeaderPinnedItem_item.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { kind: "Variable", name: "scale", variableName: "scale" },
        t = [
          {
            args: null,
            kind: "FragmentSpread",
            name: "ProfileCometTileDirectoryIcon_image",
          },
        ];
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "ProfileCometDirectoryHeaderPinnedItem_item",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "profile_field_type",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "short_title",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "ProfileCometDirectoryTextWithEntities_textWithEntities",
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
            args: [
              e,
              { kind: "Literal", name: "size", value: "24" },
              { kind: "Literal", name: "variant", value: "filled" },
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "directory_icon",
            plural: !1,
            selections: t,
            storageKey: null,
          },
          {
            alias: null,
            args: [
              {
                kind: "Literal",
                name: "icon_color",
                value: "fds-primary-icon",
              },
              { kind: "Literal", name: "icon_size", value: "12" },
              { kind: "Literal", name: "icon_variant", value: "filled" },
              e,
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "icon",
            plural: !1,
            selections: t,
            storageKey: null,
          },
        ],
        type: "TimelineContextListItem",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
