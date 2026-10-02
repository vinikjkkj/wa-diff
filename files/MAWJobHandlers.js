__d(
  "MAWJobHandlers",
  [
    "MAWAcceptGroupInvite",
    "MAWAddGroupParticipants",
    "MAWCreateGroup",
    "MAWDeleteThread",
    "MAWDemoteGroupParticipants",
    "MAWLeaveGroups",
    "MAWPromoteGroupParticipants",
    "MAWRemoveGroupParticipants",
    "MAWSetGroupSubject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return {
        acceptGroupInvite: o("MAWAcceptGroupInvite").acceptGroupInvite,
        addGroupParticipants: o("MAWAddGroupParticipants").addGroupParticipants,
        createGroup: o("MAWCreateGroup").createGroup,
        deleteThread: o("MAWDeleteThread").deleteThread,
        demoteGroupParticipants: o("MAWDemoteGroupParticipants")
          .demoteGroupParticipants,
        igdReportUserSpam: [],
        igdSendMsg: [],
        leaveGroups: o("MAWLeaveGroups").leaveGroupsJob,
        promoteGroupParticipants: o("MAWPromoteGroupParticipants")
          .promoteGroupParticipants,
        removeGroupParticipants: o("MAWRemoveGroupParticipants")
          .removeGroupParticipants,
        setGroupSubject: o("MAWSetGroupSubject").setGroupSubject,
      };
    }
    l.getJobHandlers = e;
  },
  98,
);
