__d(
  "AdsBidConstraintsUtils",
  [
    "AdsAPIBidConstraints",
    "AdsAPIBidStrategies",
    "AdsAPIOptimizationGoals",
    "AdsBulkValueUtils",
    "AdsEmptyValue",
    "AdsUniformMixedNullableBulkValueTypes",
    "AdsUniformValue",
    "AdsVolumeROASUtils",
    "immutable",
    "intlNumUtils",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 100,
      s = 0.01,
      u = 3,
      c = 1e4,
      d = 4,
      m = 10,
      p = 1e7;
    function _(e, t) {
      return !t && e;
    }
    function f(e) {
      var t;
      if (o("AdsBulkValueUtils").isNullValue(e))
        t = r("AdsEmptyValue").instance();
      else {
        var n = [];
        (e.getValues().forEach(function (e) {
          if (r("immutable").Map.isMap(e)) {
            var t = r("nullthrows")(e).get(
              r("AdsAPIBidConstraints").ROAS_AVERAGE_FLOOR,
            );
            typeof t == "number" ? n.push(t) : n.push(null);
          } else n.push(null);
        }),
          n.length === 0
            ? (t = r("AdsEmptyValue").instance())
            : (t = o("AdsBulkValueUtils").aggregate(n)));
      }
      return t;
    }
    function g(e) {
      var t = !1;
      return (
        o("AdsBulkValueUtils").isNullValue(e) ||
          (t = e.getValues().some(function (e) {
            return (
              e != null &&
              r("immutable").Map.isMap(e) &&
              e.has(r("AdsAPIBidConstraints").ROAS_AVERAGE_FLOOR)
            );
          })),
        t
      );
    }
    function h(e) {
      var t = new (r("AdsUniformValue"))(r("immutable").Map());
      if (o("AdsBulkValueUtils").isNullValue(e)) return t;
      var n = [],
        a = e.getValues();
      return (
        a.forEach(function (e) {
          r("immutable").Map.isMap(e) &&
            n.push(
              r("nullthrows")(e).delete(
                r("AdsAPIBidConstraints").ROAS_AVERAGE_FLOOR,
              ),
            );
        }),
        (t = o("AdsBulkValueUtils").aggregate(
          n,
          r("AdsUniformMixedNullableBulkValueTypes"),
        )),
        t
      );
    }
    function y() {
      return e;
    }
    function C() {
      return s;
    }
    function b() {
      return u;
    }
    function v() {
      return m;
    }
    function S() {
      return p;
    }
    function R() {
      return d;
    }
    function L() {
      return {
        formattedMin: (m / c).toString(),
        formattedMax: (p / c).toString(),
      };
    }
    function E(e) {
      return e.getValues().some(function (e) {
        return (
          e === r("AdsAPIOptimizationGoals").VALUE ||
          e === r("AdsAPIOptimizationGoals").ADVERTISER_SILOED_VALUE
        );
      });
    }
    function k(e) {
      return o("AdsVolumeROASUtils").isVolumeROASEnabled()
        ? e != null &&
            e.getValues().some(function (e) {
              return e === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS;
            })
        : !1;
    }
    function I(e) {
      return (
        e != null &&
        e.getValues().some(function (e) {
          return e != null;
        })
      );
    }
    function T(e, t, n) {
      var r = !I(t) && n != null && g(n);
      return E(e) || k(t) || r;
    }
    function D(e, t) {
      return T(e, t);
    }
    function x(e) {
      if (e) return e.roas_average_floor;
    }
    function $(e) {
      return o("intlNumUtils").formatNumber(e / c, u);
    }
    function P(e) {
      var t = e.getValues().filter(function (e) {
        return typeof e == "number";
      });
      return o("AdsBulkValueUtils").aggregate(t);
    }
    function N(e, t, n, a) {
      var i = r("immutable").Map();
      return (
        a instanceof r("AdsEmptyValue") ||
          (i = o("AdsBulkValueUtils").getUniformValueOrDefault(
            a,
            r("immutable").Map(),
          )),
        e
          ? new (r("AdsUniformValue"))(i.delete(t))
          : new (r("AdsUniformValue"))(i.set(t, n))
      );
    }
    function M(e) {
      return Math.pow(10, e);
    }
    function w(e, t, n) {
      var o,
        a = t != null ? t : R(),
        i = (o = n != null ? n : b()) != null ? o : 0;
      if (a) {
        var l = M(a),
          s = e / l;
        return r("intlNumUtils").formatNumberWithThousandDelimiters(s, i);
      }
      return r("intlNumUtils").formatNumberWithThousandDelimiters(e, 0);
    }
    function A(e, t, n) {
      var r = t != null ? t : R(),
        o = n != null ? n : b();
      if (e && o && r) {
        var a = M(r),
          i = M(o);
        return Math.max(Math.round(e * i) * (a / i), m);
      }
      return Math.max(e, m);
    }
    function F(e) {
      return typeof e != "number" ? !1 : e >= v() && e <= S();
    }
    function O() {
      return c;
    }
    ((l.MIN_ROAS_AVERAGE_FLOOR = m),
      (l.shouldShowHighestValueBidStrategyField = _),
      (l.getROASAverageFloorBulk = f),
      (l.bulkBidConstraintsHaveROASAverageFloor = g),
      (l.deleteROASAveragefloorFrombulkBidConstraints = h),
      (l.getDefaultROASAverageFloor = y),
      (l.getDefaultROASAverageFloorParsedValue = C),
      (l.getDefaultROASDecimals = b),
      (l.getMinROASAverageFloor = v),
      (l.getMaxROASAverageFloor = S),
      (l.getROASDefaultScale = R),
      (l.getFormattedROASAverageFloorBounds = L),
      (l.bulkHasValueOptimizationGoal = E),
      (l.bulkHasMinROASBidStrategy = k),
      (l.shouldShowROASControls = T),
      (l.shouldUseNewBidStrategyHelpText = D),
      (l.getMinROASInReporting = x),
      (l.formatMinROASWithDecimals = $),
      (l.filterNullForRoasAverageFloor = P),
      (l.updateRoasAverageFloorInBidConstraints = N),
      (l.getROASScaleFactor = M),
      (l.formatROASPercentage = w),
      (l.parseROASPercentage = A),
      (l.isValidROASAverageFloor = F),
      (l.getROASScaleFactorValue = O));
  },
  98,
);
