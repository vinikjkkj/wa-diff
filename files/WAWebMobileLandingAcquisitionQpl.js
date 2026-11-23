__d(
  "WAWebMobileLandingAcquisitionQpl",
  ["WAWebQplFlowWrapper", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("qpl")._(891430238, "3598");
    function s(t) {
      try {
        var n = o("WAWebQplFlowWrapper").QPL.markerStart(e, {
          annotations: { string: { context: t } },
        });
        n.end(2);
      } catch (e) {}
    }
    l.logMobileLandingAcquisitionEvent = s;
  },
  98,
);
