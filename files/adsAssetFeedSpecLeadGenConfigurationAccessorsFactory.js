__d(
  "adsAssetFeedSpecLeadGenConfigurationAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          verification_type: n.basicFieldAccessorFactory(
            e,
            t,
            "verification_type",
          ),
          offsite_verification_type: n.basicFieldAccessorFactory(
            e,
            t,
            "offsite_verification_type",
          ),
          is_work_email_enforcement_enabled: n.basicFieldAccessorFactory(
            e,
            t,
            "is_work_email_enforcement_enabled",
          ),
          is_form_qa_enabled: n.basicFieldAccessorFactory(
            e,
            t,
            "is_form_qa_enabled",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
