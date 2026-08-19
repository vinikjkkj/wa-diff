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
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 0.01,
      c = 22;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            r("WAWebCallCollection").activeCall != null ||
            r("WAWebCallCollection").pendingCallLink != null
          )
            return p("skipped_existing");
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
              g(t),
              (yield y(e, t)) ? (b(t), p("dispatched")) : p("superseded")
            );
          } catch (e) {
            return v(e, t);
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(t) {
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
    function _(e) {
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
    function f(e) {
      return r("WAWebCallCollection").pendingCallLink === e.pendingCallLink;
    }
    function g(e) {
      (r("WAWebCallCollection").setPendingCallLink(e.pendingCallLink),
        e.shouldShowPendingCallLink &&
          r("WAWebPipController").openVoipUiPiPForCallLink());
    }
    function h(e) {
      return f(e)
        ? r("WAWebCallCollection").activeCall == null
          ? !1
          : (r("WAWebCallCollection").setPendingCallLink(null), !0)
        : !0;
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.callLinkCode,
            a = e.isVideo,
            i = e.lobbyEntryPoint;
          if (
            (yield o("WAWebEnsureVoipInited").ensureVoipInitialized("call"),
            h(t))
          )
            return !1;
          var l = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (h(t)) return !1;
          if (l == null) throw r("err")("voip stack interface unavailable");
          t.didDispatchPreview = !0;
          var s = yield l.previewCallLink(
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
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      var t = r("WAWebCallCollection").activeCall;
      if (f(e) && e.didPreviewReturnVoidStatus) {
        (r("WAWebCallCollection").setPendingCallLink(null),
          e.shouldShowPendingCallLink &&
            t == null &&
            r("WAWebPipController").closePiP());
        return;
      }
      f(e) &&
        t != null &&
        t.isCallLink !== !0 &&
        r("WAWebCallCollection").setPendingCallLink(null);
    }
    function v(e, t) {
      if (!f(t)) return (_(e), p("superseded"));
      var n = r("WAWebCallCollection").activeCall;
      if (n != null) {
        if (
          ((!t.didDispatchPreview || n.isCallLink !== !0) &&
            r("WAWebCallCollection").setPendingCallLink(null),
          t.didPreviewReturnFailureStatus)
        )
          throw e;
        return (_(e), p("superseded"));
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
