__d(
  "adsCreativeAppExperienceSpecAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          type: o("AdsAdObjectsAccessorUtils").basicFieldAccessorFactory(
            e,
            t,
            "type",
          ),
        },
      );
    }
    function s(t, n) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(t, n),
        {
          enroll_status: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory(t, n, "enroll_status"),
          action_metadata: e(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.action_metadata;
            },
            [].concat(n, ["action_metadata"]),
          ),
        },
      );
    }
    function u(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          selling_points: s(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.selling_points;
            },
            [].concat(t, ["selling_points"]),
          ),
        },
      );
    }
    function c(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          data_sources: o(
            "AdsAdObjectsAccessorUtils",
          ).basicListFieldAccessorFactory(e, t, "data_sources"),
        },
      );
    }
    function d(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          website_summary: u(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.website_summary;
            },
            [].concat(t, ["website_summary"]),
          ),
          details_to_ad_layout: c(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.details_to_ad_layout;
            },
            [].concat(t, ["details_to_ad_layout"]),
          ),
          reveal_details: c(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.reveal_details;
            },
            [].concat(t, ["reveal_details"]),
          ),
          show_spotlights: c(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.show_spotlights;
            },
            [].concat(t, ["show_spotlights"]),
          ),
        },
      );
    }
    l.default = d;
  },
  98,
);
