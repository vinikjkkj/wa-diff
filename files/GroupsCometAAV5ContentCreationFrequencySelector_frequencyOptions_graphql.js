__d(
  "GroupsCometAAV5ContentCreationFrequencySelector_frequencyOptions.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometAAV5ContentCreationFrequencySelector_frequencyOptions",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "post_frequency_label",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "text",
                  storageKey: null,
                },
                action: "THROW",
                path: "post_frequency_label.text",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "post_frequency_label",
        },
        {
          alias: null,
          args: null,
          concreteType: "XFBAutomationAssistScheduleFrequencyOption",
          kind: "LinkedField",
          name: "frequency_options",
          plural: !0,
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "label",
                storageKey: null,
              },
              action: "THROW",
              path: "frequency_options.label",
            },
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "frequency",
                storageKey: null,
              },
              action: "THROW",
              path: "frequency_options.frequency",
            },
          ],
          storageKey: null,
        },
      ],
      type: "XFBAutomationAssistContentCreationRenderer",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
