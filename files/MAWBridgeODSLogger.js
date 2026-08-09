__d(
  "MAWBridgeODSLogger",
  ["ExecutionEnvironment", "MAWODSProxy", "WAOdsEnums"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return (e || (e = r("ExecutionEnvironment"))).isInWorker
        ? "worker"
        : "ui";
    }
    function u() {
      o("MAWODSProxy").odsBumpEntityKey({
        entity: o("WAOdsEnums").Entity.MAW_BRIDGE,
        key: "portError." + s(),
      });
    }
    l.logCrossWorkerPortalPortErrorODS = u;
  },
  98,
);
