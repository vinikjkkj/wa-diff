__d(
  "WAWebHandleSingleMsgWorker",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return function (t) {
        return e.sendAndReceive("mainthread_callbacks", "handleSingleMsg", t);
      };
    }
    i.createHandleSingleMsgWorker = e;
  },
  66,
);
