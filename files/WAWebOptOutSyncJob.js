__d(
  "WAWebOptOutSyncJob",
  [
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebQueryOptOutListJob",
    "WAWebWorkerSafeBackendApi",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      if (
        o("WAWebMarketingMessagesUserFeedbackGatingUtils").isMMOptOutEnabled()
      ) {
        var e = await o("WAWebQueryOptOutListJob").fetchAndUpdateOptOutList();
        e.dhash != null &&
          e.dhash !== "" &&
          o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
            "updateOptOutListCollection",
            { wids: e.wids },
          );
      }
    }
    l.updateOptOutList = e;
  },
  98,
);
