__d(
  "WAWebPixFlowToast",
  [
    "fbt",
    "WAWebConsumerPixStrings",
    "WAWebPathfinderHeldBackSurface",
    "WAWebPathfinderHeldBackToast",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = 6e4;
    async function d(e) {
      var t = o("WAWebPathfinderHeldBackSurface").HeldBackSurface.cast(
        o("WAWebPathfinderHeldBackSurface").captureHeldBackSurface(),
      );
      if (t == null) return e();
      var n = o("WAWebPathfinderHeldBackSurface").enterHeldBackSurface(t),
        r = window.setTimeout(n, c);
      try {
        await e();
      } finally {
        (window.clearTimeout(r), n());
      }
    }
    function m() {
      h(u.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }));
    }
    function p() {
      h(u.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }));
    }
    function _() {
      h(u.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }));
    }
    function f() {
      h(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: o(
            "WAWebConsumerPixStrings",
          ).getConsumerPixDeleteKeyDeletedToast(),
        }),
      );
    }
    function g() {
      h(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: o("WAWebConsumerPixStrings").getConsumerPixDeleteKeyErrorToast(),
        }),
      );
    }
    function h(e) {
      var t = o("WAWebPathfinderHeldBackSurface").HeldBackSurface.cast(
        o("WAWebPathfinderHeldBackSurface").captureHeldBackSurface(),
      );
      if (t == null) {
        o("WAWebToastManager").ToastManager.open(e);
        return;
      }
      o("WAWebPathfinderHeldBackToast").openHeldBackToast(t, function () {
        return o("WAWebToastManager").ToastManager.open(e);
      });
    }
    ((l.withinPixFlowHold = d),
      (l.showPixKeySaveFailedToast = m),
      (l.showPixKeySavedToast = p),
      (l.showPixVisibilityUpdateFailedToast = _),
      (l.showPixKeyDeletedToast = f),
      (l.showPixKeyDeleteFailedToast = g));
  },
  226,
);
