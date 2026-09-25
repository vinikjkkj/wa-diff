__d(
  "WAWebVoipPthreadWorkerFields",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = Reflect.get(e, "workerID");
      return typeof t == "number" ? t : null;
    }
    function l(e) {
      return Reflect.get(e, "loaded") === !0;
    }
    function s(e) {
      var t = Reflect.get(e, "pthread_ptr");
      return typeof t == "number" && t !== 0;
    }
    ((i.getPthreadWorkerID = e),
      (i.isPthreadWorkerLoaded = l),
      (i.isPthreadWorkerBound = s));
  },
  66,
);
