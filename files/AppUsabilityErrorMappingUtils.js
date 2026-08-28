__d(
  "AppUsabilityErrorMappingUtils",
  [
    "errorCode",
    "AdsAPIAdgroupPaths",
    "AdsAPICampaignPaths",
    "AdsErrorsCTAStrings",
    "AdsStackedErrorsCardUtils",
    "CurrentBusinessUser",
    "URI",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e, u, c;
    function d() {
      var e = r("CurrentBusinessUser").business_id,
        t = new (c || (c = r("URI")))("/events_manager2/overview").setSubdomain(
          "business",
        );
      (e != null && t.addQueryData("business_id", e), c.goURIOnNewWindow(t));
    }
    function m() {
      var e = r("CurrentBusinessUser").business_id,
        t = new (c || (c = r("URI")))("/settings/apps").setSubdomain(
          "business",
        );
      (e != null && t.addQueryData("business_id", e), c.goURIOnNewWindow(t));
    }
    var p = r("immutable").Map([
        [
          1885074,
          {
            path: r("AdsAPICampaignPaths").TARGETING.DEVICE_PLATFORMS,
            cta: (u = r("AdsErrorsCTAStrings")).UPDATE_MOBILE_DEVICES,
          },
        ],
        [
          1487678,
          {
            path: r("AdsAPICampaignPaths").TARGETING.DEVICE_PLATFORMS,
            cta: u.UPDATE_PLACEMENTS,
          },
        ],
        [
          3285005,
          {
            path: [],
            customCTA: function () {
              d();
            },
            cta: u.GO_TO_EVENTS_MANAGER,
            customCTAType: (e = o("AdsStackedErrorsCardUtils"))
              .AdsErrorCustomCTAType.LINK,
          },
        ],
        [
          3955015,
          {
            path: [],
            customCTA: function () {
              d();
            },
            cta: u.GO_TO_EVENTS_MANAGER,
            customCTAType: e.AdsErrorCustomCTAType.LINK,
          },
        ],
        [
          1885583,
          {
            path: [],
            customCTA: function () {
              d();
            },
            cta: u.GO_TO_EVENTS_MANAGER,
            customCTAType: e.AdsErrorCustomCTAType.LINK,
          },
        ],
        [
          1487905,
          {
            path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
              .CALL_TO_ACTION.VALUE.APP_LINK,
            cta: u.UPDATE_DEFERRED_DEEP_LINK,
          },
        ],
        [
          2016045,
          {
            path: [],
            customCTA: function () {
              m();
            },
            cta: u.SET_UP_IN_BUSINESS_MANAGER,
            customCTAType: e.AdsErrorCustomCTAType.LINK,
          },
        ],
        [
          1885582,
          {
            path: [],
            customCTA: function () {
              m();
            },
            cta: u.SET_UP_IN_BUSINESS_MANAGER,
            customCTAType: e.AdsErrorCustomCTAType.LINK,
          },
        ],
      ]),
      _ = r("immutable").Map([
        [3285005, { path: r("AdsAPICampaignPaths").OPTIMIZATION_GOAL }],
        [
          1487905,
          {
            path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
              .CALL_TO_ACTION.VALUE.APP_LINK,
          },
        ],
      ]);
    ((l.APP_ADS_USABILITY_ERRORS = p),
      (l.APP_ADS_USABILITY_ERRORS_WITHOUT_USABILITY_GK = _));
  },
  98,
);
