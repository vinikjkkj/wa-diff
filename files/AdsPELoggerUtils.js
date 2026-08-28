__d(
  "AdsPELoggerUtils",
  [
    "AdsEmptyValue",
    "AdsMixedValue",
    "AdsUniformValue",
    "emptyFunction",
    "ifRequired",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [];
    function s(t) {
      var n = (t.campaignGroupIDs || e).length,
        r = (t.campaignIDs || e).length,
        o = (t.adgroupIDs || e).length;
      return {
        current_action_items_count: n + r + o,
        current_action_ads_count: o,
        current_action_campaigns_count: r,
        current_action_campaign_groups_count: n,
      };
    }
    function u(e, t) {
      switch (t) {
        case "INSIGHTS_DRAWER":
          return e ? "insights_drawer_opened" : "insights_drawer_closed";
      }
    }
    function c(e, t) {
      return t instanceof r("AdsEmptyValue") ||
        t instanceof r("AdsUniformValue") ||
        t instanceof r("AdsMixedValue")
        ? t.match({
            Empty: function () {},
            Uniform: r("emptyFunction").thatReturnsArgument,
            Mixed: r("emptyFunction").thatReturnsArgument,
          })
        : t;
    }
    function d() {
      var e = null;
      return (
        r("ifRequired")("AdsInterfacesRouter", function (t) {
          var n = t.getOrNull();
          n && (e = n.getGivenName());
        }),
        e
      );
    }
    ((l.getObjectCountsFromAction = s),
      (l.getEventNameFromSideTrayKey = u),
      (l.bulkValueTransformer = c),
      (l.getCurrentRouteName = d));
  },
  98,
);
