__d(
  "adsSplitTestIsStudyFinished",
  ["AdsSSCLStudyStatus", "AdsSSCLUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("AdsSSCLUtils").getStatus(
        e.status,
        e.cooldown_start_time,
        e.observation_end_time,
      );
      return t === o("AdsSSCLStudyStatus").FINISHED;
    }
    l.default = e;
  },
  98,
);
