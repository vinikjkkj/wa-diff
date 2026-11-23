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
    async function p(e, t, n, r, o) {
      if (!(await _(t, r, n, o))) return null;
      var a = await f(e, r, o);
      return a == null
        ? null
        : a.kind === "needs_confirmation"
          ? p(e, t, n, a.token, o)
          : a.kind === "published"
            ? a.url
            : !1;
    }
    async function _(e, t, n, r) {
      if (r.aborted) return !1;
      var a = t == null ? "plain" : "disclosure",
        i = d[a];
      (o("WAWebHatchLogging").logHatchArtifact(i.shown, n),
        r.addEventListener("abort", o("WDSDialogBridge").closeWDSDialog));
      try {
        var l = await o(
          "WAWebHatchConfirmPublishDialog.react",
        ).confirmHatchSpacePublish(e, a);
        if (r.aborted) return !1;
        var s = l ? i.confirmed : i.declined;
        return (s != null && o("WAWebHatchLogging").logHatchArtifact(s, n), l);
      } finally {
        r.removeEventListener("abort", o("WDSDialogBridge").closeWDSDialog);
      }
    }
    async function f(e, t, n) {
      var r = o("WAWebToast.react").genId("hatch-space-publishing");
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          duration: c,
          id: r,
          msg: s._(/*BTDS*/ ""),
        }),
      );
      try {
        return await o("WAWebHatchSpacePublish").publishHatchSpace(e, t, n);
      } finally {
        o("WAWebToastManager").ToastManager.close(r);
      }
    }
    l.publishHatchSpaceWithConsent = m;
  },
  226,
);
