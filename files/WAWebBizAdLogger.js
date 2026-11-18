__d(
  "WAWebBizAdLogger",
  ["WAWebBizAdLoggerUtils", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("BoostedComponentFalcoEvent").__setRef(
      "WAWebBizAdLogger",
    );
    function s(e, t) {
      var n,
        r = t.loggerContext;
      return {
        ad_account_id: o("WAWebBizAdLoggerUtils").toInt64(t.adAccountID),
        codebase: r == null ? void 0 : r.codebase,
        entry_point: r.entryPoint,
        event: e,
        extra_data: o("WAWebBizAdLoggerUtils").convertExtraData(
          babelHelpers.extends({}, (n = t.extra) != null ? n : {}, {
            message_type: t.messageType,
            notice_name: t.noticeName,
            spec_element: t.specElement,
          }),
        ),
        flow: r == null ? void 0 : r.flow,
        flow_id: r.flowID,
        page_id: o("WAWebBizAdLoggerUtils").toInt64(r.pageID),
        platform: r.platform,
        product: r.product,
        wa_ad_account_type: r == null ? void 0 : r.waAdAccountType,
      };
    }
    var u = {
        buildFalcoEvent: function (t) {
          var e,
            n,
            r,
            a,
            i,
            l = t.loggerContext;
          return {
            action: t.action,
            ad_account_id: (i = o("WAWebBizAdLoggerUtils")).toInt64(
              t.adAccountID,
            ),
            audience_id: i.toInt64(t.audienceID),
            budget_in_local: i.toInt64(t.budget),
            budget_type: i.budgetTypeToAdmanagerCampaignBudgetType(
              (e = t.budgetType) != null ? e : "DAILY_BUDGET",
            ),
            codebase: l == null ? void 0 : l.codebase,
            context: t.context,
            creative_spec: (n = t.creativeSpec) != null ? n : null,
            currency: t.currency,
            default_budget_in_local: o("WAWebBizAdLoggerUtils").toInt64(
              t.defaultBudget,
            ),
            default_duration_in_days: o("WAWebBizAdLoggerUtils").toInt64(
              t.defaultDuration,
            ),
            duration_in_days: o("WAWebBizAdLoggerUtils").toInt64(t.duration),
            ending_value: t.endingValue,
            entry_point: l.entryPoint,
            error: t.error,
            event: t.event,
            event_category: t.eventCategory,
            extra_data: o("WAWebBizAdLoggerUtils").convertExtraData(
              (l == null ? void 0 : l.recreateBoostId) != null
                ? babelHelpers.extends({}, (r = t.extra) != null ? r : {}, {
                    recreate_ad_boost_id: l.recreateBoostId,
                  })
                : t.extra,
            ),
            flow: l == null ? void 0 : l.flow,
            flow_id: l.flowID,
            override_error_class_name: t.overrideErrorClassName,
            override_error_message: t.overrideErrorMessage,
            override_error_summary: t.overrideErrorSummary,
            override_error_trace: t.overrideErrorTrace,
            page_id: o("WAWebBizAdLoggerUtils").toInt64(l.pageID),
            platform: l.platform,
            product: l.product,
            side: "client_side",
            starting_value: t.startingValue,
            targeting_spec: (a = t.targetingSpec) != null ? a : null,
            wa_ad_account_type: l == null ? void 0 : l.waAdAccountType,
          };
        },
        buildValidationNoticeCTAClickEvent: function (t) {
          return s("click_validation_message_cta", t);
        },
        buildValidationNoticeImpressionEvent: function (t) {
          return s("render_warning_message", t);
        },
        log: function (n) {
          e.onReady(function (e) {
            var t = u.buildFalcoEvent(n);
            t != null &&
              e.logCritical(function () {
                return t;
              });
          });
        },
        logCritical: function (t) {
          u.log(t);
        },
        logImmediately: function (n) {
          e.onReady(function (e) {
            var t = u.buildFalcoEvent(n);
            t != null &&
              e.logImmediately(function () {
                return t;
              });
          });
        },
        logValidationNoticeCTAClick: function (n) {
          e.onReady(function (e) {
            e.log(function () {
              return u.buildValidationNoticeCTAClickEvent(n);
            });
          });
        },
        logValidationNoticeImpression: function (n) {
          e.onReady(function (e) {
            var t = u.buildValidationNoticeImpressionEvent(n);
            t != null &&
              e.log(function () {
                return t;
              });
          });
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
