__d(
  "WAWebEnforcementStatusMsgModelUtils",
  ["WAWebSuspendInformStatusMsgDataModelUtils"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      return e.size === 0
        ? new Map()
        : o(
            "WAWebSuspendInformStatusMsgDataModelUtils",
          ).populateStatusMsgModels(Array.from(e), t, "admin");
    }
    l.populateStatusMsgModelsForEnforcement = e;
  },
  98,
);
