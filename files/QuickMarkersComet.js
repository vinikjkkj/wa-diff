__d(
  "QuickMarkersComet",
  ["QuickMarkersConfig", "QuickMarkersSrcFalcoEvent", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      u("ClientInit");
    }
    function u(t) {
      if (
        !(
          r("QuickMarkersConfig").pageLoadEventId == null ||
          r("QuickMarkersConfig").sampleWeight == null
        )
      ) {
        var n = {
          event_id: r("QuickMarkersConfig").pageLoadEventId,
          marker_id: t,
          marker_page_time: (e || (e = r("performanceNow")))(),
          script_path: r("QuickMarkersConfig").pageLoadScriptPath,
          weight: r("QuickMarkersConfig").sampleWeight,
        };
        r("QuickMarkersSrcFalcoEvent").logImmediately(function () {
          return n;
        });
      }
    }
    ((l.init = s), (l.mark = u));
  },
  98,
);
