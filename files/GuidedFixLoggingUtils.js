__d(
  "GuidedFixLoggingUtils",
  ["GuidedFixEventFalcoEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      r("GuidedFixEventFalcoEvent").log(function () {
        return { lea_event: t, adgroup_id: e, experience_category: n };
      });
    }
    l.logGuidedFixEventToLEA = e;
  },
  98,
);
