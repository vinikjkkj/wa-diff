__d(
  "WAWebVoipPreviewCallLinkAction",
  [
    "WALogger",
    "WAWebCallCollection",
    "WAWebEnsureVoipInited",
    "WAWebFrontendContactGetters",
    "WAWebPipController",
    "WAWebVoipCallBlockedModals",
    "WAWebVoipCallLinkBundlePreloader",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipStackInterface",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 0.01,
      c = 22;
    async function d(e) {
      if (
        r("WAWebCallCollection").activeCall != null ||
        r("WAWebCallCollection").pendingCallLink != null
      )
        return m("skipped_existing");
      if (e.callLinkCode.length !== c)
        throw (
          o("WAWebVoipCallBlockedModals").showCouldNotPlaceCallModal(),
          r("err")(
            "voip: invalid call-link token length " + e.callLinkCode.length,
          )
        );
      o("WAWebVoipCallLinkBundlePreloader").preloadCallLinkBundles();
      var t = {
        didDispatchPreview: !1,
        didPreviewReturnFailureStatus: !1,
        didPreviewReturnVoidStatus: !1,
        pendingCallLink: { isVideo: e.isVideo },
        shouldShowPendingCallLink: !o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getIsVoipInited(),
      };
      try {
        return (
          f(t),
          (await h(e, t)) ? (y(t), m("dispatched")) : m("superseded")
        );
      } catch (e) {
        return C(e, t);
      }
    }
    function m(t) {
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: call-link preview outcome=",
              "",
            ])),
          t,
        ),
        t
      );
    }
    function p(e) {
      o("WALogger")
        .ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: call-link preview error after ownership changed",
            ])),
        )
        .catching(r("getErrorSafe")(e))
        .sendLogs("voip-call-link-preview-superseded-error", { sampling: u });
    }
    function _(e) {
      return r("WAWebCallCollection").pendingCallLink === e.pendingCallLink;
    }
    function f(e) {
      (r("WAWebCallCollection").setPendingCallLink(e.pendingCallLink),
        e.shouldShowPendingCallLink &&
          r("WAWebPipController").openVoipUiPiPForCallLink());
    }
    function g(e) {
      return _(e)
        ? r("WAWebCallCollection").activeCall == null
          ? !1
          : (r("WAWebCallCollection").setPendingCallLink(null), !0)
        : !0;
    }
    async function h(e, t) {
      var n = e.callLinkCode,
        a = e.isVideo,
        i = e.lobbyEntryPoint;
      if (
        (await o("WAWebEnsureVoipInited").ensureVoipInitialized("call"), g(t))
      )
        return !1;
      var l = await o("WAWebVoipStackInterface").getVoipStackInterface();
      if (g(t)) return !1;
      if (l == null) throw r("err")("voip stack interface unavailable");
      t.didDispatchPreview = !0;
      var s = await l.previewCallLink(
        n,
        a,
        i,
        o("WAWebFrontendContactGetters").getMyUsername(),
      );
      if (typeof s == "number") {
        if (s !== 0)
          throw (
            (t.didPreviewReturnFailureStatus = !0),
            r("err")("voip: previewCallLink failed with status " + s)
          );
      } else t.didPreviewReturnVoidStatus = !0;
      return !0;
    }
    function y(e) {
      var t = r("WAWebCallCollection").activeCall;
      if (_(e) && e.didPreviewReturnVoidStatus) {
        (r("WAWebCallCollection").setPendingCallLink(null),
          e.shouldShowPendingCallLink &&
            t == null &&
            r("WAWebPipController").closePiP());
        return;
      }
      _(e) &&
        t != null &&
        t.isCallLink !== !0 &&
        r("WAWebCallCollection").setPendingCallLink(null);
    }
    function C(e, t) {
      if (!_(t)) return (p(e), m("superseded"));
      var n = r("WAWebCallCollection").activeCall;
      if (n != null) {
        if (
          ((!t.didDispatchPreview || n.isCallLink !== !0) &&
            r("WAWebCallCollection").setPendingCallLink(null),
          t.didPreviewReturnFailureStatus)
        )
          throw e;
        return (p(e), m("superseded"));
      }
      throw (
        r("WAWebCallCollection").setPendingCallLink(null),
        t.shouldShowPendingCallLink && r("WAWebPipController").closePiP(),
        e instanceof o("WAWebEnsureVoipInited").VoipInitUnavailableError ||
          o("WAWebVoipCallBlockedModals").showCouldNotPlaceCallModal(),
        e
      );
    }
    l.previewCallLinkWithVoipInit = d;
  },
  98,
);
