__d(
  "WAWebMmsClientUsingDependencies",
  ["WAWebMmsClientCheckIfUploadExistsMethod", "WAWebMmsClientUploadMethod"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebMmsClientUploadMethod").buildUploadMethodWithDependencies(
          { mediaHosts: e.mediaHosts, networkStatus: e.networkStatus },
        ),
        n = o(
          "WAWebMmsClientCheckIfUploadExistsMethod",
        ).createCheckIfUploadExistsWithDependencies({
          mediaHosts: e.mediaHosts,
          networkStatus: e.networkStatus,
        });
      return { upload: t, checkIfUploadExists: n };
    }
    l.createPartialMmsClientUsingDependencies = e;
  },
  98,
);
