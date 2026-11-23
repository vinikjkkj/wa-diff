__d(
  "WAWebCreateLabyrinthBackupJob",
  [
    "WAWebCreateLabyrinthBackupJobMutation.graphql",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebRelayClient",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebCreateLabyrinthBackupJobMutation.graphql"));
    async function u(e) {
      var t = { input: e },
        n = await o("WAWebRelayClient").commitMutation(s, t, {
          environmentType: "whatsapp_web",
        });
      if (n == null)
        throw r("err")(
          "Native Labyrinth create-backup GraphQL response was empty",
        );
      e: {
        var a = n.wa_labyrinth_create_backup;
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.__typename === "WALabyrinthCreateBackupData"
        ) {
          var i = a,
            l = i.backup_id,
            u = i.device_id,
            c = i.epoch_id,
            d = i.mailbox_id,
            m = i.vd_device_id;
          return babelHelpers.extends({}, n, {
            wa_labyrinth_create_backup: babelHelpers.extends({}, i, {
              backup_id:
                l == null ? l : o("WAWebLabyrinthOpaqueTypes").makeBackupId(l),
              device_id:
                u == null
                  ? u
                  : o("WAWebLabyrinthOpaqueTypes").makeEbDeviceId(u),
              epoch_id:
                c == null ? c : o("WAWebLabyrinthOpaqueTypes").makeEpochId(c),
              mailbox_id:
                d == null
                  ? d
                  : o("WAWebLabyrinthOpaqueTypes").makeWALabyrinthAccountId(d),
              vd_device_id:
                m == null
                  ? m
                  : o("WAWebLabyrinthOpaqueTypes").makeEbDeviceId(m),
            }),
          });
        }
        {
          var p = a;
          return babelHelpers.extends({}, n, { wa_labyrinth_create_backup: p });
        }
      }
    }
    l.createLabyrinthBackup = u;
  },
  98,
);
