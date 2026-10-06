__d(
  "WAWebVoipAppInBgWhenCallStartsStore",
  ["WAWebVoipWaCallEnums"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s(t, n) {
      d(t, n) && (e = document.visibilityState !== "visible");
    }
    function u() {
      return e;
    }
    function c() {
      e = null;
    }
    function d(e, t) {
      return t === o("WAWebVoipWaCallEnums").CallState.Calling
        ? e === o("WAWebVoipWaCallEnums").CallState.None
        : t === o("WAWebVoipWaCallEnums").CallState.ReceivedCall
          ? e !== o("WAWebVoipWaCallEnums").CallState.ReceivedCall &&
            e !== o("WAWebVoipWaCallEnums").CallState.Rejoining
          : !1;
    }
    ((l.maybeRecordAppInBgWhenCallStarts = s),
      (l.getAppInBgWhenCallStarts = u),
      (l.resetAppInBgWhenCallStarts = c));
  },
  98,
);
