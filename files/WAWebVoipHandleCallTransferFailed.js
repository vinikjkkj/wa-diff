__d(
  "WAWebVoipHandleCallTransferFailed",
  [
    "fbt",
    "WALogger",
    "WAWebBoolFunc",
    "WAWebCallCollection",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebVoipCallTransferEntryPointStore",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipTransferredCallRegistry",
    "WAWebVoipUiManager",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p,
      _ = p || (p = o("react"));
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a = t.failure,
            i = t.rootCallCreatorJid,
            l = t.rootCallId,
            s = a === o("WAWebVoipWaCallEnums").CallTransferFailure.Terminal;
          s &&
            o(
              "WAWebVoipCallTransferEntryPointStore",
            ).WAWebVoipCallTransferEntryPointStore.remove(l, i);
          var c =
            (n = r("WAWebCallCollection").activeCall) == null ? void 0 : n.id;
          if (
            o("WAWebVoipTransferredCallRegistry").getLiveTransferredCallRootId(
              c,
            ) === l
          )
            (R(l),
              yield h(c, a),
              o("WAWebVoipUiManager").closeAllVoipWindows({
                callEnded: !0,
                surveyInteracted: !1,
              }));
          else if (S(l))
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleCallTransferFailed: closing the joining lobby, failure=",
                  "",
                ])),
              a,
            ),
              o(
                "WAWebVoipTransferredCallRegistry",
              ).markTransferredCallFailedForRoot(l),
              r("WAWebCallCollection").setPendingCallTransferLobby(null),
              (yield C(a, v)) &&
                o("WAWebVoipUiManager").closeAllVoipWindows({
                  callEnded: !0,
                  surveyInteracted: !1,
                }));
          else {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleCallTransferFailed: no live transfer for rootCallId=",
                  "",
                ])),
              l,
            );
            return;
          }
          s ? E() : L();
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (o("WAWebVoipTransferredCallRegistry").markTransferredCallFailed(e),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleCallTransferFailed: ending segment, failure=",
                  "",
                ])),
              t,
            ),
            yield C(t));
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if ((t === void 0 && (t = o("WAWebBoolFunc").returnTrue), !t()))
            return !1;
          var n = e === o("WAWebVoipWaCallEnums").CallTransferFailure.Timeout;
          try {
            var a = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (!t())
              return (
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: handleCallTransferFailed: a call started here, not ending the transfer",
                    ])),
                ),
                !1
              );
            yield a == null
              ? void 0
              : a.endCall(
                  n
                    ? o("WAWebVoipSignalingEnums").EndCallReason.Timeout
                    : o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
                  n,
                );
          } catch (e) {
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallTransferFailed: endCall failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-call-transfer-failed-end-call");
          }
          return !0;
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      return (
        r("WAWebCallCollection").activeCall == null &&
        r("WAWebCallCollection").pendingOutgoingCall == null &&
        r("WAWebCallCollection").pendingCallLink == null
      );
    }
    function S(e) {
      var t = r("WAWebCallCollection").pendingCallTransferLobby;
      return (
        (t == null ? void 0 : t.isJoining) === !0 &&
        t.entryPoint.rootCallId === e
      );
    }
    function R(e) {
      var t;
      ((t = r("WAWebCallCollection").pendingCallTransferLobby) == null
        ? void 0
        : t.entryPoint.rootCallId) === e &&
        r("WAWebCallCollection").setPendingCallTransferLobby(null);
    }
    function L() {
      o("WAWebToastManager").ToastManager.open(
        _.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Couldn't connect"),
        }),
      );
    }
    function E() {
      o("WAWebToastManager").ToastManager.open(
        _.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Call has ended"),
        }),
      );
    }
    ((l.handleCallTransferFailed = f),
      (l.showCallTransferCouldNotConnectToast = L));
  },
  226,
);
