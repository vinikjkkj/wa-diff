__d(
  "AdsPENavigationRoutingUtils",
  [
    "AdsMgmtActivityEditorLifecycleGatingUtils",
    "AdsMgmtStandaloneRouteUtils",
    "LocalDate",
    "Timezone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      m([s])(e, t);
    }
    function s(e) {
      var t = e.nextParam,
        n = t == null ? void 0 : t.date;
      if (n == null || n.statRange == null) return e;
      var a = n.rangeType,
        i = r("LocalDate").today(o("Timezone").UTC),
        l = i.subtractMonths(37),
        s = r("LocalDate").fromISOString(n.statRange.start);
      if (a !== "lifetime" && !s.isBefore(l)) return e;
      a = a === "lifetime" ? "maximum" : a;
      var u = {
        rangeType: a,
        statRange: { start: l.max(s).toISOString(), end: n.statRange.end },
      };
      return {
        nextRouteName: e.nextRouteName,
        nextParam: babelHelpers.extends({}, t, { date: u }),
        previousRouteName: e.previousRouteName,
      };
    }
    function u(e) {
      return (o("AdsMgmtStandaloneRouteUtils").setStandaloneRouteLoaded(), e);
    }
    function c(e) {
      if (
        !o(
          "AdsMgmtActivityEditorLifecycleGatingUtils",
        ).isActivityBasedEditorEnabledWithoutExposure()
      )
        return e;
      var t = e.nextRouteName;
      return o("AdsMgmtStandaloneRouteUtils").isStandaloneEditRoute(t)
        ? {
            nextRouteName: o(
              "AdsMgmtStandaloneRouteUtils",
            ).toggleStandaloneEditRouteName(t),
            nextParam: e.nextParam,
            previousRouteName: e.previousRouteName,
          }
        : e;
    }
    function d(e) {
      if (
        o(
          "AdsMgmtActivityEditorLifecycleGatingUtils",
        ).isActivityBasedEditorEnabledWithoutExposure()
      )
        return e;
      var t = e.nextRouteName,
        n = e.previousRouteName;
      return !o("AdsMgmtStandaloneRouteUtils").isNonStandaloneEditRoute(t) ||
        n != null
        ? e
        : {
            nextRouteName: o(
              "AdsMgmtStandaloneRouteUtils",
            ).toggleStandaloneEditRouteName(t),
            nextParam: e.nextParam,
            previousRouteName: e.previousRouteName,
          };
    }
    function m(e) {
      return function (t, n) {
        var r,
          o,
          a = {
            nextParam: n.getNextParams(),
            nextRouteName: (r = n.getNextRoute()) == null ? void 0 : r.name,
            previousRouteName:
              (o = n.getPreviousRoute()) == null ? void 0 : o.name,
          },
          i = e.reduce(function (e, t) {
            return t(e);
          }, a);
        if (i !== a) {
          var l = i.nextParam,
            s = i.nextRouteName,
            u = i.previousRouteName;
          n.redirectTo(s != null ? s : u, babelHelpers.extends({}, l));
        }
      };
    }
    ((l.redirectToValidDateRangeOnRouteWillMount = e),
      (l.redirectToValidDateRangeReducer = s),
      (l.redirectFromStandaloneRouteReducer = u),
      (l.redirectAwayFromStandaloneIfActivityEnabled = c),
      (l.redirectToStandaloneEditorReducer = d),
      (l.redirectInOrderOnRouteWillMount = m));
  },
  98,
);
