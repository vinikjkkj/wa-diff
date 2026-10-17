__d(
  "WAWebVoipIncomingOfferToLayoutStore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null,
      l = null;
    function s(t) {
      (l === t && e != null) || ((e = Date.now()), (l = t));
    }
    function u() {
      var t = e;
      return ((e = null), (l = null), t);
    }
    ((i.recordIncomingCallWindowShown = s),
      (i.consumeIncomingCallWindowShownMs = u));
  },
  66,
);
