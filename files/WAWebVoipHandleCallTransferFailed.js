__d(
  "WAWebVoipHandleCallTransferFailed",
  [
    "fbt",
    "WALogger",
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
      m = d || (d = o("react"));
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a = t.failure,
            i = t.rootCallCreatorJid,
            l = t.rootCallId,
            s = a === o("WAWebVoipWaCallEnums").CallTransferFailure.Terminal;
          s &&
            o(
              "WAWebVoipCallTransferEntryPointStore",
            ).WAWebVoipCallTransferEntryPointStore.remove(l, i);
          var d =
            (n = r("WAWebCallCollection").activeCall) == null ? void 0 : n.id;
          if (
            o("WAWebVoipTransferredCallRegistry").getLiveTransferredCallRootId(
              d,
            ) !== l
          ) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleCallTransferFailed: no live transfer for rootCallId=",
                  "",
                ])),
              l,
            );
            return;
          }
          o("WAWebVoipTransferredCallRegistry").markTransferredCallFailed(d);
          var m = a === o("WAWebVoipWaCallEnums").CallTransferFailure.Timeout;
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleCallTransferFailed: ending segment, failure=",
                "",
              ])),
            a,
          );
          try {
            var p = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            yield p == null
              ? void 0
              : p.endCall(
                  m
                    ? o("WAWebVoipSignalingEnums").EndCallReason.Timeout
                    : o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
                  m,
                );
          } catch (e) {
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallTransferFailed: endCall failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-call-transfer-failed-end-call");
          }
          (o("WAWebVoipUiManager").closeAllVoipWindows({
            callEnded: !0,
            surveyInteracted: !1,
          }),
            s ? g() : f());
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      o("WAWebToastManager").ToastManager.open(
        m.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Couldn't connect"),
        }),
      );
    }
    function g() {
      o("WAWebToastManager").ToastManager.open(
        m.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Call has ended"),
        }),
      );
    }
    ((l.handleCallTransferFailed = p),
      (l.showCallTransferCouldNotConnectToast = f));
  },
  226,
);
