__d(
  "WAWebDeleteExpiredPinsJob",
  [
    "WALogger",
    "WAWebAddonDeleteMsgs",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "deleteExpiredPins",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              yield o("WAWebAddonDeleteMsgs").deleteAddonMsgsByParentKeys({
                parentMsgKeys: t,
              });
            } catch (t) {
              throw (
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Expired pins deletion failed",
                    ])),
                ),
                t
              );
            }
          }),
        )
        .waitUntilCompleted();
    }
    l.deleteExpiredPins = s;
  },
  98,
);
