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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _;
    async function f(t) {
      var n = t.currentCallId,
        a = t.oldCallId,
        i = r("WAWebCallCollection").activeCall;
      if (i == null) {
        var l = r("WAWebCallCollection").takeLastEndedCall(a);
        l != null
          ? await g(l, n)
          : o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: CallAutoSwitch ignored, no active call",
                ])),
            );
        return;
      }
      if (i.id !== a) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: CallAutoSwitch ignored, ",
              " is not the active call",
            ])),
          a,
        );
        return;
      }
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "voip: CallAutoSwitch ",
            " -> ",
            "",
          ])),
        a,
        n,
      ),
        y(i, n),
        (i.id = n),
        i.trigger("change:id"),
        r("WAWebCallCollection").trigger(
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallCollectionEvents
              .ACTIVE_CALL_ID,
          ),
        ));
    }
    async function g(e, t) {
      var n;
      if (
        ((n = r("WAWebCallCollection").pendingCallTransferLobby) == null
          ? void 0
          : n.isJoining) === !0
      ) {
        o("WALogger").WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "voip: CallAutoSwitch: a transfer is connecting, not ending ",
              "",
            ])),
          t,
        );
        return;
      }
      if (y(e, t)) {
        (o("WALogger").WARN(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "voip: CallAutoSwitch with no active call, ending ",
              " that replaced ",
              "",
            ])),
          t,
          e.id,
        ),
          o("WAWebVoipTransferredCallRegistry").markTransferredCallEnded(t),
          o("WAWebVoipTransferredCallRegistry").markTransferredCallFailed(t));
        try {
          var a = await o("WAWebVoipStackInterface").getVoipStackInterface();
          if (h()) {
            var i;
            (o("WALogger").WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
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
          await (a == null
            ? void 0
            : a.endCall(
                o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
                !0,
              ));
        } catch (e) {
          o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: CallAutoSwitch: ending the unseen segment failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("voip-call-auto-switch-end-unseen-segment-failed");
        }
      }
    }
    function h() {
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
    function y(e, t) {
      return (
        o("WAWebVoipTransferredCallRegistry").rekeyTransferredCall(e.id, t) ||
        C(e, t)
      );
    }
    function C(e, t) {
      var n = e.outgoing ? o("WAWebUserUtils").getMeUserOrThrow() : e.peerJid;
      return n == null
        ? (o("WALogger")
            .WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: CallAutoSwitch: no peer for ",
                  ", call log not carried over",
                ])),
              e.id,
            )
            .sendLogs("voip-call-auto-switch-no-root"),
          !1)
        : (o("WAWebVoipTransferredCallRegistry").registerTransferredCall(t, {
            rootCallId: e.id,
            rootCallCreatorWid: n,
          }),
          !0);
    }
    l.handleCallAutoSwitch = f;
  },
  98,
);
