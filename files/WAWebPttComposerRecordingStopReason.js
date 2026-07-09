__d(
  "WAWebPttComposerRecordingStopReason",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum").Mirrored([
      "CANCEL_BUTTON",
      "PTT_TOO_SHORT",
      "SENT",
      "AI_THREAD_SWITCH",
      "OTHER",
    ]);
    function l(t) {
      var n = t.pttRecordingSession;
      n != null && (n.stop(e.AI_THREAD_SWITCH), (t.pttRecordingSession = null));
    }
    ((i.RecordingSessionStopReason = e),
      (i.cancelChatRecordingForThreadSwitch = l));
  },
  66,
);
