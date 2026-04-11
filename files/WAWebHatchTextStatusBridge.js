__d(
  "WAWebHatchTextStatusBridge",
  ["WATimeUtils", "WAWebContactCollection"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 86400;
    function s(t, n) {
      var r = o("WAWebContactCollection").ContactCollection.get(t);
      if (r != null) {
        var a = o("WATimeUtils").unixTime();
        r.set({
          textStatusString: n,
          textStatusEmoji: null,
          textStatusLastUpdateTime: a,
          textStatusExpiryTs: a + e,
          textStatusEphemeralDuration: e,
        });
      }
    }
    function u(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      t != null &&
        t.set({
          textStatusString: null,
          textStatusEmoji: null,
          textStatusLastUpdateTime: 0,
          textStatusExpiryTs: 0,
          textStatusEphemeralDuration: null,
        });
    }
    ((l.setHatchTextStatus = s), (l.clearHatchTextStatus = u));
  },
  98,
);
