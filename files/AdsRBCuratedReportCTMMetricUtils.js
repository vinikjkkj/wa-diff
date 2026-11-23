__d(
  "AdsRBCuratedReportCTMMetricUtils",
  [
    "ix",
    "AdsRBCuratedReportCTMAdCampaignOutcomesTimeComparison.react",
    "AdsRBCuratedReportCTMMetricUtils_rateCalculationItem.graphql",
    "AdsRBCuratedReportCTMStringUtils",
    "LocalDate",
    "RelayHooks",
    "intlNumUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = function (t) {
        return t.customLabel != null && t.customLabel.length > 0
          ? t.customLabel
          : t.label;
      },
      c = function (t) {
        return t.value;
      },
      d = function (t, n) {
        return t.find(function (e) {
          return e.metric === n;
        });
      },
      m = function (t, n) {
        return t.find(function (e) {
          return e.id === n;
        });
      },
      p = function (t) {
        return t.filter(function (e) {
          return e.visible;
        });
      },
      _ = {
        custom_conversion: s("824289"),
        impressions: s("508086"),
        link_click: s("538337"),
        onsite_conversion_messaging_welcome_message_view: s("491230"),
        onsite_conversion_messaging_conversation_started_7d: s("542885"),
        onsite_conversion_messaging_conversation_replied_7d: s("847547"),
        view_content: s("607152"),
        view_content_product_group: s("607152"),
        view_content_product: s("607152"),
        add_to_cart: s("549497"),
        initiate_checkout: s("688938"),
        purchase: s("697804"),
        onsite_conversion_messaging_user_conversation_depth_2_message_send:
          s("697804"),
        onsite_conversion_messaging_user_conversation_depth_3_message_send:
          s("697804"),
        onsite_conversion_messaging_user_conversation_depth_5_message_send:
          s("697804"),
        onsite_conversion_messaging_business_calling_opt_in_sent: s("558163"),
        onsite_conversion_messaging_business_calling_opt_in_accepted:
          s("558163"),
        onsite_conversion_messaging_business_calling_opt_in_denied: s("558163"),
        onsite_conversion_messaging_business_calling_call_initiated:
          s("725687"),
        onsite_conversion_messaging_business_calling_call_answered: s("157654"),
        onsite_conversion_messaging_business_calling_call_missed: s("170818"),
      },
      f = function (t) {
        var e;
        return (e = _[t]) != null ? e : _.custom_conversion;
      },
      g = function (t) {
        switch (t) {
          case "impressions":
            return o("AdsRBCuratedReportCTMStringUtils").AD_IMPRESSIONS_LABEL;
          case "link_click":
            return o("AdsRBCuratedReportCTMStringUtils").LINK_CLICKS_LABEL;
          case "onsite_conversion_messaging_welcome_message_view":
            return o("AdsRBCuratedReportCTMStringUtils")
              .MESSAGING_WELCOME_MESSAGE_VIEW_LABEL;
          case "onsite_conversion_messaging_conversation_started_7d":
            return o("AdsRBCuratedReportCTMStringUtils")
              .MESSAGING_CONVERSATIONS_STARTED_LABEL;
          case "onsite_conversion_messaging_conversation_replied_7d":
            return o("AdsRBCuratedReportCTMStringUtils")
              .MESSAGING_CONVERSATIONS_REPLIED_LABEL;
          case "view_content":
            return o("AdsRBCuratedReportCTMStringUtils").CONTENT_VIEW_LABEL;
          case "add_to_cart":
            return o("AdsRBCuratedReportCTMStringUtils").ADD_TO_CART_LABEL;
          case "initiate_checkout":
            return o("AdsRBCuratedReportCTMStringUtils")
              .CHECKOUTS_INITIATED_LABEL;
          case "purchase":
            return o("AdsRBCuratedReportCTMStringUtils").PURCHASES_LABEL;
          case "onsite_conversion_messaging_user_depth_2_message_send":
            return o("AdsRBCuratedReportCTMStringUtils")
              .TWO_MESSAGE_EXCHANGES_LABEL;
          case "onsite_conversion_messaging_user_depth_3_message_send":
            return o("AdsRBCuratedReportCTMStringUtils")
              .THREE_MESSAGE_EXCHANGES_LABEL;
          case "onsite_conversion_messaging_user_depth_5_message_send":
            return o("AdsRBCuratedReportCTMStringUtils")
              .FIVE_MESSAGE_EXCHANGES_LABEL;
          case "onsite_conversion_messaging_business_calling_opt_in_sent":
            return o("AdsRBCuratedReportCTMStringUtils")
              .BUSINESS_CALL_REQUESTS_SENT_LABEL;
          case "onsite_conversion_messaging_business_calling_opt_in_accepted":
            return o("AdsRBCuratedReportCTMStringUtils")
              .BUSINESS_CALL_REQUESTS_ACCEPTED_LABEL;
          case "onsite_conversion_messaging_business_calling_opt_in_denied":
            return o("AdsRBCuratedReportCTMStringUtils")
              .BUSINESS_CALL_REQUESTS_DECLINED_LABEL;
          case "onsite_conversion_messaging_business_calling_call_initiated":
            return o("AdsRBCuratedReportCTMStringUtils")
              .BUSINESS_CALLS_INITIATED_LABEL;
          case "onsite_conversion_messaging_business_calling_call_answered":
            return o("AdsRBCuratedReportCTMStringUtils")
              .BUSINESS_CALLS_ANSWERED_LABEL;
          case "onsite_conversion_messaging_business_calling_call_missed":
            return o("AdsRBCuratedReportCTMStringUtils")
              .BUSINESS_CALLS_MISSED_LABEL;
          case "messaging_avg_time_custom_phone_number_shared":
            return o("AdsRBCuratedReportCTMStringUtils")
              .MESSAGING_AVG_TIME_CUSTOM_PHONE_NUMBER_SHARED_LABEL;
          case "messaging_avg_depth_custom_phone_number_shared":
            return o("AdsRBCuratedReportCTMStringUtils")
              .MESSAGING_AVG_DEPTH_CUSTOM_PHONE_NUMBER_SHARED_LABEL;
          case "messaging_avg_time_purchase":
            return o("AdsRBCuratedReportCTMStringUtils")
              .MESSAGING_AVG_TIME_PURCHASE_LABEL;
          case "messaging_avg_depth_puchase":
            return o("AdsRBCuratedReportCTMStringUtils")
              .MESSAGING_AVG_DEPTH_PURCHASE_LABEL;
          case "messaging_median_time_custom_phone_number_shared":
            return o("AdsRBCuratedReportCTMStringUtils")
              .MESSAGING_MEDIAN_TIME_CUSTOM_PHONE_NUMBER_SHARED_LABEL;
          case "messaging_median_depth_custom_phone_number_shared":
            return o("AdsRBCuratedReportCTMStringUtils")
              .MESSAGING_MEDIAN_DEPTH_CUSTOM_PHONE_NUMBER_SHARED_LABEL;
          case "messaging_median_time_purchase":
            return o("AdsRBCuratedReportCTMStringUtils")
              .MESSAGING_MEDIAN_TIME_PURCHASE_LABEL;
          case "messaging_median_depth_purchase":
            return o("AdsRBCuratedReportCTMStringUtils")
              .MESSAGING_MEDIAN_DEPTH_PURCHASE_LABEL;
          case "spend":
            return o("AdsRBCuratedReportCTMStringUtils").AMOUNT_SPENT;
          case "omni_purchase_values":
            return o("AdsRBCuratedReportCTMStringUtils")
              .PURCHASE_CONVERSION_VALUE;
          case "purchase_roas":
            return o("AdsRBCuratedReportCTMStringUtils").PURCHASE_ROAS;
          case "cost_per_result":
            return o("AdsRBCuratedReportCTMStringUtils").COST_PER_RESULT;
          case "cost_per_result_benchmark":
            return o("AdsRBCuratedReportCTMStringUtils")
              .COST_PER_RESULT_BENCHMARK;
          case "lead":
            return o("AdsRBCuratedReportCTMStringUtils").LEAD;
          default:
            return t.replace("custom_event.", "");
        }
      },
      h = function (t) {
        return o(
          "AdsRBCuratedReportCTMStringUtils",
        ).getMedianTimeToCustomEventLabel(t);
      },
      y = function (t) {
        return o(
          "AdsRBCuratedReportCTMStringUtils",
        ).getMedianTimeToCustomEventDescription(t);
      },
      C = function (t) {
        switch (t) {
          case "messaging_avg_time_custom_phone_number_shared":
            return o("AdsRBCuratedReportCTMStringUtils")
              .MESSAGING_AVG_TIME_CUSTOM_PHONE_NUMBER_SHARED_DESCRIPTION;
          case "messaging_avg_depth_custom_phone_number_shared":
            return o("AdsRBCuratedReportCTMStringUtils")
              .MESSAGING_AVG_DEPTH_CUSTOM_PHONE_NUMBER_SHARED_DESCRIPTION;
          case "messaging_avg_time_purchase":
            return o("AdsRBCuratedReportCTMStringUtils")
              .MESSAGING_AVG_TIME_PURCHASE_DESCRIPTION;
          case "messaging_avg_depth_puchase":
            return o("AdsRBCuratedReportCTMStringUtils")
              .MESSAGING_AVG_DEPTH_PURCHASE_DESCRIPTION;
          case "messaging_median_time_custom_phone_number_shared":
            return o("AdsRBCuratedReportCTMStringUtils")
              .MESSAGING_MEDIAN_TIME_CUSTOM_PHONE_NUMBER_SHARED_DESCRIPTION;
          case "messaging_median_depth_custom_phone_number_shared":
            return o("AdsRBCuratedReportCTMStringUtils")
              .MESSAGING_MEDIAN_DEPTH_CUSTOM_PHONE_NUMBER_SHARED_DESCRIPTION;
          case "messaging_median_time_purchase":
            return o("AdsRBCuratedReportCTMStringUtils")
              .MESSAGING_MEDIAN_TIME_PURCHASE_DESCRIPTION;
          case "messaging_median_depth_purchase":
            return o("AdsRBCuratedReportCTMStringUtils")
              .MESSAGING_MEDIAN_DEPTH_PURCHASE_DESCRIPTION;
          default:
            return null;
        }
      },
      b = function (t) {
        switch (t) {
          case "onsite_conversion_messaging_conversation_started_7d":
            return o("AdsRBCuratedReportCTMStringUtils")
              .COST_PER_MESSAGING_CONVERSATIONS_STARTED_LABEL;
          case "purchase":
          case "purchase_roas":
            return o("AdsRBCuratedReportCTMStringUtils")
              .COST_PER_PURCHASE_LABEL;
          default:
            return o(
              "AdsRBCuratedReportCTMStringUtils",
            ).getCostPerCustomEventLabel(t);
        }
      },
      v = function () {
        return [
          "impressions",
          "link_click",
          "onsite_conversion_messaging_welcome_message_view",
          "onsite_conversion_messaging_conversation_started_7d",
          "onsite_conversion_messaging_conversation_replied_7d",
          "view_content",
          "add_to_cart",
          "initiate_checkout",
          "purchase",
        ].map(function (e) {
          return { id: e, label: g(e), value: 0, visible: e !== "impressions" };
        });
      },
      S =
        e !== void 0
          ? e
          : (e = n(
              "AdsRBCuratedReportCTMMetricUtils_rateCalculationItem.graphql",
            ));
    function R(e, t) {
      var n, r;
      if (e == null) return null;
      var a = o("RelayHooks").readInlineData(S, e);
      if (a.target_metric == null || a.base_metric == null) return null;
      var i = a.base_metric,
        l = a.target_metric,
        s = m(t, l),
        c = m(t, i),
        d =
          a.conversion_rate == null ||
          a.conversion_rate < 0 ||
          a.conversion_rate > 1
            ? null
            : a.conversion_rate,
        p =
          a.drop_off_rate == null || a.drop_off_rate < 0 || a.drop_off_rate > 1
            ? null
            : a.drop_off_rate;
      return {
        base_metric_id: (n = c == null ? void 0 : c.id) != null ? n : i,
        base_metric_label: c ? u(c) : i,
        conversion_rate: d,
        drop_off_rate: p,
        target_metric_id: (r = s == null ? void 0 : s.id) != null ? r : l,
        target_metric_label: s ? u(s) : l,
      };
    }
    function L(e) {
      return e == null
        ? null
        : o("intlNumUtils").formatNumberWithThousandDelimiters(
            (e * 100).toFixed(1),
            1,
          );
    }
    var E = function (t, n) {
      var e = r("LocalDate").fromISOString(t.start),
        a = r("LocalDate").fromISOString(t.end),
        i = a.daysBetween(e),
        l = e,
        s = a;
      switch (n) {
        case o("AdsRBCuratedReportCTMAdCampaignOutcomesTimeComparison.react")
          .CampaignTrendsTimeComparison.PREVIOUS_MONTH:
          ((l = e.subtractMonths(1)), (s = l.addDays(i)));
          break;
        case o("AdsRBCuratedReportCTMAdCampaignOutcomesTimeComparison.react")
          .CampaignTrendsTimeComparison.PREVIOUS_YEAR:
        case o("AdsRBCuratedReportCTMAdCampaignOutcomesTimeComparison.react")
          .CampaignTrendsTimeComparison.PREVIOUS_PERIOD:
        case o("AdsRBCuratedReportCTMAdCampaignOutcomesTimeComparison.react")
          .CampaignTrendsTimeComparison.UNDEFINED:
          return null;
      }
      return {
        start: l.toISOString(),
        start_timestamp: l.toInstant(t.timezone_id),
        end: s.toISOString(),
        end_timestamp: s.toInstant(t.timezone_id),
        timezone_id: t.timezone_id,
      };
    };
    ((l.getMetricDataCustomLabelOrLabel = u),
      (l.getMetricDataMockOrValue = c),
      (l.getMetricCatalogItemById = d),
      (l.getVisibleMetricList = p),
      (l.getMetricIcon = f),
      (l.getMetricLabelFbt = g),
      (l.getMedianTimeToOutcomeLabelFbt = h),
      (l.getMedianTimeToOutcomeTooltipFbt = y),
      (l.getMetricDescriptionFbt = C),
      (l.getCostPerMetricLabelFbt = b),
      (l.getDefaultFunnelMetricList = v),
      (l.getFormattedItemFromRateCalculationResponse = R),
      (l.getFormattedMetricCalculationRate = L),
      (l.getComparisonDateRange = E));
  },
  98,
);
