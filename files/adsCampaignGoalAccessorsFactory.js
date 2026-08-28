__d(
  "adsCampaignGoalAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          type: n.basicFieldAccessorFactory(e, t, "type"),
          existing_customers_exclusions: n.basicListFieldAccessorFactory(
            e,
            t,
            "existing_customers_exclusions",
          ),
          engaged_audiences_exclusions: n.basicListFieldAccessorFactory(
            e,
            t,
            "engaged_audiences_exclusions",
          ),
          engaged_audiences_inclusions: n.basicListFieldAccessorFactory(
            e,
            t,
            "engaged_audiences_inclusions",
          ),
          existing_customers_inclusions: n.basicListFieldAccessorFactory(
            e,
            t,
            "existing_customers_inclusions",
          ),
          lookalike_inclusions: n.basicListFieldAccessorFactory(
            e,
            t,
            "lookalike_inclusions",
          ),
          existing_customers_audience_label_inclusions:
            n.basicListFieldAccessorFactory(
              e,
              t,
              "existing_customers_audience_label_inclusions",
            ),
          existing_customers_audience_label_exclusions:
            n.basicListFieldAccessorFactory(
              e,
              t,
              "existing_customers_audience_label_exclusions",
            ),
          engaged_audiences_audience_label_inclusions:
            n.basicListFieldAccessorFactory(
              e,
              t,
              "engaged_audiences_audience_label_inclusions",
            ),
          engaged_audiences_audience_label_exclusions:
            n.basicListFieldAccessorFactory(
              e,
              t,
              "engaged_audiences_audience_label_exclusions",
            ),
          is_ca_expansion_enabled: n.basicFieldAccessorFactory(
            e,
            t,
            "is_ca_expansion_enabled",
          ),
          existing_customers_auto_exclusion_retention_days:
            n.basicFieldAccessorFactory(
              e,
              t,
              "existing_customers_auto_exclusion_retention_days",
            ),
          existing_customers_exclusion_auto_selection_state:
            n.basicFieldAccessorFactory(
              e,
              t,
              "existing_customers_exclusion_auto_selection_state",
            ),
          is_lookalike_inclusion_enabled: n.basicFieldAccessorFactory(
            e,
            t,
            "is_lookalike_inclusion_enabled",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
