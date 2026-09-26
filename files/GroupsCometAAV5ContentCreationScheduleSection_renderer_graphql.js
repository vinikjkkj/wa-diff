__d(
  "GroupsCometAAV5ContentCreationScheduleSection_renderer.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "frequency",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "timestamp",
          storageKey: null,
        },
        n = [
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
        name: "GroupsCometAAV5ContentCreationScheduleSection_renderer",
        selections: [
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              concreteType: "XFBAutomationAssistScheduleFrequencyOption",
              kind: "LinkedField",
              name: "frequency_options",
              plural: !0,
              selections: [
                {
                  kind: "RequiredField",
                  field: e,
                  action: "THROW",
                  path: "frequency_options.frequency",
                },
              ],
              storageKey: null,
            },
            action: "THROW",
            path: "frequency_options",
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              concreteType: "XFBAutomationAssistScheduleRecurrence",
              kind: "LinkedField",
              name: "recurrence",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "timezone",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "start_time_iso_8601",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            action: "THROW",
            path: "recurrence",
          },
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "start_time_read_only_text",
            plural: !1,
            selections: [
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
            args: null,
            concreteType: "XFBAutomationAssistScheduleFrequencyOption",
            kind: "LinkedField",
            name: "selected_frequency_option",
            plural: !1,
            selections: [
              e,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "label",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              concreteType: "FBDateTime",
              kind: "LinkedField",
              name: "min_datetime",
              plural: !1,
              selections: [
                {
                  kind: "RequiredField",
                  field: t,
                  action: "THROW",
                  path: "min_datetime.timestamp",
                },
              ],
              storageKey: null,
            },
            action: "THROW",
            path: "min_datetime",
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              concreteType: "FBDateTime",
              kind: "LinkedField",
              name: "max_datetime",
              plural: !1,
              selections: [
                {
                  kind: "RequiredField",
                  field: t,
                  action: "THROW",
                  path: "max_datetime.timestamp",
                },
              ],
              storageKey: null,
            },
            action: "THROW",
            path: "max_datetime",
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              concreteType: "TextWithEntities",
              kind: "LinkedField",
              name: "post_frequency_label",
              plural: !1,
              selections: n,
              storageKey: null,
            },
            action: "THROW",
            path: "post_frequency_label",
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              concreteType: "TextWithEntities",
              kind: "LinkedField",
              name: "date_label",
              plural: !1,
              selections: n,
              storageKey: null,
            },
            action: "THROW",
            path: "date_label",
          },
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "date_sublabel",
            plural: !1,
            selections: n,
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "GroupsCometAAV5ContentCreationInputSuggestionProtip_renderer",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "GroupsCometAAV5ContentCreationFrequencySelector_frequencyOptions",
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
