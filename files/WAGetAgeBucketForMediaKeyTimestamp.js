__d(
  "WAGetAgeBucketForMediaKeyTimestamp",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null) return "Missing";
      if (o("WATimeUtils").isInFuture(e))
        switch (!0) {
          case o("WATimeUtils").happenedWithin(
            e,
            1 * o("WATimeUtils").DAY_SECONDS,
          ):
            return "< 1 day in future";
          case o("WATimeUtils").happenedWithin(
            e,
            7 * o("WATimeUtils").DAY_SECONDS,
          ):
            return "1-7 days in future";
          default:
            return "> 7 days in future";
        }
      switch (!0) {
        case o("WATimeUtils").happenedWithin(
          e,
          1 * o("WATimeUtils").DAY_SECONDS,
        ):
          return "< 1 day";
        case o("WATimeUtils").happenedWithin(
          e,
          7 * o("WATimeUtils").DAY_SECONDS,
        ):
          return "1-7 days";
        case o("WATimeUtils").happenedWithin(
          e,
          14 * o("WATimeUtils").DAY_SECONDS,
        ):
          return "7-14 days";
        case o("WATimeUtils").happenedWithin(
          e,
          21 * o("WATimeUtils").DAY_SECONDS,
        ):
          return "14-21 days";
        case o("WATimeUtils").happenedWithin(
          e,
          30 * o("WATimeUtils").DAY_SECONDS,
        ):
          return "21-30 days";
        case o("WATimeUtils").happenedWithin(
          e,
          40 * o("WATimeUtils").DAY_SECONDS,
        ):
          return "30-40 days";
        case o("WATimeUtils").happenedWithin(
          e,
          50 * o("WATimeUtils").DAY_SECONDS,
        ):
          return "40-50 days";
        case o("WATimeUtils").happenedWithin(
          e,
          60 * o("WATimeUtils").DAY_SECONDS,
        ):
          return "50-60 days";
        default:
          return "> 60 days";
      }
    }
    l.getAgeBucketForMediaKeyTimestamp = e;
  },
  98,
);
