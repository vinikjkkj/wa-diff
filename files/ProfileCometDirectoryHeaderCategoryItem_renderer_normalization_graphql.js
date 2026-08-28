__d(
  "ProfileCometDirectoryHeaderCategoryItem_renderer$normalization.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { kind: "Variable", name: "scale", variableName: "scale" },
        t = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "height",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "mime_type",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "scale",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "width",
            storageKey: null,
          },
        ];
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "ProfileCometDirectoryHeaderCategoryItem_renderer$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "TimelineContextListItem",
            kind: "LinkedField",
            name: "context_item",
            plural: !1,
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
                    fragment: n(
                      "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql",
                    ),
                    kind: "FragmentSpread",
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
            storageKey: null,
          },
        ],
      };
    })();
    a.exports = e;
  },
  null,
);
