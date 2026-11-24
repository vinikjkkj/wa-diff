__d(
  "WAWebOpenGroupMembersRequests",
  [
    "WAWebGroupMemberListLogger",
    "WAWebGroupParticipantsFlow.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.chatId,
        n = e.entryPoint,
        r = e.onContactInfo,
        a = e.onVerification;
      (n != null &&
        o("WAWebGroupMemberListLogger").logGroupParticipantsFlowOpen(t, n),
        o("WAWebModalManager").ModalManager.open(
          s.jsx(o("WAWebGroupParticipantsFlow.react").GroupParticipantsFlow, {
            chatId: t,
            initialMembersTab: "requests",
            initialStep: o("WAWebGroupParticipantsFlow.react")
              .ParticipantsFlowStep.Participants,
            onContactInfo: r,
            onVerification: a,
          }),
          { transition: "modal-flow" },
        ));
    }
    l.default = u;
  },
  98,
);
