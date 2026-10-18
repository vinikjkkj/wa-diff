__d(
  "WAWebVoipBlockedMicrophoneDialog",
  [
    "WAWebCallCollection",
    "WAWebCoreActionsODS",
    "WAWebVoipBlockedMicrophoneJoinState",
    "WAWebVoipCallStateUtils",
    "WAWebVoipDevicePermissionDialogLoader.react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      o(
        "WAWebVoipDevicePermissionDialogLoader.react",
      ).openDevicePermissionDialog(e, t, {
        action: "unmute",
        call: n,
        isBlocked: !0,
      });
    }
    function s(t, n) {
      var a = n.isDocPip,
        i = n.showGuide,
        l = r("WAWebCallCollection").activeCall;
      if (
        a ||
        l == null ||
        o("WAWebVoipCallStateUtils").isCallIncoming(l.getState()) ||
        o(
          "WAWebVoipBlockedMicrophoneJoinState",
        ).getBlockedMicrophoneJoinCallId() !== l.id
      ) {
        i();
        return;
      }
      var s = o(
        "WAWebVoipBlockedMicrophoneJoinState",
      ).claimBlockedMicrophonePrompt(l.id);
      o("WAWebVoipDevicePermissionDialogLoader.react")
        .loadDevicePermissionDialog()
        .then(function (n) {
          if (
            !(
              r("WAWebCallCollection").activeCall !== l ||
              o(
                "WAWebVoipBlockedMicrophoneJoinState",
              ).getBlockedMicrophoneJoinCallId() !== l.id
            )
          ) {
            if (n == null) {
              i();
              return;
            }
            (s || o("WAWebCoreActionsODS").logCallBlockedMicJoin("reopened"),
              e(t, n, l));
          }
        });
    }
    ((l.openBlockedMicrophoneDialog = e), (l.showBlockedMicrophoneDialog = s));
  },
  98,
);
