__d(
  "AdsDeliveryContainerUtils",
  [
    "invariant",
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsBulkValueUtils",
    "AdsDeliverySpecBulkConverter",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsEmptyValue",
    "AdsInterfacesLogger",
    "AdsMixedValue",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPromotedObjectTypes",
    "AdsUniformValue",
    "DateTime",
    "adsCampaignGenerateScheduleString",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n = parseFloat(e) || 0,
        r = parseFloat(t) || 0;
      return (
        !(n > 0 && r > 0) || s(0, 2060),
        n > 0 ? "daily" : r > 0 ? "lifetime" : null
      );
    }
    function u(e) {
      r("AdsInterfacesLogger").log(
        { eventName: e },
        r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
      );
    }
    function c(e) {
      r("AdsInterfacesLogger").log(
        { eventName: e + "_mounted" },
        r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
      );
    }
    function d(e) {
      return o("AdsBulkValueUtils").mapBulkValue(
        e.get("daily_budget", r("AdsEmptyValue").instance()),
        function (e) {
          return parseInt(e, 10);
        },
      );
    }
    function m(e) {
      var t = e.get("destination_type");
      return t instanceof r("AdsEmptyValue")
        ? new (r("AdsUniformValue"))(r("AdCampaignDestination").MESSENGER)
        : t;
    }
    function p(e, t) {
      if (e !== r("AdsAPIObjectives").LEAD_GENERATION) return !1;
      var n = t.get("destination_type");
      return (
        n instanceof r("AdsMixedValue") &&
        n.getValues().includes(r("AdCampaignDestination").PHONE_CALL)
      );
    }
    function _(e) {
      return o("AdsBulkValueUtils").mapBulkValue(
        e.get("lifetime_budget", r("AdsEmptyValue").instance()),
        function (e) {
          return parseInt(e, 10);
        },
      );
    }
    function f(e) {
      var t = _(e),
        n = d(e),
        o = t instanceof r("AdsEmptyValue") && n instanceof r("AdsEmptyValue"),
        a =
          o ||
          (t instanceof r("AdsMixedValue") &&
            t.getValues().includes(void 0) &&
            n instanceof r("AdsMixedValue") &&
            n.getValues().includes(void 0));
      return { all: o, some: a };
    }
    function g(e) {
      var t = v(e);
      return t instanceof r("AdsEmptyValue")
        ? new (r("AdsUniformValue"))(!1)
        : o("AdsBulkValueUtils").mapBulkValue(t, function (e) {
            return !!e;
          });
    }
    function h(e, t) {
      var n = e.get("start_time");
      if (o("AdsBulkValueUtils").isNullValue(n)) return null;
      var a = n.getValues();
      return a && a[0] != null
        ? r("DateTime").fromISOString(a[0], t).toDate()
        : null;
    }
    function y(e, t) {
      var n = e.get("end_time");
      if (o("AdsBulkValueUtils").isNullValue(n)) return null;
      var a = n.getValues();
      return a && a[0] != null
        ? r("DateTime").fromISOString(a[0], t).toDate()
        : null;
    }
    function C(e, t) {
      var n = h(e, t),
        o = y(e, t);
      return !n || !o ? null : r("adsCampaignGenerateScheduleString")(n, o);
    }
    function b(e) {
      var t = e.get("targeting");
      return t
        ? o(
            "AdsPlacementAPISpecReaderUtils",
          ).convertBulkTargetingSpecToPlacementSpecs(
            o("AdsDeliverySpecBulkConverter").toBulkJSSpec(t),
          )
        : [];
    }
    function v(e) {
      var t = d(e),
        n = _(e);
      return (
        o("AdsBulkValueUtils").assertAllSameLength([t, n]),
        o("AdsBulkValueUtils").mergeBulkValues(
          r("AdsEmptyUniformMixedBulkValueTypes"),
          [t, n],
        )
      );
    }
    function S(t) {
      var n = d(t);
      o("AdsBulkValueUtils").isNullValue(n) &&
        (n = new (r("AdsUniformValue"))(0));
      var a = _(t);
      o("AdsBulkValueUtils").isNullValue(a) &&
        (a = new (r("AdsUniformValue"))(0));
      var i = [n, a];
      return (
        o("AdsBulkValueUtils").assertAllSameLength(i),
        o("AdsBulkValueUtils").assertAllOrNothingNull(i),
        o("AdsBulkValueUtils").parallelIterator(function (t) {
          var n = t[0],
            r = t[1];
          return e(n || 0, r || 0);
        }, i)
      );
    }
    function R(e, t, n, r) {
      return r || e === "daily" ? 0 : t - n;
    }
    function L(e, t) {
      var n = o("AdsBulkValueUtils").mapBulkValue(
        e.get("budget_remaining", r("AdsEmptyValue").instance()),
        function (e) {
          return parseInt(e, 10);
        },
      );
      if (
        !(n instanceof r("AdsEmptyValue")) ||
        o("AdsBulkValueUtils").isNullValue(t)
      )
        return n;
      var a = v(e);
      (a &&
        t &&
        !(a instanceof r("AdsEmptyValue")) &&
        !(t instanceof r("AdsEmptyValue"))) ||
        s(0, 2061);
      var i = [a, t];
      return (
        o("AdsBulkValueUtils").assertAllOrNothingNull(i),
        o("AdsBulkValueUtils").assertAllSameLength(i),
        (n = o("AdsBulkValueUtils").parallelIterator(function (e) {
          var t = e[0],
            n = e[1];
          return n ? t : 0;
        }, i)),
        n
      );
    }
    function E(e, t) {
      var n = S(e),
        r = v(e),
        a = L(e, t),
        i = [n, r, a, t];
      return (
        o("AdsBulkValueUtils").assertAllOrNothingNull(i),
        o("AdsBulkValueUtils").assertAllSameLength(i),
        o("AdsBulkValueUtils").parallelIterator(function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          return R(t, n, r, o);
        }, i)
      );
    }
    function k(e) {
      var t = S(e),
        n = e.get("recurring_budget_semantics", r("AdsEmptyValue").instance());
      return (
        o("AdsBulkValueUtils").assertAllSameLength([t, n]),
        o("AdsBulkValueUtils").parallelIterator(
          function (e) {
            var t = e[0],
              n = e[1];
            return n != null ? n : t !== "lifetime";
          },
          [t, n],
        )
      );
    }
    function I(e) {
      switch (e) {
        case "CREATE_FLOW":
          return "delivery-container";
        case "BUDGET_SCHEDULE":
          return "delivery-container-budget-schedule";
        case "OPTIMIZATION":
          return "delivery-container-optimization";
        case "UNIFIED_EDITOR":
          return "delivery-container-unified";
      }
      return "delivery-container";
    }
    function T(e, t) {
      return !(
        e !== r("AdsAPIObjectives").VIDEO_VIEWS ||
        t !== r("AdsAPIOptimizationGoals").VIDEO_VIEWS
      );
    }
    function D(e, t, n) {
      return (
        e === r("AdsAPIObjectives").CONVERSIONS &&
        t === r("AdsAPIOptimizationGoals").VALUE &&
        (n === r("AdsPromotedObjectTypes").MOBILE_APP ||
          n === r("AdsPromotedObjectTypes").PIXEL)
      );
    }
    ((l.determineBudgetType = e),
      (l.logDeliveryActionLegacy = u),
      (l.logDeliveryImpressionLegacy = c),
      (l.getDailyBudget = d),
      (l.getDestinationType = m),
      (l.haveMixedLeadGenDestinationType = p),
      (l.getLifetimeBudget = _),
      (l.hasCampaignGroupBudget = f),
      (l.hasCampaignBudget = g),
      (l.getStartDate = h),
      (l.getEndDate = y),
      (l.generateScheduleString = C),
      (l.getPlacementAPISpecs = b),
      (l.getBudgetAmount = v),
      (l.getBudgetMode = S),
      (l.getBudgetRemaining = L),
      (l.getLifetimeBudgetSpent = E),
      (l.getRecurringBudgetSemantics = k),
      (l.getWebdriverTestID = I),
      (l.isEligibleForVVDeprecationChange = T),
      (l.isConversionsRoasOptimization = D));
  },
  98,
);
