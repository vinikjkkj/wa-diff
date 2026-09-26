__d(
  "reportTopicsForView",
  [
    "DTSG",
    "DTSGUtils",
    "FBLogger",
    "SprinkleConfig",
    "XPrivacySandboxTopicsAPIReportingControllerRouteBuilder",
    "getErrorSafe",
    "gkx",
    "gpsTopicsConstants",
    "isTopicsAPIEnabledForReporting",
    "shouldReportTopicsOnSchedule",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        var e = {};
        e.token = t;
        var n = o("DTSG").getToken();
        return (
          n != null &&
            n.length > 0 &&
            ((e.fb_dtsg = n),
            r("SprinkleConfig").param_name.length > 0 &&
              (e[r("SprinkleConfig").param_name] =
                r("DTSGUtils").getNumericValue(n))),
          e
        );
      },
      s = function (t) {
        window
          .fetch(
            r(
              "XPrivacySandboxTopicsAPIReportingControllerRouteBuilder",
            ).buildURL({}),
            {
              body: Object.keys(t)
                .map(function (e) {
                  return [encodeURIComponent(e), encodeURIComponent(t[e])].join(
                    "=",
                  );
                })
                .join("&"),
              browsingTopics: !0,
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              keepalive: !0,
              method: "POST",
              skipObservation: !0,
            },
          )
          .catch(function (e) {
            var t = e == null ? "Unknown" : r("getErrorSafe")(e).message,
              n =
                r("gpsTopicsConstants").MESSAGE_PREFIX +
                " reportTopicsThroughRouter issue: " +
                t;
            r("FBLogger")(
              r("gpsTopicsConstants").LOGGING_PROJECT_NAME,
              r("gpsTopicsConstants").LOGGING_EVENT_NAME,
            ).warn(n);
          });
      };
    function u(t) {
      if (!(t == null || t.length === 0))
        try {
          if (
            !r("isTopicsAPIEnabledForReporting")() ||
            !r("shouldReportTopicsOnSchedule")()
          )
            return;
          s(e(t));
        } catch (e) {
          var n =
              e instanceof Error &&
              Object.prototype.hasOwnProperty.call(e, "message")
                ? e.message
                : "Unknown",
            o =
              r("gpsTopicsConstants").MESSAGE_PREFIX +
              " reportTopicsForView issue: " +
              n;
          r("FBLogger")(
            r("gpsTopicsConstants").LOGGING_PROJECT_NAME,
            r("gpsTopicsConstants").LOGGING_EVENT_NAME,
          ).warn(o);
        }
    }
    function c(e) {
      e == null || e.length === 0 || (r("gkx")("13576") && u(e));
    }
    ((l.reportTopicsForView = u), (l.reportTopicsForViewMainObserver = c));
  },
  98,
);
