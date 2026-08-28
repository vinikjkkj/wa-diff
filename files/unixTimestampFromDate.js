__d(
  "unixTimestampFromDate",
  ["AdsDateUtils", "DateConsts"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return +e
        ? +e
        : o("AdsDateUtils")
            .parseISODate(e + "")
            .getTime() / o("DateConsts").MS_PER_SEC;
    }
    l.default = e;
  },
  98,
);
