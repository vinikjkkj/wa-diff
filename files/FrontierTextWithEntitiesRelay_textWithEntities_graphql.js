__d(
  "FrontierTextWithEntitiesRelay_textWithEntities.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "length",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "offset",
          storageKey: null,
        };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "FrontierTextWithEntitiesRelay_textWithEntities",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "EntityAtRange",
            kind: "LinkedField",
            name: "ranges",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "entity",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "__typename",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: [{ kind: "Literal", name: "site", value: "comet" }],
                    kind: "ScalarField",
                    name: "url",
                    storageKey: 'url(site:"comet")',
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "entity_is_weak_reference",
                storageKey: null,
              },
              e,
              t,
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "InlineStyleAtRange",
            kind: "LinkedField",
            name: "inline_style_ranges",
            plural: !0,
            selections: [
              e,
              t,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "inline_style",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "ColorAtRange",
            kind: "LinkedField",
            name: "color_ranges",
            plural: !0,
            selections: [
              e,
              t,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "hex_rgb_color_with_pound_key",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "TextWithEntities",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
