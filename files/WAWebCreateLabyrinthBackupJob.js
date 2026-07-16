__d(
  "WAWebCreateLabyrinthBackupJob",
  [
    "WAWebCreateLabyrinthBackupJobMutation.graphql",
    "WAWebLabyrinthDebugStateCache",
    "WAWebMexCreateLabyrinthBackupJob",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebCreateLabyrinthBackupJobMutation.graphql"));
    function c(e, t) {
      var n = o("WAWebMexCreateLabyrinthBackupJob").wasmResultToMexInput(e, t);
      return {
        device: babelHelpers.extends({}, n.device, { device_id: t.deviceId }),
        epoch_0: babelHelpers.extends({}, n.epoch_0),
        mailbox_root_key: n.mailbox_root_key,
        virtual_device: babelHelpers.extends({}, n.virtual_device, {
          vd_type: s,
        }),
      };
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = c(e, t),
            a = { input: n },
            i = yield o("WAWebRelayClient").commitMutation(u, a, {
              environmentType: "whatsapp_web",
            });
          if (i == null)
            throw r("err")(
              "Native Labyrinth create-backup GraphQL response was empty",
            );
          return (p(e, i), i);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      var n = t.wa_labyrinth_create_backup;
      (n == null ? void 0 : n.__typename) === "WALabyrinthCreateBackupData" &&
        o("WAWebLabyrinthDebugStateCache").setLabyrinthDebugKeyMaterialCache({
          backupId: n.backup_id,
          ebDeviceId: n.device_id,
          epochAnonId: e.epoch0.epochAnonId,
          epochId: n.epoch_id,
          epochRootKey: e.epoch0.epochRootKey,
          mailboxRootKey: e.mailboxRootKey,
          orfClientState: e.device.ocmfClientState,
        });
    }
    l.createLabyrinthBackup = d;
  },
  98,
);
