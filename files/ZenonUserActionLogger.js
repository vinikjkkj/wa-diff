__d(
  "ZenonUserActionLogger",
  [
    "FBLogger",
    "RtcWebUserActionsDebugFalcoEvent",
    "RtcWebUserActionsFalcoEvent",
    "ZenonDebugLogger",
    "ZenonLoggingUtils",
    "ZenonSDESKeyDetector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s =
        window.location.hostname.search("facebook") !== -1
          ? "facebook"
          : window.location.hostname.search("messenger") !== -1
            ? "messenger_dot_com"
            : null,
      u = {
        logCheckpoint: function (t) {
          u.logEvent(babelHelpers.extends({}, t, { event: "checkpoint" }));
        },
        logClick: function (t) {
          u.logEvent(babelHelpers.extends({}, t, { event: "tap" }));
        },
        logError: function (t) {
          u.logEvent(babelHelpers.extends({}, t, { event: "error" }));
        },
        logEvent: function (t) {
          var e, n;
          if (r("ZenonSDESKeyDetector")(t))
            throw r("FBLogger")("rtc_www").mustfixThrow(
              "ZenonUserActionLogger event contains SDES crypto key! This log entry must be removed!",
            );
          if (o("ZenonLoggingUtils").shouldAllowLogging()) {
            var a = babelHelpers.extends({}, t, {
                page: (e = t.page) != null ? e : s,
              }),
              i = babelHelpers.extends({}, a, {
                client_time: Date.now().toString(),
              });
            (r("RtcWebUserActionsDebugFalcoEvent").log(function () {
              return i;
            }),
              r("RtcWebUserActionsFalcoEvent").log(function () {
                return i;
              }),
              r("ZenonDebugLogger")
                .getInstance()
                .getLogHistory()
                .log((n = t.event) != null ? n : "null", JSON.stringify(a)));
          }
        },
        logImpression: function (t) {
          u.logEvent(babelHelpers.extends({}, t, { event: "impression" }));
        },
        logPreCallClick: function (t) {
          u.logEvent(babelHelpers.extends({}, t, { event: "tap" }));
        },
        logPreCallImpression: function (t) {
          u.logEvent(babelHelpers.extends({}, t, { event: "impression" }));
        },
        startTimer: function (n) {
          var t = Date.now();
          ((e = e.set(n, t)),
            u.logCheckpoint({ checkpoint: n + "_timerStart" }));
        },
        stopTimer: function (n) {
          var t = n.checkpointName === void 0 ? n.timerName : n.checkpointName,
            r = n.event || {},
            o = function (n) {
              var t = e.get(n);
              return t != null
                ? (e.delete(n), parseInt(Date.now() - t, 10))
                : null;
            },
            a = o(n.timerName);
          return (
            u.logCheckpoint(
              babelHelpers.extends({}, r, {
                checkpoint: t + "_timerEnd",
                event_time_elapsed: a == null ? void 0 : a.toString(),
              }),
            ),
            parseInt(a, 10)
          );
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
