__d(
  "WAWebBrokerBackendInterface",
  ["WAWebBrokerGlobalAppState", "WAWebCrashlog", "WAWebInvocationDispatcher"],
  function (t, n, r, o, a, i, l) {
    var e = {
        setLogoutState: function (t) {
          return (
            (r("WAWebBrokerGlobalAppState").isLogoutInProgress = t),
            r("WAWebInvocationDispatcher").invoke("setLogoutState", [t])
          );
        },
        sendLogs: function (t, n) {
          return o("WAWebCrashlog").sendLogs(t, {
            sampling: n == null ? void 0 : n.sampling,
            separateEmployeeLog: n == null ? void 0 : n.separateEmployeeLog,
            employeeSampling: n == null ? void 0 : n.employeeSampling,
          });
        },
        deleteDbEncKeyCache: function () {
          return r("WAWebInvocationDispatcher").invoke(
            "deleteDbEncKeyCache",
            [],
          );
        },
        initDatabaseEncnKey: function (t) {
          return r("WAWebInvocationDispatcher").invoke("initDatabaseEncnKey", [
            t,
          ]);
        },
        generateFinalDbEncryptionAndFtsKey: function (t) {
          return r("WAWebInvocationDispatcher").invoke(
            "generateFinalDbEncryptionAndFtsKey",
            [t],
          );
        },
        setSchemaVersions: function (t) {
          return r("WAWebInvocationDispatcher").invoke("setSchemaVersions", [
            t,
          ]);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
