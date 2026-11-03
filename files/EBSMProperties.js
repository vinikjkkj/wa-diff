__d(
  "EBSMProperties",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
        "encrypted_backups_virtual_devices",
        "secure_encrypted_backups_recovery_code_status",
        "device_metadata",
        "secure_encrypted_backups_epochs",
        "secure_encrypted_backups_client_state",
        "encrypted_backups",
        "experiences_shared_state",
        "auto_restore_opt_out",
      ],
      l = new Set([
        "secure_encrypted_backups_client_state",
        "secure_encrypted_backups_epochs",
      ]),
      s = {
        dbVersion: 5,
        mandatoryTables: l,
        persistedTables: new Set(e),
        persistedTablesArray: e,
      },
      u = s;
    i.default = u;
  },
  66,
);
