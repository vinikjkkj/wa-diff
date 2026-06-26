__d(
  "WAWebVoipCancelOutgoingCall",
  [
    "WALogger",
    "WAWebCallCollection",
    "WAWebPipController",
    "WAWebVoipActivityTracker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      var t = r("WAWebCallCollection").pendingOutgoingCall;
      t != null &&
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: cancelling pending outgoing call before signaling",
            ])),
        ),
        r("WAWebCallCollection").setPendingOutgoingCall(null),
        r("WAWebPipController").closePiP(),
        o("WAWebVoipActivityTracker").clearAllActivityTracking(),
        t.abortController.abort());
    }
    l.cancelPendingOutgoingCall = s;
  },
  98,
);
