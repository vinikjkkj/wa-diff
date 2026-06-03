__d(
  "WAWebOptOutSyncJob",
  [
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebQueryOptOutListJob",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            o(
              "WAWebMarketingMessagesUserFeedbackGatingUtils",
            ).isMMOptOutEnabled()
          ) {
            var e = yield o(
              "WAWebQueryOptOutListJob",
            ).fetchAndUpdateOptOutList();
            e.dhash != null &&
              e.dhash !== "" &&
              o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
                "updateOptOutListCollection",
                { wids: e.wids },
              );
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.updateOptOutList = e;
  },
  98,
);
