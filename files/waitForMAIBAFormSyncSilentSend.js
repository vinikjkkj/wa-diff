__d(
  "waitForMAIBAFormSyncSilentSend",
  ["JSResourceForInteraction", "LWIMAIBACopilotGating"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("JSResourceForInteraction")("LWIFormSyncState").__setRef(
      "waitForMAIBAFormSyncSilentSend",
    );
    function s(t) {
      if (!o("LWIMAIBACopilotGating").isCopilotEntryEnabled()) return null;
      var n = e.getModuleIfRequireable();
      return n == null
        ? void 0
        : n.waitForLWIFormSyncSilentSend(t, n.LWI_FORM_SYNC_WATCHDOG_MS);
    }
    l.default = s;
  },
  98,
);
