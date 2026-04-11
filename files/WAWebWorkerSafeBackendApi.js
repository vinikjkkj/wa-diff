__d(
  "WAWebWorkerSafeBackendApi",
  ["WAWebBackendApi"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      o("WAWebBackendApi").fireAndForgetInternalDoNotUse(
        "workerSafeEvent",
        e,
        t,
      );
    }
    function s(e, t) {
      return o("WAWebBackendApi").sendAndReceiveInternalDoNotUse(
        "workerSafeEvent",
        e,
        t,
      );
    }
    ((l.workerSafeFireAndForget = e), (l.workerSafeSendAndReceive = s));
  },
  98,
);
