__d(
  "CometOfflineTracing",
  ["NetworkStatus"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "sessionOfflineStatusCount",
      s = 0,
      u = !1;
    function c() {
      u ||
        ((u = !0),
        r("NetworkStatus").onChange(function (e) {
          var t = e.online;
          t || s++;
        }));
    }
    function d() {
      return s;
    }
    ((l.OFFLINE_NETWORK_STATUS_ANNOTATION = e),
      (l.initialize = c),
      (l.getOfflineCount = d));
  },
  98,
);
