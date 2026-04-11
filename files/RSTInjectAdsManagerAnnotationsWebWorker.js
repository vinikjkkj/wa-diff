__d(
  "RSTInjectAdsManagerAnnotationsWebWorker",
  [
    "AdsManagerAutoLoggingAppConfig",
    "RSTEvents",
    "RSTEventsMessageQueue",
    "RSTUtils",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = null;
    (r("requireWeak")("AdsALWorkerTrackLastEventIndex", function (t) {
      e = t;
    }),
      r("requireWeak")("hyperionUtil", function (e) {
        s = e;
      }));
    function u() {
      o("RSTUtils").isInWebWorker() &&
        o("RSTEventsMessageQueue").subscribe(
          o("RSTEvents").RSTEvent.LOGGING_UNRESPONSIVENESS_TO_INDEXDB,
          function (t) {
            var n,
              r = t.unresponsiveEventRecord;
            if (e != null) {
              var a = r == null ? void 0 : r.lastHeartBeatMetadata;
              if (a != null) {
                var i = e.getLastEventIndex();
                c(a, "AlLastEventIndex", "" + i);
                var l =
                  o("AdsManagerAutoLoggingAppConfig") == null
                    ? void 0
                    : o("AdsManagerAutoLoggingAppConfig").session_id;
                l != null && c(a, "AlSessionID", l);
                var u = (n = s) == null ? void 0 : n.ClientSessionID;
                u != null && c(a, "AlBrowserSessionID", u);
              }
            }
          },
        );
    }
    function c(e, t, n) {
      var r;
      ((e.annotations = (r = e.annotations) != null ? r : {}),
        e.annotations != null && (e.annotations[t] = n));
    }
    l.registerAdsManagerAnnotationsInjector = u;
  },
  98,
);
