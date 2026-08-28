__d(
  "AdsReportBuilderRoutingActions",
  [
    "AdsApplicationUtils",
    "URI",
    "cr:1539728",
    "goURI",
    "isEmpty",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t, n) {
      t !== void 0 &&
        (t !== null
          ? e.filters(t).clearEmptyFilterSet()
          : n === !0
            ? e.clearFilters()
            : e.setEmptyFilterSet(!0));
    }
    function c(e, t) {
      t !== void 0 &&
        (t !== null
          ? e.addComparisonTimeRange(t).clearEmptyComparisonTimeRange()
          : e.addComparisonTimeRange(null).setEmptyComparisonTimeRange(!0));
    }
    function d(e, t, n, r, o) {
      (t === !0 && e.clearSelectedComponentID(),
        n === !0 && e.clearSelectedMCRID(),
        r === !0 && e.clearSelectedReportID(),
        o === !0 && e.clearCheckboxColumns());
    }
    function m(e, t, n, r, o) {
      (t != null && e.setProductBreakdownSetting(t),
        n != null && e.setProductGroupBreakdownSetting(n),
        r != null && e.setCategoryBreakdownSetting(r),
        o != null && e.setBrandBreakdownSetting(o));
    }
    function p(e, t, n, r, o, a) {
      (e.setShowSettingDialog(t),
        n === !0
          ? e.setShowViewTypeDialog(n)
          : n === !1 && e.setShowViewTypeDialog(null),
        r != null && e.setAccountType(r),
        o === !0 ? e.setShowDataTable(o) : o === !1 && e.setShowDataTable(null),
        a === !0 && e.setShowCustomMetricDialog(a));
    }
    var _ = n("cr:1539728");
    function f(e, t, n) {
      (t === void 0 && (t = function () {}),
        n === void 0 && (n = {}),
        o("AdsApplicationUtils").isAdsReportingPath() && g(e, t, n));
    }
    function g(t, n, o, a) {
      var i, l;
      (n === void 0 && (n = function () {}),
        o === void 0 && (o = {}),
        o.peRouterHelper && y(o.peRouterHelper));
      var s = h(t).action(n);
      a != null && s.setInteractionStartTime(a);
      var u = _.getRouteBuilder();
      if (t.accountID != null) {
        var c =
          u.getCurrentParams().act != null &&
          t.accountID !== u.getCurrentParams().act;
        c ? r("goURI")(s.getURI()) : s.navigate();
      } else
        ((i = o) == null ? void 0 : i.newWindow) === !0
          ? (e || (e = r("URI"))).goURIOnNewWindow(s.getURI())
          : ((l = o) == null ? void 0 : l.forceReload) === !0
            ? (e || (e = r("URI"))).go(s.getURI(), !0)
            : s.navigate();
    }
    function h(e) {
      var t = e.accountID,
        n = e.accountType,
        o = e.attributionWindows,
        a = e.brandBreakdownSetting,
        i = e.breakdowns,
        l = e.businessID,
        f = e.categoryBreakdownSetting,
        g = e.checkboxBreakdowns,
        h = e.checkboxMetrics,
        y = e.clearAdAccount,
        C = e.clearCheckboxColumns,
        b = e.clearLimit,
        v = e.clearSelectedComponentID,
        S = e.clearSelectedMCRID,
        R = e.clearSelectedReportID,
        L = e.clearTableParams,
        E = e.collapsedColumns,
        k = e.comparisonTimeRange,
        I = e.customColumnEventSource,
        T = e.defaultAttributionWindows,
        D = e.eventSource,
        x = e.filterSet,
        $ = e.force,
        P = e.formattingSet,
        N = e.fromNoData,
        M = e.limit,
        w = e.lockedDimensions,
        A = e.metrics,
        F = e.navState,
        O = e.productBreakdownSetting,
        B = e.productGroupBreakdownSetting,
        W = e.reportName,
        q = e.saveReport,
        U = e.selectedAdObjects,
        V = e.selectedComponentID,
        H = e.selectedMCRID,
        G = e.selectedReportID,
        z = e.showCustomMetricDialog,
        j = e.showDataTable,
        K = e.showEmptyFilterSetAsNoParam,
        Q = e.showSettingDialog,
        X = e.showViewTypeDialog,
        Y = e.sortSpec,
        J = e.targetCurrency,
        Z = e.timeRange,
        ee = e.viewType,
        te = _.getRouteBuilder();
      return (
        L === !0 && te.clearReportBuilderTableParams(),
        t != null && te.adAccountID(t),
        y === !0 && te.clearAdAccountID(),
        (s || (s = r("isEmpty")))(l) ||
          te.on(function (e) {
            return e.businessID(r("nullthrows")(l));
          }),
        d(te, v, S, R, C),
        o && te.addAttributionWindowsWithType(o),
        i && te.addBreakdowns(i),
        g && te.addCheckboxBreakdowns(g),
        u(te, x, K),
        P != null && te.formatting(P),
        M != null && te.addLimit(M),
        b === !0 && te.clearLimit(),
        w != null && te.addLockedDimensions(w),
        A && te.addMetrics(A),
        h && te.addCheckboxMetrics(h),
        D && (te.addReportBuilderEventSource(D), te.setEventSource(D)),
        I && te.setCustomColumnEventSource(I),
        F && te.navState(F),
        $ === !0 && te.force(),
        Z && te.addTimeRange(Z),
        c(te, k),
        E && te.addCollapsedColumns(E),
        ee && te.setViewType(ee),
        (s || (s = r("isEmpty")))(V) ||
          te.addSelectedComponentID(r("nullthrows")(V)),
        (s || (s = r("isEmpty")))(H) || te.addSelectedMCRID(r("nullthrows")(H)),
        (s || (s = r("isEmpty")))(G) ||
          te.addSelectedReportID(r("nullthrows")(G)),
        Y && te.addSortSpec(Y),
        (s || (s = r("isEmpty")))(J) ||
          te.setTargetCurrency(r("nullthrows")(J)),
        T && te.addDefaultAttributionWindows(r("nullthrows")(T)),
        p(te, Q, X, n, j, z),
        W != null && te.setReportName(W),
        q != null && te.setSaveReport(q),
        N != null ? te.fromNoData(N) : te.fromNoData(null),
        (s || (s = r("isEmpty")))(U) || te.setSelectedAdObjects(U),
        m(te, O, B, f, a),
        te
      );
    }
    function y(e) {
      _ = e;
    }
    ((l.maybeNavigateWithParams = f),
      (l.navigateWithParams = g),
      (l.getReportBuilderRouterWithParams = h),
      (l.setRouteHelper = y));
  },
  98,
);
