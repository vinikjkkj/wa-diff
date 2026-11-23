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
    async function f(t) {
      var n,
        a = t.failure,
        i = t.rootCallCreatorJid,
        l = t.rootCallId,
        s = a === o("WAWebVoipWaCallEnums").CallTransferFailure.Terminal;
      s &&
        o(
          "WAWebVoipCallTransferEntryPointStore",
        ).WAWebVoipCallTransferEntryPointStore.remove(l, i);
      var c = (n = r("WAWebCallCollection").activeCall) == null ? void 0 : n.id;
      if (
        o("WAWebVoipTransferredCallRegistry").getLiveTransferredCallRootId(
          c,
        ) === l
      )
        (b(l),
          await g(c, a),
          o("WAWebVoipUiManager").closeAllVoipWindows({
            callEnded: !0,
            surveyInteracted: !1,
          }));
      else if (C(l))
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
          (await h(a, y)) &&
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
      s ? S() : v();
    }
    async function g(e, t) {
      (o("WAWebVoipTransferredCallRegistry").markTransferredCallFailed(e),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleCallTransferFailed: ending segment, failure=",
              "",
            ])),
          t,
        ),
        await h(t));
    }
    async function h(e, t) {
      if ((t === void 0 && (t = o("WAWebBoolFunc").returnTrue), !t()))
        return !1;
      var n = e === o("WAWebVoipWaCallEnums").CallTransferFailure.Timeout;
      try {
        var a = await o("WAWebVoipStackInterface").getVoipStackInterface();
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
        await (a == null
          ? void 0
          : a.endCall(
              n
                ? o("WAWebVoipSignalingEnums").EndCallReason.Timeout
                : o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
              n,
            ));
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
    }
    function y() {
      return (
        r("WAWebCallCollection").activeCall == null &&
        r("WAWebCallCollection").pendingOutgoingCall == null &&
        r("WAWebCallCollection").pendingCallLink == null
      );
    }
    function C(e) {
      var t = r("WAWebCallCollection").pendingCallTransferLobby;
      return (
        (t == null ? void 0 : t.isJoining) === !0 &&
        t.entryPoint.rootCallId === e
      );
    }
    function b(e) {
      var t;
      ((t = r("WAWebCallCollection").pendingCallTransferLobby) == null
        ? void 0
        : t.entryPoint.rootCallId) === e &&
        r("WAWebCallCollection").setPendingCallTransferLobby(null);
    }
    function v() {
      o("WAWebToastManager").ToastManager.open(
        _.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
      );
    }
    function S() {
      o("WAWebToastManager").ToastManager.open(
        _.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
      );
    }
    ((l.handleCallTransferFailed = f),
      (l.showCallTransferCouldNotConnectToast = v));
  },
  226,
);
