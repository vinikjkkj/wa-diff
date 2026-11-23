__d(
  "WAWebLabyrinthWasmPrepareAddPeerDevice",
  [
    "WALongInt",
    "WAResultOrError",
    "WAWebEBLabyrinthWaWasmReactorSingleton",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebLabyrinthWaWasm.pb",
    "WAWebLabyrinthWasmAddDevice",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      try {
        return await o(
          "WAWebEBLabyrinthWaWasmReactorSingleton",
        ).labyrinthWaCommand(
          {
            InputSpec: o("WAWebLabyrinthWaWasm.pb").LabyrinthWaCommandSpec,
            ResultSpec: o("WAWebLabyrinthWaWasm.pb")
              .PrepareAddPeerDeviceOutputSpec,
            validateResult: s,
          },
          {
            prepareAddPeerDeviceInput: {
              advSecret: e.advSecret,
              sealedPayload: e.sealedPayload,
              backupId: o("WALongInt").decimalStringToLongInt(e.backupId),
              userId: o("WALongInt").decimalStringToLongInt(
                e.waCanonicalUserFbid,
              ),
              companionIdentityPub: e.companionIdentityPublicKey,
              activeEpochId: o("WALongInt").decimalStringToLongInt(
                e.activeEpochId,
              ),
            },
          },
        );
      } catch (e) {
        return o("WAResultOrError").makeError({
          error: r("getErrorSafe")(e),
          kind: "exception",
        });
      }
    }
    function s(e) {
      var t = e.error,
        n = e.success;
      if (t != null)
        return o("WAResultOrError").makeError({
          error: t,
          kind: "wasm-output-error",
        });
      if (n == null)
        return o("WAResultOrError").makeError({ kind: "missing-output" });
      var r = o("WAWebLabyrinthWasmAddDevice").validatePreparedAddDevice(
        n.enrolment,
      );
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, r.value, {
              serverDataId: o("WAWebLabyrinthOpaqueTypes").makeServerDataId(
                o("WALongInt").longIntToDecimalString(n.serverDataId),
              ),
              companionDeviceBinding: o(
                "WAWebLabyrinthOpaqueTypes",
              ).makeCompanionDeviceBinding(n.companionDeviceBinding),
              reportedHistoryStartSec: u(n.historyStartTime),
            }),
          )
        : r;
    }
    function u(e) {
      var t = o("WALongInt").maybeNumber(e);
      return t == null || t <= 0
        ? null
        : o("WAWebLabyrinthOpaqueTypes").makeTimestampSeconds(t);
    }
    l.prepareAddPeerDeviceWasm = e;
  },
  98,
);
