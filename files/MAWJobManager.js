__d(
  "MAWJobManager",
  [
    "MAWBridge",
    "MAWDefinePersistedJob",
    "MAWODSProxy",
    "WAOdsEnums",
    "WAPersistedJobManagerV2",
    "WAWaitForComms",
    "WAWaitForUserUnblocked",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (o("WAPersistedJobManagerV2").PersistedJobManager)({
      deprecatedJobs: {
        acceptGroupInvite: "NOOP",
        addGroupParticipants: "NOOP",
        createGroup: "NOOP",
        deleteMsgsForMe: "NOOP",
        demoteGroupParticipants: "NOOP",
        downloadAndHandleMedia: "NOOP",
        downloadAndRestoreMedia: "NOOP",
        handleFutureproofMsg: "NOOP",
        igdSendMsg: "NOOP",
        leaveGroups: "NOOP",
        markThreadAsRead: "NOOP",
        promoteGroupParticipants: "NOOP",
        removeCurrentDevice: "NOOP",
        removeGroupParticipants: "NOOP",
        restoreProtobufsFromEncryptedBackups: "NOOP",
        setGroupSubject: "NOOP",
      },
      isRestartAfterCrash: !1,
      listeners: {
        onJobFinished: function (t, n, r, a) {
          return (
            o("MAWODSProxy").odsBumpEntityKey({
              entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
              key: n + ".finished",
            }),
            o("MAWBridge")
              .getBridge()
              .fireAndForget(
                "event",
                "onJobFinished",
                { id: t, originalArgs: r, result: a, type: n },
                !0,
              ),
            null
          );
        },
        onJobStarted: function (t, n) {
          o("MAWODSProxy").odsBumpEntityKey({
            entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
            key: n + ".started",
          });
        },
      },
      offlineQueueCompletePromise: o(
        "WAWaitForUserUnblocked",
      ).waitForUserUnblocked(),
      readyPromise: o("WAWaitForComms").waitForComms(),
    });
    function s() {
      return o("MAWDefinePersistedJob").persistedJobsApi;
    }
    function u() {
      return e;
    }
    ((l.getPersistedJobsApi = s), (l.getJobManager = u));
  },
  98,
);
