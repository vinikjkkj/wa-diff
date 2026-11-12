__d(
  "WAWebVoipHandleCallAutoSwitch",
  [
    "WALogger",
    "WAWebCallCollection",
    "WAWebUserUtils",
    "WAWebVoipEventConstants",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipTransferredCallRegistry",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _;
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.currentCallId,
            n = e.oldCallId,
            a = r("WAWebCallCollection").activeCall;
          if (a == null) {
            var i = r("WAWebCallCollection").takeLastEndedCall(n);
            i != null
              ? yield h(i, t)
              : o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: CallAutoSwitch ignored, no active call",
                    ])),
                );
            return;
          }
          if (a.id !== n) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: CallAutoSwitch ignored, ",
                  " is not the active call",
                ])),
              n,
            );
            return;
          }
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: CallAutoSwitch ",
                " -> ",
                "",
              ])),
            n,
            t,
          ),
            b(a, t),
            (a.id = t),
            a.trigger("change:id"),
            r("WAWebCallCollection").trigger(
              o("WAWebVoipEventConstants").getChangeEvent(
                o("WAWebVoipEventConstants").VoipCallCollectionEvents
                  .ACTIVE_CALL_ID,
              ),
            ));
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
          var n;
          if (
            ((n = r("WAWebCallCollection").pendingCallTransferLobby) == null
              ? void 0
              : n.isJoining) === !0
          ) {
            o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: CallAutoSwitch: a transfer is connecting, not ending ",
                  "",
                ])),
              t,
            );
            return;
          }
          if (b(e, t)) {
            (o("WALogger").WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: CallAutoSwitch with no active call, ending ",
                  " that replaced ",
                  "",
                ])),
              t,
              e.id,
            ),
              o("WAWebVoipTransferredCallRegistry").markTransferredCallEnded(t),
              o("WAWebVoipTransferredCallRegistry").markTransferredCallFailed(
                t,
              ));
            try {
              var a = yield o(
                "WAWebVoipStackInterface",
              ).getVoipStackInterface();
              if (C()) {
                var i;
                (o("WALogger").WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: CallAutoSwitch: a call started here, not ending ",
                      "",
                    ])),
                  t,
                ),
                  ((i = r("WAWebCallCollection").activeCall) == null
                    ? void 0
                    : i.id) === t &&
                    o(
                      "WAWebVoipTransferredCallRegistry",
                    ).clearTransferredCallEndMarks(t));
                return;
              }
              yield a == null
                ? void 0
                : a.endCall(
                    o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
                    !0,
                  );
            } catch (e) {
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: CallAutoSwitch: ending the unseen segment failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-call-auto-switch-end-unseen-segment-failed");
            }
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      var e;
      return (
        r("WAWebCallCollection").activeCall != null ||
        r("WAWebCallCollection").pendingOutgoingCall != null ||
        r("WAWebCallCollection").pendingCallLink != null ||
        ((e = r("WAWebCallCollection").pendingCallTransferLobby) == null
          ? void 0
          : e.isJoining) === !0
      );
    }
    function b(e, t) {
      return (
        o("WAWebVoipTransferredCallRegistry").rekeyTransferredCall(e.id, t) ||
        v(e, t)
      );
    }
    function v(t, n) {
      var r = t.outgoing ? o("WAWebUserUtils").getMeUserOrThrow() : t.peerJid;
      return r == null
        ? (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: CallAutoSwitch: no peer for ",
                  ", call log not carried over",
                ])),
              t.id,
            )
            .sendLogs("voip-call-auto-switch-no-root"),
          !1)
        : (o("WAWebVoipTransferredCallRegistry").registerTransferredCall(n, {
            rootCallId: t.id,
            rootCallCreatorWid: r,
          }),
          !0);
    }
    l.handleCallAutoSwitch = f;
  },
  98,
);
