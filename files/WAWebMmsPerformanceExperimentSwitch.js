__d(
  "WAWebMmsPerformanceExperimentSwitch",
  ["WAWebServerPropConstants"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e > o("WAWebServerPropConstants").DEFAULT_MAX_FILE_SIZE_BYTES;
    }
    l.shouldEncryptInChunks = e;
  },
  98,
);
