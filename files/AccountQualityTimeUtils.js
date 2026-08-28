__d(
  "AccountQualityTimeUtils",
  [
    "fbt",
    "AccountQualityTimeLimits",
    "AdsInsightsTimeRangeUtil",
    "DateTime",
    "LocalDate",
    "LocalDateTime",
    "ServerTime",
    "Timezone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 86400,
      u = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.getDateFromTimestamp = function (t) {
            return r("LocalDateTime")
              .fromInstant(parseInt(t, 10), o("Timezone").UTC)
              .format("M d, Y");
          }),
          (n.isItemEligible = function (n, r, o) {
            var t = this.getCurrentServerTimestamp(),
              a =
                t - this.getTimestampFromString(r) <= e
                  ? t
                  : this.getTimestampFromString(r);
            return o >= this.getTimestampFromString(n) && o <= a;
          }),
          (n.getTimestampFromString = function (t) {
            return r("DateTime")
              .createFromISOString(t, o("Timezone").getEnvironmentTimezoneID())
              .getUnixTimestampSeconds();
          }),
          (n.getCurrentServerTimestamp = function () {
            return r("DateTime")
              .create(
                o("ServerTime").getMillis(),
                o("Timezone").getEnvironmentTimezoneID(),
              )
              .getUnixTimestampSeconds();
          }),
          (n.getRelevanceWindowStart = function (t) {
            return t != null
              ? t
              : r("DateTime")
                  .now(o("Timezone").UTC)
                  .startOfDay()
                  .subtractDays(
                    r("AccountQualityTimeLimits")
                      .RELEVANT_ENFORCEMENT_DAY_LIMIT_DEFAULT_30,
                  ).instant;
          }),
          (n.getBSHRelevanceWindowStart = function () {
            return r("DateTime")
              .now(o("Timezone").UTC)
              .startOfDay()
              .subtractDays(
                r("AccountQualityTimeLimits")
                  .RELEVANT_ENFORCEMENT_DAY_LIMIT_BSH_90,
              ).instant;
          }),
          (n.getIntervalFromPreset = function (t) {
            return o("AdsInsightsTimeRangeUtil").presetToDateInterval(
              t,
              r("LocalDate").today(o("Timezone").UTC),
            );
          }),
          (n.getDaysIntervalFromTimestamp = function (t) {
            var e = r("LocalDate").today(o("Timezone").UTC);
            return (
              r("LocalDate")
                .fromInstant(parseInt(t, 10), o("Timezone").UTC)
                .daysBetween(e) + 1
            );
          }),
          (n.getRelevanceWindowSubtitle = function (t) {
            var e =
              t != null
                ? t.start.daysBetween(t.end)
                : r("AccountQualityTimeLimits")
                    .RELEVANT_ENFORCEMENT_DAY_LIMIT_DEFAULT_30;
            return s._(
              /*BTDS*/ "In last {number of days considered for recent enforcement} days",
              [s._param("number of days considered for recent enforcement", e)],
            );
          }),
          (n.isDateInDefaultRelevanceWindow = function (t) {
            var e = this.getRelevanceWindowStart();
            return (
              r("DateTime").fromISOString(t, o("Timezone").UTC).instant >= e
            );
          }),
          (n.isDeadlinePassed = function (t) {
            var e = this.getTimestampFromString(t);
            return e - r("DateTime").localNow().instant < 0;
          }),
          (n.timeToString = function (t) {
            return r("DateTime")
              .fromISOString(t, o("Timezone").UTC)
              .format("M d, Y");
          }),
          (n.potentialTimestampToISOString = function (t) {
            return t == null
              ? null
              : typeof t == "number" ||
                  (typeof t == "string" && this.isNumeric(t))
                ? r("LocalDateTime")
                    .fromInstant(parseInt(t, 10), o("Timezone").UTC)
                    .toISOString()
                : t;
          }),
          (n.isOutdated = function (t, n, a) {
            return a === !0
              ? !1
              : t == null
                ? !0
                : r("LocalDateTime")
                    .fromISOString(t)
                    .toInstant(o("Timezone").UTC) <
                  this.getRelevanceWindowStart(n);
          }),
          (n.moreRecentDate = function (t, n) {
            return t == null
              ? n
              : n == null
                ? t
                : r("LocalDateTime")
                    .fromInstant(
                      Math.max(
                        r("LocalDateTime")
                          .fromISOString(t)
                          .toInstant(o("Timezone").UTC),
                        r("LocalDateTime")
                          .fromISOString(n)
                          .toInstant(o("Timezone").UTC),
                      ),
                      o("Timezone").UTC,
                    )
                    .toISOString();
          }),
          (n.isNumeric = function (t) {
            return /^-?\d+$/.test(t);
          }),
          (n.getInsightsTimeFilters = function () {
            var e = ["last_14_days", "last_30_days", "last_90_days"];
            return e;
          }),
          (n.getDefaultTimeRange = function () {
            return "last_30_days";
          }),
          t
        );
      })(),
      c = new u();
    l.default = c;
  },
  226,
);
