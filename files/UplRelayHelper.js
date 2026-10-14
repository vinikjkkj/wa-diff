__d(
  "UplRelayHelper",
  ["RelayAPIConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "X-FB-UPL-SESSIONID",
      s = "X-FB-UPL-SESSIONID-SHADOW";
    function u(e, t) {
      var n,
        o = (n = r("RelayAPIConfig").customHeadersForMerge) != null ? n : {};
      ((o[e] = t), (r("RelayAPIConfig").customHeadersForMerge = o));
    }
    function c(t) {
      u(e, t);
    }
    function d(e) {
      u(s, e);
    }
    ((l.applyRelayConfigSessionId = c),
      (l.applyRelayConfigSessionId_SHADOW = d));
  },
  98,
);
