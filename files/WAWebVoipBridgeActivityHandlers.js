__d(
  "WAWebVoipBridgeActivityHandlers",
  [
    "WAWebVoipActivityTracker",
    "WAWebVoipAnrTracker",
    "WAWebVoipCrashContext",
    "WAWebVoipOutgoingSetupLatencyStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      startAnrTracking: function () {
        (o("WAWebVoipCrashContext").ensureVoipCrashContextRegistered(),
          o("WAWebVoipAnrTracker").startAnrTracking());
      },
      consumeAnrCount: function () {
        return o("WAWebVoipAnrTracker").consumeAnrCount();
      },
      startActivityTracking: function () {
        o("WAWebVoipActivityTracker").startActivityTracking();
      },
      trackVoipActivity: function (t) {
        var e = t.activity,
          n = t.details;
        o("WAWebVoipActivityTracker").trackActivity(e, n);
      },
      trackVoipCallStateChange: function (t) {
        var e = t.stateName;
        o("WAWebVoipActivityTracker").trackCallStateChange(e);
      },
      consumeActivityData: function () {
        return o("WAWebVoipActivityTracker").consumeActivityData();
      },
      clearActivityTracking: function () {
        o("WAWebVoipActivityTracker").clearActivityTracking();
      },
      startUiActivityTracking: function () {
        o("WAWebVoipActivityTracker").startUiActivityTracking();
      },
      consumeUiActivityData: function () {
        return o("WAWebVoipActivityTracker").consumeUiActivityData();
      },
      clearUiActivityTracking: function () {
        o("WAWebVoipActivityTracker").clearUiActivityTracking();
      },
      clearAllActivityTracking: function () {
        o("WAWebVoipActivityTracker").clearAllActivityTracking();
      },
      consumeOutgoingCallSetupActiveMs: function (t) {
        var e = t.callId;
        return o(
          "WAWebVoipOutgoingSetupLatencyStore",
        ).consumeOutgoingCallSetupActiveMsForCall(e);
      },
    };
    l.VoipBridgeActivityHandlers = e;
  },
  98,
);
