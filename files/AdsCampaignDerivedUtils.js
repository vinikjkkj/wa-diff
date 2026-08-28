__d(
  "AdsCampaignDerivedUtils",
  ["AdsTimeUtils", "DateConsts", "DateTime", "unixTimestampFromDate"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = Date.now() / o("DateConsts").MS_PER_SEC,
        n =
          e.start_time != null
            ? r("unixTimestampFromDate")(e.start_time)
            : null;
      n = n == null || n >= t ? n : t;
      var a = e.end_time,
        i = a != null ? r("unixTimestampFromDate")(a) : null;
      return n != null && i != null && i > n
        ? o("AdsTimeUtils").getDifferenceInDays(
            n * o("DateConsts").MS_PER_SEC,
            i * o("DateConsts").MS_PER_SEC,
          )
        : 0;
    }
    function s(e) {
      var t =
        r("DateTime")
          .fromLegacyArgs(e * 1e3, 0)
          .getUnixTimestamp() - r("DateTime").now(0).getUnixTimestamp();
      return t;
    }
    function u(e) {
      if (e.end_time == null || e.start_time == null) return null;
      var t = r("unixTimestampFromDate")(e.end_time);
      return s(t);
    }
    ((l.getRemainingCampaignDurationInDays = e),
      (l.getEndTimeDurationFromNow = s),
      (l.getCampaignEndTimeDurationFromNow = u));
  },
  98,
);
