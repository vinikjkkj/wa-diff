__d(
  "WAWebHatchSpacePublishFlow",
  [
    "fbt",
    "WAWebHatchConfirmPublishDialog.react",
    "WAWebHatchLogging",
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
      c = 24e4,
      d = {
        disclosure: {
          confirmed: "artifact_publish_consent_tap",
          declined: "artifact_publish_consent_cancel",
          shown: "artifact_publish_consent_impression",
        },
        plain: {
          confirmed: "artifact_publish_tap",
          declined: null,
          shown: "artifact_publish_sheet_impression",
        },
      };
    function m(e, t, n, r) {
      return p(e, t, n, null, r);
    }
    function p(e, t, n, r, o) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o) {
            if (!(yield f(t, r, n, o))) return null;
            var a = yield h(e, r, o);
            return a == null
              ? null
              : a.kind === "needs_confirmation"
                ? p(e, t, n, a.token, o)
                : a.kind === "published"
                  ? a.url
                  : !1;
          },
        )),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n, r) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (r.aborted) return !1;
            var a = t == null ? "plain" : "disclosure",
              i = d[a];
            (o("WAWebHatchLogging").logHatchArtifact(i.shown, n),
              r.addEventListener("abort", o("WDSDialogBridge").closeWDSDialog));
            try {
              var l = yield o(
                "WAWebHatchConfirmPublishDialog.react",
              ).confirmHatchSpacePublish(e, a);
              if (r.aborted) return !1;
              var s = l ? i.confirmed : i.declined;
              return (
                s != null && o("WAWebHatchLogging").logHatchArtifact(s, n),
                l
              );
            } finally {
              r.removeEventListener(
                "abort",
                o("WDSDialogBridge").closeWDSDialog,
              );
            }
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        y.apply(this, arguments)
      );
    }
    l.publishHatchSpaceWithConsent = m;
  },
  226,
);
