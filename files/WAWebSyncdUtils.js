__d(
  "WAWebSyncdUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return l(e.id);
    }
    function l(e) {
      var t = s(e);
      return [e.remote.toString({ legacy: !0 }), e.id, e.fromMe ? "1" : "0", t];
    }
    function s(e) {
      var t = "0";
      return (
        e.participant &&
          !e.remote.isUser() &&
          !e.fromMe &&
          (t = e.participant.toString({ legacy: !0 })),
        t
      );
    }
    ((i.constructMsgKeySegments = e),
      (i.constructMsgKeySegmentsFromMsgKey = l),
      (i.extractParticipantForSync = s));
  },
  66,
);
