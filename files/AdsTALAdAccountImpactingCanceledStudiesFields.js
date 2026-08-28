__d(
  "AdsTALAdAccountImpactingCanceledStudiesFields",
  [],
  function (t, n, r, o, a, i) {
    var e = Object.freeze({
      fields: {
        fields: [
          "id",
          "name",
          "status",
          "sscl_question",
          "canceled_time",
          "creation_source",
          "created_time",
          "cooldown_start_time",
          "start_time",
          "end_time",
          "salt",
          "observation_end_time",
          "lightweight_type",
          "test_variable",
          "type",
          "cells{id,name,role,ad_ids,adaccount_ids,campaign_ids,adset_ids,treatment_percentage,control_percentage}",
          "updated_time",
          "creative_multicell_test_config",
        ],
        include_all_studies: !0,
        min_cooldown_start_time: 1509433200,
        limit: 25,
      },
    });
    i.default = e;
  },
  66,
);
