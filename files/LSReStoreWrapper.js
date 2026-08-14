__d(
  "LSReStoreWrapper",
  [
    "LSReStoreQplLogger",
    "MessengerLogHistory",
    "ReStore",
    "ReStoreInstrumentation",
    "gkx",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i) {
      n === void 0 && (n = []);
      var l = o("ReStoreInstrumentation").instrument(
        r("ReStore")({
          config: {
            enableRejectingTransaction: r("gkx")("8566"),
            enableTransactionTimeout: r("gkx")("2947"),
            fbLoggerProject: "maw_db",
            odsCategoryID: 3185,
          },
          customMigration: a,
          hooks: n,
          loggers: {
            logHistory: o("MessengerLogHistory").getInstance("db_init"),
            transactionQplLogger: o("LSReStoreQplLogger").createQplLogger(
              r("qpl")._(25306500, "1488"),
            ),
            userFlow: i,
          },
          persistence: e,
          schema: t,
        }),
      );
      return l;
    }
    l.createLSReStore = e;
  },
  98,
);
