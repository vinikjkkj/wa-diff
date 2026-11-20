__d(
  "WAWebLabyrinthDebugAddDeviceController",
  [
    "WABase64",
    "WAResultOrError",
    "WAWebDebugLabyrinthAddDeviceJob",
    "WAWebDebugLabyrinthFetchVirtualDeviceInfoJob",
    "WAWebLabyrinthDebugDeviceStateStore",
    "WAWebLabyrinthEnrollmentGQLFields",
    "WAWebLabyrinthLocalIdentity",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebLabyrinthWasmAddDevice",
    "WAWebLabyrinthWasmDeriveVirtualDeviceId",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebLabyrinthOpaqueTypes").makeRecoveryCode(e),
            n = o("WAWebLabyrinthLocalIdentity").getLabyrinthLocalIdentity();
          if (!n.success) return o("WAResultOrError").makeError(n.error);
          var r = n.value,
            a = yield o(
              "WAWebLabyrinthWasmDeriveVirtualDeviceId",
            ).deriveVirtualDeviceIdWasm(t, r.waCanonicalUserFbid);
          if (!a.success)
            return o("WAResultOrError").makeError({
              error: a.error,
              kind: "derive-virtual-device-id-error",
            });
          var i = a.value,
            l = yield o(
              "WAWebDebugLabyrinthFetchVirtualDeviceInfoJob",
            ).fetchLabyrinthVirtualDeviceInfo(i);
          if (!l.success)
            return o("WAResultOrError").makeError({
              error: l.error,
              kind: "fetch-virtual-device-info-error",
            });
          var s = l.value,
            u = yield o("WAWebLabyrinthWasmAddDevice").prepareAddDeviceWasm({
              activeEpochId: s.activeEpochId,
              encryptedSecretValuesJson: s.encryptedSecretValuesJson,
              recoveryCode: t,
              syncEpochs: s.syncEpochs,
              virtualDeviceBaseEpochId: s.virtualDeviceBaseEpochId,
              waCanonicalUserFbid: r.waCanonicalUserFbid,
            });
          if (!u.success)
            return o("WAResultOrError").makeError({
              error: u.error,
              kind: "prepare-add-device-error",
            });
          if (!o("WAWebLabyrinthLocalIdentity").isCurrentLabyrinthIdentity(r))
            return o("WAResultOrError").makeError({
              kind: "local-account-changed",
            });
          var c = yield o("WAWebDebugLabyrinthAddDeviceJob").addLabyrinthDevice(
            babelHelpers.extends(
              {},
              o("WAWebLabyrinthEnrollmentGQLFields").enrollmentToGQLFields({
                activeEpochId: s.activeEpochId,
                enrollment: u.value.enrollment,
                localDeviceId: r.localDeviceId,
              }),
              { virtual_device_id: o("WABase64").encodeB64(i) },
            ),
          );
          if (!c.success)
            return o("WAResultOrError").makeError({
              error: c.error,
              kind: "add-device-error",
            });
          var d = c.value;
          if (!o("WAWebLabyrinthLocalIdentity").isCurrentLabyrinthIdentity(r))
            return o("WAResultOrError").makeError({
              kind: "local-account-changed-after-registration",
              registeredDevice: d,
            });
          var m = u.value.localState,
            p = yield o(
              "WAWebLabyrinthDebugDeviceStateStore",
            ).saveLabyrinthDebugBackup({
              activeEpoch: m.currentEpoch,
              backupId: d.backupId,
              device: {
                ebDeviceId: d.ebDeviceId,
                epochStorageAuthPrivateKey: null,
                epochStoragePrivateKey: m.epochStoragePrivateKey,
                localDeviceId: r.localDeviceId,
                mailboxRootSalt: m.mailboxRootSalt,
                orfClientState: m.orfClientState,
              },
              virtualDevice: null,
              waLabyrinthAccountId: s.waLabyrinthAccountId,
            });
          return p.success
            ? o("WAResultOrError").makeResult(d)
            : o("WAResultOrError").makeError({
                error: p.error,
                kind: "persist-device-state-error",
                registeredDevice: d,
              });
        })),
        s.apply(this, arguments)
      );
    }
    l.addLabyrinthDebugDevice = e;
  },
  98,
);
