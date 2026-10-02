__d(
  "WAMessageLoggingPublisher",
  ["WAHashStringToNumber", "WAPubSub"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WAHashStringToNumber").hashStringToNumber(e);
    }
    var s = o("WAPubSub").simplePubSub();
    ((l.getWAIncomingMsgLoggingId = e), (l.messageLoggingPublisher = s));
  },
  98,
);
