__d(
  "EBDB",
  [
    "$InternalEnum",
    "FBLogger",
    "Promise",
    "QPLFlow",
    "WALogger",
    "WAResolvable",
    "Worm",
    "WormEarAsync",
    "WormIDbDriverEarAsync",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = n("$InternalEnum")({ UI: 0, Worker: 1 }),
      c = {
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
      d = 1e4,
      m = [16, 32],
      p = new (o("WAResolvable").Resolvable)();
    function _(e, t, n, r, o) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l) {
            var s,
              u = (s = a == null ? void 0 : a.byteLength) != null ? s : 0,
              _ = o("QPLFlow").startQPLFlow(n, {
                annotations: {
                  int: { env: i },
                  string: { operationType: "initEBDB" },
                },
                timeoutInMs: d,
              });
            if (a == null || !m.includes(u)) {
              var f =
                "EBDB initialization failed: Invalid encryption key. Expected 16 or 32 bytes (128 or 256 bits), got " +
                u +
                " bytes.";
              r("FBLogger")("messenger_web").mustfix(f);
            }
            try {
              var g = "ebdb",
                y = new (o("WormEarAsync").WormEarAsync)(c, g, a),
                b = new (o("Worm").WormDatabase)(
                  new (o("WormIDbDriverEarAsync").WormIDbDriverEarAsync)(
                    t,
                    g,
                    c,
                    y,
                    l,
                    {
                      onTransactionError: function (t) {
                        if (t instanceof o("WormEarAsync").DecryptionError) {
                          var e = t;
                          if (e.store === "device_state") {
                            h();
                            return;
                          } else C();
                        }
                      },
                      safeToDeleteStores: new Set(["migration"]),
                    },
                  ),
                  n,
                );
              (yield b.init({ eventFlow: _ }), _.endSuccess(), p.resolve(b));
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
                p.reject(t),
                t
              );
            }
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g() {
      return p.promise;
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield g();
          return e.runInTransaction(
            ["device_state"],
            "readwrite",
            function (e) {
              return e.stores.device_state.clear();
            },
            "EBDB - clearDeviceState",
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield g();
          yield e.runInTransaction(
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
              return (s || (s = n("Promise"))).all([
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
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield g();
          yield e.runInTransaction(
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
              return (s || (s = n("Promise"))).all([
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
        })),
        S.apply(this, arguments)
      );
    }
    ((l.EBDBEnvironment = u),
      (l.schema = c),
      (l.makeEBDB = _),
      (l.getEBDB = g),
      (l.clearDeviceState = h),
      (l.clearEbStores = C),
      (l.clearAll = v));
  },
  98,
);
