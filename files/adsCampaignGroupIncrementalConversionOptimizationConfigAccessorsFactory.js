__d(
  "adsCampaignGroupIncrementalConversionOptimizationConfigAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          ad_study_id: n.basicFieldAccessorFactory(e, t, "ad_study_id"),
          ad_study_name: n.basicFieldAccessorFactory(e, t, "ad_study_name"),
          ad_study_start_time: n.basicFieldAccessorFactory(
            e,
            t,
            "ad_study_start_time",
          ),
          ad_study_end_time: n.basicFieldAccessorFactory(
            e,
            t,
            "ad_study_end_time",
          ),
          cell_id: n.basicFieldAccessorFactory(e, t, "cell_id"),
          cell_name: n.basicFieldAccessorFactory(e, t, "cell_name"),
          holdout_size: n.basicFieldAccessorFactory(e, t, "holdout_size"),
          objectives: n.basicListFieldAccessorFactory(e, t, "objectives"),
          action_type: n.basicFieldAccessorFactory(e, t, "action_type"),
          ico_type: n.basicFieldAccessorFactory(e, t, "ico_type"),
        },
      );
    }
    l.default = e;
  },
  98,
);
