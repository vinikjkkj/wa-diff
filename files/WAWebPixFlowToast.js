__d(
  "WAWebPixFlowToast",
  [
    "fbt",
    "WAWebConsumerPixStrings",
    "WAWebPathfinderHeldBackSurface",
    "WAWebPathfinderHeldBackToast",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = 6e4;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebPathfinderHeldBackSurface").HeldBackSurface.cast(
            o("WAWebPathfinderHeldBackSurface").captureHeldBackSurface(),
          );
          if (t == null) return e();
          var n = o("WAWebPathfinderHeldBackSurface").enterHeldBackSurface(t),
            r = window.setTimeout(n, c);
          try {
            yield e();
          } finally {
            (window.clearTimeout(r), n());
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      y(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Couldn't save Pix key"),
        }),
      );
    }
    function _() {
      y(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Pix key saved"),
        }),
      );
    }
    function f() {
      y(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(
            /*BTDS*/ "Couldn't update privacy settings. Please try again.",
          ),
        }),
      );
    }
    function g() {
      y(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: o(
            "WAWebConsumerPixStrings",
          ).getConsumerPixDeleteKeyDeletedToast(),
        }),
      );
    }
    function h() {
      y(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: o("WAWebConsumerPixStrings").getConsumerPixDeleteKeyErrorToast(),
        }),
      );
    }
    function y(e) {
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
      (l.showPixKeySaveFailedToast = p),
      (l.showPixKeySavedToast = _),
      (l.showPixVisibilityUpdateFailedToast = f),
      (l.showPixKeyDeletedToast = g),
      (l.showPixKeyDeleteFailedToast = h));
  },
  226,
);
