__d(
  "MAWCrossWorkerPortal",
  ["FBLogger", "MAWBridgeODSLogger", "WACrossWorkerPortal", "pageID"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, a, i) {
      if (e != null) return e;
      var l = babelHelpers.extends({}, i, {
        onPortError: o("MAWBridgeODSLogger").logCrossWorkerPortalPortErrorODS,
      });
      return (
        (e = o("WACrossWorkerPortal").attachPortal(t, n, a, r("pageID"), l)),
        e
      );
    }
    function u() {
      if (e == null) {
        r("FBLogger")("messenger_web").warn(
          "Trying to kill portal before its setup",
        );
        return;
      }
      o("WACrossWorkerPortal").killPortalAndSendPendingToBridge(e);
    }
    ((l.getOrCreateCrossWorkerPortal = s),
      (l.killPortalWhenWorkerTerminating = u));
  },
  98,
);
