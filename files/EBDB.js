__d(
  "EBDB",
  [
    "$InternalEnum",
    "FBLogger",
    "WALogger",
    "WAResolvable",
    "WMIQplFlow",
    "Worm",
    "WormEarAsync",
    "WormIDbDriverEarAsync",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("$InternalEnum")({ UI: 0, Worker: 1 }),
      u = {
        auto_restore_opt_out: { indexes: {}, primaryKey: "optOutKey" },
        device_metadata: { indexes: {}, primaryKey: "pk" },
        device_state: { indexes: {}, primaryKey: "env" },
        encrypted_backups: { indexes: {}, primaryKey: "pk" },
        encrypted_backups_virtual_devices: { indexes: {}, primaryKey: "pk" },
        experiences_shared_state: { indexes: {}, primaryKey: "stateKey" },
        secure_encrypted_backups_client_state: {
          indexes: {},
          primaryKey: "backupId",
        },
        secure_encrypted_backups_epochs: { indexes: {}, primaryKey: "epochId" },
        secure_encrypted_backups_recovery_code_status: {
          indexes: {},
          primaryKey: "pk",
        },
      },
      c = 1e4,
      d = [16, 32],
      m = new (o("WAResolvable").Resolvable)();
    async function p(t, n, a, i, l) {
      var s,
        p = (s = a == null ? void 0 : a.byteLength) != null ? s : 0,
        _ = o("WMIQplFlow").startQplFlow(n, {
          annotations: {
            int: { env: i },
            string: { operationType: "initEBDB" },
          },
          timeoutInMs: c,
        });
      if (a == null || !d.includes(p)) {
        var h =
          "EBDB initialization failed: Invalid encryption key. Expected 16 or 32 bytes (128 or 256 bits), got " +
          p +
          " bytes.";
        r("FBLogger")("messenger_web").mustfix(h);
      }
      try {
        var y = "ebdb",
          C = new (o("WormEarAsync").WormEarAsync)(u, y, a),
          b = new (o("Worm").WormDatabase)(
            new (o("WormIDbDriverEarAsync").WormIDbDriverEarAsync)(
              t,
              y,
              u,
              C,
              l,
              {
                onTransactionError: function (t) {
                  if (t instanceof o("WormEarAsync").DecryptionError) {
                    var e = t;
                    if (e.store === "device_state") {
                      f();
                      return;
                    } else g();
                  }
                },
                safeToDeleteStores: new Set(["migration"]),
              },
            ),
            n,
          );
        (await b.init({ eventFlow: _ }), _.endSuccess(), m.resolve(b));
      } catch (t) {
        throw (
          _.endFail("error"),
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Error performing makeEBDB: ",
                "",
              ])),
            t,
          ),
          m.reject(t),
          t
        );
      }
    }
    function _() {
      return m.promise;
    }
    async function f() {
      var e = await _();
      return e.runInTransaction(
        ["device_state"],
        "readwrite",
        function (e) {
          return e.stores.device_state.clear();
        },
        "EBDB - clearDeviceState",
      );
    }
    async function g() {
      var e = await _();
      await e.runInTransaction(
        [
          "encrypted_backups_virtual_devices",
          "secure_encrypted_backups_recovery_code_status",
          "device_metadata",
          "secure_encrypted_backups_epochs",
          "secure_encrypted_backups_client_state",
          "encrypted_backups",
          "experiences_shared_state",
          "auto_restore_opt_out",
        ],
        "readwrite",
        function (e) {
          return Promise.all([
            e.stores.encrypted_backups_virtual_devices.clear(),
            e.stores.secure_encrypted_backups_recovery_code_status.clear(),
            e.stores.device_metadata.clear(),
            e.stores.secure_encrypted_backups_epochs.clear(),
            e.stores.secure_encrypted_backups_client_state.clear(),
            e.stores.encrypted_backups.clear(),
            e.stores.experiences_shared_state.clear(),
            e.stores.auto_restore_opt_out.clear(),
          ]);
        },
        "EBDB - clearEbStores",
      );
    }
    async function h() {
      var e = await _();
      await e.runInTransaction(
        [
          "device_state",
          "encrypted_backups_virtual_devices",
          "secure_encrypted_backups_recovery_code_status",
          "device_metadata",
          "secure_encrypted_backups_epochs",
          "secure_encrypted_backups_client_state",
          "encrypted_backups",
          "experiences_shared_state",
          "auto_restore_opt_out",
        ],
        "readwrite",
        function (e) {
          return Promise.all([
            e.stores.device_state.clear(),
            e.stores.encrypted_backups_virtual_devices.clear(),
            e.stores.secure_encrypted_backups_recovery_code_status.clear(),
            e.stores.device_metadata.clear(),
            e.stores.secure_encrypted_backups_epochs.clear(),
            e.stores.secure_encrypted_backups_client_state.clear(),
            e.stores.encrypted_backups.clear(),
            e.stores.experiences_shared_state.clear(),
            e.stores.auto_restore_opt_out.clear(),
          ]);
        },
        "EBDB - clearAll",
      );
    }
    ((l.EBDBEnvironment = s),
      (l.schema = u),
      (l.makeEBDB = p),
      (l.getEBDB = _),
      (l.clearDeviceState = f),
      (l.clearEbStores = g),
      (l.clearAll = h));
  },
  98,
);
