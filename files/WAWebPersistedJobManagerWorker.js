__d(
  "WAWebPersistedJobManagerWorker",
  ["err"],
  function (t, n, r, o, a, i, l) {
    var e = {
      getJobManager: function () {
        throw r("err")(
          "PersistedJobManager: worker implementation not yet available",
        );
      },
      maybeCreateJob: function () {
        throw r("err")(
          "PersistedJobManager: worker implementation not yet available",
        );
      },
    };
    l.workerPersistedJobManagerHandler = e;
  },
  98,
);
