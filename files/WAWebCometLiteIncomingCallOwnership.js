__d(
  "WAWebCometLiteIncomingCallOwnership",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r) {
      return r.aborted || !l({ activeCall: n, callId: e, originatingCall: t });
    }
    function l(e) {
      var t = e.activeCall,
        n = e.callId,
        r = e.originatingCall;
      return r != null ? t === r : t == null || t.id === n;
    }
    ((i.isIncomingCallStale = e), (i.isIncomingCallCurrent = l));
  },
  66,
);
