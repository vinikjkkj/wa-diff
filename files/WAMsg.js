__d(
  "WAMsg",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.author,
        n = e.chat,
        r = e.externalId;
      return n + "_" + r + "_" + t;
    }
    i.craftWAMsgIdString = e;
  },
  66,
);
