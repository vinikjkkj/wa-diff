__d(
  "AnomalyContentRecommendationsDataFragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "AnomalyContentRecommendationsDataFragment",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "XFBAnomalyExplanationsOutput",
          kind: "LinkedField",
          name: "anomaly_metric_explanations",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "name",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "XFBAnomalyExplanationsAttributedAdObjects",
              kind: "LinkedField",
              name: "attributed_ad_objects",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "ad_object_id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "AnomalyTopRootCauseContentAdObjectExplanationsFragment",
            },
          ],
          storageKey: null,
        },
      ],
      type: "XFBAdsInsightsAnomaliesAndExplanationsNode",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
