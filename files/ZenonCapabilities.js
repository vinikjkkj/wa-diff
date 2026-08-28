__d(
  "ZenonCapabilities",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l,
        s,
        u = {
          AddParticipantEnabled: (t = e.addParticipantEnabled) != null ? t : !1,
          GROUP_COWATCH: (n = e.cowatchGroupEnabled) != null ? n : !1,
          MultipleVideoStreamsAllowed:
            (r = e.multipleVideoStreamsAllowed) != null ? r : !1,
          MW_AV_ESCALATION: (o = e.multiwayVideoEscalation) != null ? o : !1,
          canApproveCollaborationSpaceJoinRequests:
            (a = e.canApproveCollaborationSpaceJoinRequests) != null ? a : !1,
          cowatch: (i = e.cowatchEnabled) != null ? i : !1,
          screen_sharing: (l = e.screenSharingEnabled) != null ? l : !1,
          sctpSecondPc: (s = e.sctpSecondPcEnabled) != null ? s : !1,
        };
      return JSON.stringify(u);
    }
    i.capabilitiesToString = e;
  },
  66,
);
