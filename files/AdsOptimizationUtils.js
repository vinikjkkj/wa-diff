__d(
  "AdsOptimizationUtils",
  [
    "$InternalEnum",
    "AdsBulkValueUtils",
    "AdsBuyingTypes",
    "AdsMixedValue",
    "Currency",
    "LoadObject",
    "firstx",
    "gkx",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "AVERAGE",
        "MAX_BID",
        "MIXED",
        "NONE",
        "OPTIMIZED",
        "ROAS",
      ]),
      s = n("$InternalEnum").Mirrored([
        "AVERAGE",
        "MAX_BID",
        "MIXED",
        "OPTIMIZED",
        "ROAS",
      ]),
      u = "USD";
    function c(e) {
      return e !== r("AdsBuyingTypes").RESERVED;
    }
    function d() {
      return 1;
    }
    function m(e, t, n, a, i, l) {
      var s = o("AdsBulkValueUtils").getUniformValue(t),
        u = o("AdsBulkValueUtils").getUniformValue(n);
      return !s || !u || a instanceof r("AdsMixedValue")
        ? !1
        : e.getCanUseConversionWindow(u, i, l);
    }
    function p(e, t) {
      var n =
        !!e &&
        e.getValues() &&
        e.getValues().length > 0 &&
        r("firstx")(e.getValues());
      return (
        n instanceof r("LoadObject") &&
        n.isDone() &&
        n.hasValue() &&
        n.getValueEnforcing().includes(t)
      );
    }
    function _(e, t, n) {
      var a = (e / o("Currency").getOffset(u)) * (r("isTruthy")(t) ? t : 1),
        i = Math.pow(10, Math.floor(Math.log10(a)));
      return (
        Math.max(1, Math.round(a / i) * i) *
        o("Currency").getOffset(r("isTruthy")(n) ? n : u)
      );
    }
    function f() {
      return !!r("gkx")("21346");
    }
    ((l.CostStrategyOption = e),
      (l.CostStrategyStates = s),
      (l.supportsOptimizationFields = c),
      (l.getDefaultAttributionWindowDays = d),
      (l.canSeeAttributionWindowOnUI = m),
      (l.isOptimizationGoalIneligible = p),
      (l.changeUSDCentToLocalCurrency = _),
      (l.canSeeNewCostCapUI = f));
  },
  98,
);
