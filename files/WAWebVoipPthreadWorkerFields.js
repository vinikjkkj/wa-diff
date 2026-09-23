__d(
  "WAWebVoipPthreadWorkerFields",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = Reflect.get(e, "workerID");
      return typeof t == "number" ? t : null;
    }
    i.getPthreadWorkerID = e;
  },
  66,
);
