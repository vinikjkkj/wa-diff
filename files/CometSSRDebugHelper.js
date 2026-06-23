__d(
  "CometSSRDebugHelper",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e =
        "There are still pending promises, aborting server rendering stream.",
      l = {
        globalBoundaryErrorStatus: null,
        ignoredHydrationErrors: [],
        lastPayloadArrived: !1,
        sampleProfiles: [],
        serverInfoList: [],
        ssrFinishedSuccessfully: !1,
        ssrRenderPassStatuses: {},
      },
      s = 0,
      u = new Map();
    function c(e) {
      l = e;
    }
    function d() {
      return l;
    }
    function m(e) {
      var t = s++;
      return (
        u.set(t, e),
        {
          release: function () {
            u.delete(t);
          },
        }
      );
    }
    function p() {
      if (u.size !== 0) {
        var e = d();
        u.forEach(function (t) {
          return t(e);
        });
      }
    }
    ((i.ABORT_DUE_TO_PENDING_PROMISES = e),
      (i.updateSSRDebugState = c),
      (i.getDebugState = d),
      (i.onDebugStateChange = m),
      (i.triggerDebugStateUpdate = p));
  },
  66,
);
