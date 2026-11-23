__d(
  "CometAdPrefsWAIST30InternalRankBasedExplanationsRow_explanationsData.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometAdPrefsWAIST30InternalRankBasedExplanationsRow_explanationsData",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTDebugInfoRow_debugData",
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
          action: "THROW",
        },
        {
          alias: null,
          args: null,
          concreteType: "AggregatedTopicsFVTOutput",
          kind: "LinkedField",
          name: "aggregated_topics_explanations",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "app_topics_explanation",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "page_topics_explanation",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "website_topics_explanation",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "ad_topics_explanation",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "onsite_product_topics_explanation",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "offsite_product_topics_explanation",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "activity_summary_row",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "soap_disclaimer",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "WAISTUIInternalRankBasedExplanationsType",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
