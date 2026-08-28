__d(
  "ZenonConnectionSdpSetState",
  ["ZenonMWMessageTypes", "ZenonParticipantState", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      (r("promiseDone")(
        e.signalingClient.sendClientEvent(
          o("ZenonMWMessageTypes").ZenonMWClientEventType.MEDIA_CONNECTED,
        ),
      ),
        e.updateConnectionModel(function (e) {
          (e.updateParticipantState(
            e.selfParticipantID,
            o("ZenonParticipantState").ZenonParticipantState.CONNECTED,
          ),
            e.updatePreferredCaptureConfigs());
        }));
    }
    function s(e) {
      (e.logEvent({ name: "callConnected" }),
        e.logEvent({ name: "connectionReady" }));
    }
    function u(t, n) {
      n.type === "connectionEstablished" && (e(t), s(t));
    }
    function c(t, n) {
      n.type === "connectionEstablished" && e(t);
    }
    var d = function (t, n) {
        return n.type !== "connectionEstablished"
          ? {}
          : { mediaConnectedBeforeAnswer: !0 };
      },
      m = function () {
        return { mediaConnectedBeforeAnswer: !1 };
      };
    function p(e, t) {
      e.mediaConnectedBeforeAnswer === !0 && s(e);
    }
    ((l.onConnectionEstablished = u),
      (l.onConnectionEstablishedBeforeAnswer = c),
      (l.markMediaConnectedBeforeAnswer = d),
      (l.resetMediaConnectedBeforeAnswer = m),
      (l.onRemoteSdpSet = p));
  },
  98,
);
