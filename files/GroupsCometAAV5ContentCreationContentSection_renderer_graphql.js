__d(
  "GroupsCometAAV5ContentCreationContentSection_renderer.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometTextWithEntitiesRelay_textWithEntities",
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "GroupsCometAAV5ContentCreationContentSection_renderer",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "XFBAutomationAssistContentCreationRenderer",
            kind: "LinkedField",
            name: "if_not_can_use_composer",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "message_tip_label",
                plural: !1,
                selections: e,
                storageKey: null,
              },
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  concreteType: "TextWithEntities",
                  kind: "LinkedField",
                  name: "message_label",
                  plural: !1,
                  selections: e,
                  storageKey: null,
                },
                action: "THROW",
                path: "if_not_can_use_composer.message_label",
              },
            ],
            storageKey: null,
          },
        ],
        type: "XFBAutomationAssistContentCreationRenderer",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
