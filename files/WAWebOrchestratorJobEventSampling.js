__d(
  "WAWebOrchestratorJobEventSampling",
  [],
  function (t, n, r, o, a, i) {
    var e = {
        sendMessage: 10,
        createLidPnMappings: 10,
        updateLidMetadata: 10,
        getAllUserDisclosures: 10,
        handleBusinessNotification: 5,
        syncMyDeviceList: 5,
        receiptBatcherRunActiveBatches: 5,
        updateDraftMessageChat: 5,
      },
      l = { JOB_EVENT_SAMPLING_RATE: e };
    i.default = l;
  },
  66,
);
