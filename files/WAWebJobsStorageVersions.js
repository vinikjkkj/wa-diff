__d(
  "WAWebJobsStorageVersions",
  ["WAWebJobsStorageUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebJobsStorageUtils").getStorage().versions.version(0);
    }
    function s() {
      return o("WAWebJobsStorageUtils").getStorage().versions.version(1);
    }
    ((l.jobsCreateV1Table = e), (l.jobsCreateV2Table = s));
  },
  98,
);
