__d(
  "WAWebHatchSpacePublishFlow",
  [
    "fbt",
    "WAWebHatchConfirmPublishDialog.react",
    "WAWebHatchSpacePublish",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSDialogBridge",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = 24e4;
    function d(e, t, n) {
      return m(e, t, null, n);
    }
    function m(e, t, n, r) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (!(yield _(t, n, r))) return null;
            var o = yield g(e, n, r);
            return o == null
              ? null
              : o.kind === "needs_confirmation"
                ? m(e, t, o.token, r)
                : o.kind === "published"
                  ? o.url
                  : !1;
          },
        )),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (n.aborted) return !1;
          n.addEventListener("abort", o("WDSDialogBridge").closeWDSDialog);
          try {
            var r = yield o(
              "WAWebHatchConfirmPublishDialog.react",
            ).confirmHatchSpacePublish(e, t == null ? "plain" : "disclosure");
            return r && !n.aborted;
          } finally {
            n.removeEventListener("abort", o("WDSDialogBridge").closeWDSDialog);
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = o("WAWebToast.react").genId("hatch-space-publishing");
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              duration: c,
              id: r,
              msg: s._(/*BTDS*/ "Publishing\u2026"),
            }),
          );
          try {
            return yield o("WAWebHatchSpacePublish").publishHatchSpace(e, t, n);
          } finally {
            o("WAWebToastManager").ToastManager.close(r);
          }
        })),
        h.apply(this, arguments)
      );
    }
    l.publishHatchSpaceWithConsent = d;
  },
  226,
);
