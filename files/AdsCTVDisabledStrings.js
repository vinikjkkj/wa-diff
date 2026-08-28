__d(
  "AdsCTVDisabledStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "Dynamic creative isn't available for TV campaigns.");
    }
    function u() {
      return s._(
        /*BTDS*/ "Cost per result goal isn't available for TV campaigns.",
      );
    }
    function c() {
      return s._(
        /*BTDS*/ "This performance goal isn't available for TV campaigns.",
      );
    }
    function d() {
      return s._(
        /*BTDS*/ "Custom attribution model is not available for TV campaigns.",
      );
    }
    function m() {
      return s._(
        /*BTDS*/ "All conversions is the only conversion count setting available for TV campaigns.",
      );
    }
    function p() {
      return s._(
        /*BTDS*/ "Standard is the only delivery type available for TV campaigns.",
      );
    }
    function _() {
      return s._(
        /*BTDS*/ "Highest volume is the only campaign bid strategy available for TV campaigns.",
      );
    }
    function f() {
      return s._(
        /*BTDS*/ "United States is the only location available for TV campaigns.",
      );
    }
    function g() {
      return s._(/*BTDS*/ "Not applicable for TV campaigns");
    }
    function h() {
      return s._(
        /*BTDS*/ "Auction is the only buying type available for TV campaigns.",
      );
    }
    function y() {
      return s._(/*BTDS*/ "TV is not available due to upstream selections.");
    }
    function C() {
      return s._(
        /*BTDS*/ "The social issues, elections or politics category isn't available for TV campaigns.",
      );
    }
    var b = {
      buying_type: function () {
        return s._(
          /*BTDS*/ "This device is unavailable for campaigns using a buying type other than auction.",
        );
      },
      bid_strategy: function () {
        return s._(
          /*BTDS*/ "This device is unavailable for campaigns using a bid strategy other than Highest volume.",
        );
      },
      siep_special_ad_category: function () {
        return s._(
          /*BTDS*/ "This device is unavailable for campaigns related to social issues, elections or politics Special Ad Category.",
        );
      },
      conversion_location: function () {
        return s._(
          /*BTDS*/ "This device is unavailable for ad sets using a conversion location other than website or app.",
        );
      },
      performance_goal: function () {
        return s._(
          /*BTDS*/ "This device is unavailable for ad sets using a performance goal other than Maximize number of conversions or Maximize value of conversions.",
        );
      },
      performance_goal_awareness: function () {
        return s._(
          /*BTDS*/ "This device is unavailable for ad sets using a performance goal other than Maximize reach of ads.",
        );
      },
      advantage_catalog: function () {
        return s._(
          /*BTDS*/ "This device is unavailable for campaigns using Advantage+ catalog ads.",
        );
      },
      ab_test: function () {
        return s._(
          /*BTDS*/ "This device is unavailable for campaigns using A\/B Testing.",
        );
      },
      target_frequency: function () {
        return s._(
          /*BTDS*/ "This device is unavailable for ad sets using target frequency. Frequency capping is supported.",
        );
      },
      delivery_type: function () {
        return s._(
          /*BTDS*/ "This device is unavailable for ad sets using accelerated delivery.",
        );
      },
      attribution_model: function () {
        return s._(
          /*BTDS*/ "This device is unavailable for ad sets using an attribution model other than Standard or Incremental.",
        );
      },
      attribution_window: function () {
        return s._(
          /*BTDS*/ "This device is unavailable for ad sets using click-through-only attribution.",
        );
      },
      attribution_count_type: function () {
        return s._(
          /*BTDS*/ "This device is unavailable for ad sets using First conversion counting.",
        );
      },
      audience_segment_reporting: function () {
        return s._(
          /*BTDS*/ "This device is unavailable for campaigns using audience segment reporting.",
        );
      },
      cost_per_result: function () {
        return s._(
          /*BTDS*/ "This device is unavailable for ad sets using a cost per result goal.",
        );
      },
      value_rules: function () {
        return s._(
          /*BTDS*/ "This device is unavailable for campaigns using conversion value rules.",
        );
      },
    };
    function v(e) {
      return b[e]();
    }
    ((l.getDynamicCreativeDisabledForCTVTooltip = e),
      (l.getCostPerResultGoalDisabledForCTVTooltip = u),
      (l.getPerformanceGoalDisabledForCTVTooltip = c),
      (l.getAttributionModelDisabledForCTVTooltip = d),
      (l.getConversionsCountDisabledForCTVTooltip = m),
      (l.getDeliveryTypeDisabledForCTVTooltip = p),
      (l.getBidStrategyDisabledForCTVTooltip = _),
      (l.getLocationsDisabledForCTVTooltip = f),
      (l.getAccountControlsDisabledForCTVTooltip = g),
      (l.getBuyingTypeDisabledForCTVTooltip = h),
      (l.getCTVUpstreamSelectionsDisabledTooltip = y),
      (l.getSIEPCategoryDisabledForCTVTooltip = C),
      (l.getCTVUnavailableReasonTooltip = v));
  },
  226,
);
