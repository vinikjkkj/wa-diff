__d(
  "BDOperationLogHelper",
  ["BDLoggingConstants", "BDOperationTypedLogger", "Random"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      c(e, o("BDLoggingConstants").LEVELS.INFO, t, n, r);
    }
    function s(e, t, n, r) {
      c(e, o("BDLoggingConstants").LEVELS.WARNING, t, n, r);
    }
    function u(e, t, n, r) {
      c(e, o("BDLoggingConstants").LEVELS.ERROR, t, n, r);
    }
    function c(e, t, n, a, i) {
      if ((a === void 0 && (a = {}), o("Random").coinflip(d(n)))) {
        if (a === null) {
          var l = new Error("opeartion info null");
          throw (l.stack, l);
        }
        ((a.source = e),
          new (r("BDOperationTypedLogger"))()
            .setLevel(t)
            .setDurationUs(i)
            .setOperation(n)
            .setComponent(o("BDLoggingConstants").COMPONENT_NAME)
            .setOperationInfo(a)
            .log());
      }
    }
    function d(e) {
      var t = o("BDLoggingConstants").OPERATIONS;
      switch (e) {
        case t.APPEND_SIGNAL:
        case t.HB_COLLECTED:
        case t.GET_LOCAL_STORAGE_ERROR:
        case t.WEB_STORAGE:
        case t.SIGNAL_NOT_IMPLEMENTED:
        case t.BIOMETRIC_SIGNAL_COLLECTION_STARTED:
          return 1e3;
        default:
          return 1;
      }
    }
    ((l.logInfo = e),
      (l.logWarning = s),
      (l.logError = u),
      (l.log = c),
      (l.getFlipSamplingByOperation = d));
  },
  98,
);
