__d(
  "EncryptedBackupsUtils",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      return Date.now() - t > o("WATimeUtils").DAY_MILLISECONDS * 30;
    };
    l.timestampOlderThan30Days = e;
  },
  98,
);
