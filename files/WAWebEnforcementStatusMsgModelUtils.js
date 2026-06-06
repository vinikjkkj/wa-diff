__d(
  "WAWebEnforcementStatusMsgModelUtils",
  ["WAWebSuspendInformStatusMsgDataModelUtils", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return e.size === 0
            ? new Map()
            : o(
                "WAWebSuspendInformStatusMsgDataModelUtils",
              ).populateStatusMsgModels(Array.from(e), t, "admin");
        })),
        s.apply(this, arguments)
      );
    }
    l.populateStatusMsgModelsForEnforcement = e;
  },
  98,
);
