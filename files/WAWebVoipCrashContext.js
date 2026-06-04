__d(
  "WAWebVoipCrashContext",
  ["WAWebCallCollection", "WAWebCrashlog", "WAWebVoipActivityTracker"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1;
    function s() {
      e ||
        ((e = !0), o("WAWebCrashlog").registerCrashlogVoipContextCallback(u));
    }
    function u() {
      var e,
        t = (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.id;
      if (t == null) return null;
      var n = o("WAWebVoipActivityTracker").peekVoipActivitySnapshot();
      return {
        callId: t,
        voipActivity: n == null ? void 0 : n.lastVoipActivity,
        voipActivityTimestampSec:
          n == null ? void 0 : n.lastVoipActivityTimestampSec,
        voipUiActivity: n == null ? void 0 : n.lastVoipUiActivity,
        voipUiActivityTimestampSec:
          n == null ? void 0 : n.lastVoipUiActivityTimestampSec,
      };
    }
    l.ensureVoipCrashContextRegistered = s;
  },
  98,
);
