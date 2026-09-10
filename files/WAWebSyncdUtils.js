__d(
  "WAWebSyncdUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = l(e);
      return [e.remote.toString({ legacy: !0 }), e.id, e.fromMe ? "1" : "0", t];
    }
    function l(e) {
      var t = "0";
      return (
        e.participant &&
          !e.remote.isUser() &&
          !e.fromMe &&
          (t = e.participant.toString({ legacy: !0 })),
        t
      );
    }
    ((i.constructMsgKeySegmentsFromMsgKey = e),
      (i.extractParticipantForSync = l));
  },
  66,
);
