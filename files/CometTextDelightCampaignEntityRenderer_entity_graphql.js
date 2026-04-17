__d(
  "CometTextDelightCampaignEntityRenderer_entity.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        t = [{ kind: "Literal", name: "delight_surface", value: "COMMENT" }];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: { mask: !1 },
        name: "CometTextDelightCampaignEntityRenderer_entity",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "TextDelightCampaign",
            kind: "LinkedField",
            name: "campaign",
            plural: !1,
            selections: [
              e,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
              {
                alias: null,
                args: t,
                concreteType: "TextDelightStylePair",
                kind: "LinkedField",
                name: "delight_styles",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "style",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "value",
                    storageKey: null,
                  },
                ],
                storageKey: 'delight_styles(delight_surface:"COMMENT")',
              },
              {
                alias: null,
                args: t,
                concreteType: "DelightsAnimation",
                kind: "LinkedField",
                name: "delight_asset",
                plural: !1,
                selections: [e],
                storageKey: 'delight_asset(delight_surface:"COMMENT")',
              },
            ],
            storageKey: null,
          },
        ],
        type: "DelightAtRange",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
