__d(
  "adsExperimentsGetAdjustedStudyStartTime",
  ["DateTime", "adsExperimentsGetDefaultDelayMinutes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.question,
        n = e.studyStartTime,
        a = e.studyType,
        i = e.timezoneID,
        l = r("DateTime")
          .now(i)
          .addMinutes(
            o("adsExperimentsGetDefaultDelayMinutes").getDefaultDelayMinutes(
              t,
              a,
            ),
          ),
        s = r("DateTime").createFromISOString(n, i);
      return (s.isBefore(l) && (s = l), s);
    }
    l.default = e;
  },
  98,
);
