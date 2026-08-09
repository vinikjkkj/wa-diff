__d(
  "MAWOfflineQueueStatus",
  ["FBLogger", "MAWSharedProtocolQueueConst"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = !1;
    function u(t, n) {
      (e.set(t, n),
        e.size > 5e3 &&
          r("FBLogger")("wmi_eb").warn(
            "Offline queue status map size (%s) is too large",
            e.size,
          ));
    }
    function c(t) {
      return e.get(t);
    }
    function d() {
      ((e = new Map()), (s = !1));
    }
    function m() {
      return s;
    }
    function p() {
      s = !0;
    }
    function _(e, t) {
      var n = Object.keys(e);
      n.map(function (e) {
        u(e, t);
      });
    }
    function f(e) {
      return (
        c(e) === o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete
      );
    }
    function g() {
      return Array.from(e.entries())
        .filter(function (e) {
          var t = e[0],
            n = e[1];
          return (
            n !==
              o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete &&
            n !== o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Failed
          );
        })
        .map(function (e) {
          var t = e[0];
          return t;
        });
    }
    ((l.setOfflineQueueStatus = u),
      (l.getOfflineQueueStatus = c),
      (l.resetOfflineQueueState = d),
      (l.isOfflineQueueComplete = m),
      (l.markOfflineQueueComplete = p),
      (l.markThreadWithOfflineQueueStatus = _),
      (l.isOfflineQueueDoneForThread = f),
      (l.getAllThreadsWithOfflineQueueIncomplete = g));
  },
  98,
);
