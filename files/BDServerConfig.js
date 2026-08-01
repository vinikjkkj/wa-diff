__d(
  "BDServerConfig",
  [
    "BDClientConfig",
    "BDLoggingConstants",
    "BDOperationLogHelper",
    "BDServerSignalConfig",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "BDServerConfig";
    function s(t) {
      var n = [];
      try {
        var a = JSON.parse(t.sc),
          i = new Map(a.c);
        if (
          (i.forEach(function (e, t) {
            return n.push(new (r("BDServerSignalConfig"))(t, e));
          }),
          i.size === 0)
        ) {
          o("BDOperationLogHelper").logError(
            e,
            o("BDLoggingConstants").OPERATIONS.EMPTY_SIGNAL_CONFIG,
          );
          return;
        }
        var l = r("BDClientConfig").get();
        l.setPeriodicCollectionIntervalSeconds(t.i)
          .addMultipleSignalsToClientConfig(n)
          .setConfigGenerationTimeStamp(a.t)
          .setAllTiersFlushDurationMinutes(t.fda)
          .setSuspiciousTiersFlushDurationMinutes(t.fds)
          .setHeartbeatIntervalMinutes(t.hbi)
          .setStaticSignalBufferSize(t.sbs)
          .setDynamicSignalBufferSize(t.dbs)
          .setBiometricSignalBufferSize(t.bbs)
          .setSID(t.sid)
          .setHeartbeatVersion(t.hbv)
          .setParsingDone(!0);
      } catch (t) {
        var s = r("getErrorSafe")(t);
        o("BDOperationLogHelper").logError(
          e,
          o("BDLoggingConstants").OPERATIONS.PARSE_CONFIG_ERROR,
          { e: s.message },
        );
      }
    }
    l.parseConfig = s;
  },
  98,
);
