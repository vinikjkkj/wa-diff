__d(
  "EncryptedBackupsUtils",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      return Date.now() - t > o("WATimeUtils").DAY_MILLISECONDS * 30;
    };
    function s(e) {
      return JSON.stringify([e.author, e.chat, e.externalId]);
    }
    ((l.timestampOlderThan30Days = e), (l.convertWAMsgIdToStringId = s));
  },
  98,
);
