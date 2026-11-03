__d(
  "ProfileCometContextItem_contextItem.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          args: null,
          kind: "FragmentSpread",
          name: "ProfileCometAboutInfoDetails_title",
        },
      ];
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "ProfileCometContextItem_contextItem",
        selections: [
          {
            alias: null,
            args: [
              { kind: "Literal", name: "icon_color", value: "fds-black" },
              { kind: "Literal", name: "icon_size", value: "20" },
              { kind: "Literal", name: "icon_variant", value: "filled" },
              { kind: "Variable", name: "scale", variableName: "scale" },
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "icon",
            plural: !1,
            selections: [
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
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "plaintext_title",
            plural: !1,
            selections: e,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "subtitle",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "ProfileCometAboutInfoDetails_subtitle",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "target_type",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "title",
            plural: !1,
            selections: e,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "url",
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
