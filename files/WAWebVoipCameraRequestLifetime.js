__d(
  "WAWebVoipCameraRequestLifetime",
  ["WAAbortError", "WAPromiseRaceAbort", "WAWebNullFunc"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("WAWebNullFunc").returnNull;
    function s(t) {
      e = t;
    }
    function u() {
      return e();
    }
    function c(e) {
      var t;
      return (
        (e.isStopped == null ? void 0 : e.isStopped()) === !0 ||
        ((t = e.abortSignal) == null ? void 0 : t.aborted) === !0
      );
    }
    function d(e) {
      if (c(e))
        throw new (o("WAAbortError").AbortError)("Camera request stopped");
    }
    async function m(e, t) {
      d(t);
      var n = t.abortSignal,
        o = await r("WAPromiseRaceAbort")(e(), n);
      return (d(t), o);
    }
    ((l.registerCameraCaptureOwnerFactory = s),
      (l.getCameraCaptureOwner = u),
      (l.isCameraRequestStopped = c),
      (l.throwIfCameraRequestStopped = d),
      (l.awaitCameraRequest = m));
  },
  98,
);
