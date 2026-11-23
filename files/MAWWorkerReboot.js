__d(
  "MAWWorkerReboot",
  [
    "EBIsEbEnabled",
    "FBLogger",
    "MAWSetupWorker",
    "MAWWaitForBackendSetup",
    "ODS",
    "QPLUserFlow",
    "getErrorSafe",
    "pageID",
    "qpl",
    "shouldUseMAWSharedWorker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("qpl")._(1056840252, "808");
    function u(t) {
      (e || (e = o("ODS"))).bumpEntityKey(
        3185,
        "armadillo_shared_worker_reboot",
        "shared_worker_reboot_" + t,
      );
    }
    var c = o("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker(),
      d = function (t) {
        switch (t) {
          case "bridge_recovery":
            return "bridgeRecovery";
          case "backend_setup_failure":
            return "backendSetupFailure";
        }
      };
    function m(e, t, n, a, i, l) {
      (r("QPLUserFlow").start(s, {
        annotations: {
          bool: { isSharedWorker: c },
          string: { trigger: i, workerInitPageID: r("pageID") },
        },
      }),
        r("FBLogger")("messenger_web").info("Rebooting worker started."),
        u("start"),
        o("MAWWaitForBackendSetup").resetBackendSetup());
      var m = d(i);
      return (
        r("QPLUserFlow").addPoint(s, "terminate_worker_start"),
        new Promise(function (i, c) {
          return o("MAWSetupWorker")
            .terminateWorker(m)
            .then(async function () {
              (r("QPLUserFlow").addPoint(s, "terminate_worker_end"),
                r("FBLogger")("messenger_web").info(
                  "Reboot process killed existing worker successfully.",
                ));
              var c;
              try {
                c = await o("EBIsEbEnabled").isEBEnabled();
              } catch (e) {
                (r("FBLogger")("wmi_eb").mustfix(
                  "Failed to get EB state during worker reboot: %s",
                  r("getErrorSafe")(e).message,
                ),
                  (c = void 0));
              }
              return o("MAWSetupWorker")
                .getOrSetupWorker(e, t, n, a, m, l, c)
                .then(function (e) {
                  (r("FBLogger")("messenger_web").info(
                    "Rebooting worker success. Reason for reboot: %s",
                    m,
                  ),
                    u("success"),
                    r("QPLUserFlow").endSuccess(s),
                    t(e),
                    i());
                });
            })
            .catch(function (e) {
              (r("FBLogger")("messenger_web").info(
                "Rebooting worker failed. Error message: %s",
                e.message,
              ),
                u("fail"),
                r("QPLUserFlow").endFailure(s, e.message),
                o("MAWWaitForBackendSetup").rejectBackendSetup(e),
                c(e));
            });
        })
      );
    }
    ((l.BAD_STATE_RECOVERY_QPL = s), (l.rebootWorker = m));
  },
  98,
);
