__d(
  "CometQPLPayloadStore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null;
    function l(t) {
      e = t;
    }
    function s() {
      var t,
        n = window;
      return (t = e != null ? e : n.pldmp) != null ? t : null;
    }
    var u = null;
    function c(e) {
      u = e;
    }
    function d() {
      var e,
        t = window;
      return (e = u != null ? u : t.plbs) != null ? e : null;
    }
    ((i.storePayloadMap = l),
      (i.getPayloadMap = s),
      (i.storePayloadBytesSent = c),
      (i.getPayloadBytesSent = d));
  },
  66,
);
