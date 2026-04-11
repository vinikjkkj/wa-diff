__d(
  "WAWebGroupDatabaseJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebDBGroupParticipant",
    "WAWebDBGroupsGroupMetadata",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "updateGroupMetadataTable",
          function (e) {
            return o("WAWebDBGroupsGroupMetadata").updateGroupMetadataTable(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted({ groupInfos: e });
    }
    function s(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "updateGroupParticipantTableWithoutDeviceSync",
          function (e) {
            return o(
              "WAWebDBGroupParticipant",
            ).updateGroupParticipantTableWithoutDeviceSync(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted({ groupInfos: e });
    }
    function u(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "markGroupParticipantStale",
          function (e) {
            return o("WAWebDBGroupParticipant").markGroupParticipantStale(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted({ group: e });
    }
    function c(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "bulkMarkGroupParticipantStale",
          function (e) {
            return o("WAWebDBGroupParticipant").bulkMarkGroupParticipantStale(
              e,
            );
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted({ groupIds: e });
    }
    function d(e, t, n) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "modifyGroupParticipant",
          function (e) {
            return o("WAWebDBGroupParticipant").modifyGroupParticipant(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted({ group: e, oldId: t, newId: n });
    }
    function m(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getGroupMetadata",
          function (e) {
            return o("WAWebDBGroupsGroupMetadata").getGroupMetadataUNSAFE(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted({ groupWid: e });
    }
    function p(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getGroupParticipant",
          function (e) {
            return o("WAWebDBGroupParticipant").getGroupParticipant(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted({ groupWid: e });
    }
    ((l.updateGroupMetadataTableJob = e),
      (l.updateGroupParticipantTableWithoutDeviceSyncJob = s),
      (l.markGroupParticipantStaleJob = u),
      (l.bulkMarkGroupParticipantStaleJob = c),
      (l.modifyGroupParticipantJob = d),
      (l.getGroupMetadataJob = m),
      (l.getGroupParticipantJob = p));
  },
  98,
);
