__d(
  "MWEncryptedBackupsFirstRestoreUpsellTime",
  [
    "EBAPIWorkerCheck",
    "FBLogger",
    "WebStorage",
    "getErrorSafe",
    "getMWEncryptedBackupsIsLocalStorageSupported",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "mw_encrypted_backups_restore_upsell_first_impression_time_key";
    function u() {
      var t = Date.now().toString();
      if (o("EBAPIWorkerCheck").runningInWorker()) return d(t);
      if (
        !o(
          "getMWEncryptedBackupsIsLocalStorageSupported",
        ).getMWEncryptedBackupsIsLocalStorageSupported()
      )
        return t;
      try {
        var n,
          a =
            (n = (e || (e = r("WebStorage"))).getLocalStorage()) == null
              ? void 0
              : n.getItem(s);
        if (a == null) {
          var i;
          return (
            (i = (e || (e = r("WebStorage"))).getLocalStorage()) == null ||
              i.setItem(s, t),
            t
          );
        }
        return a;
      } catch (e) {
        return (
          r("FBLogger")("wmi_eb").warn(
            "[labyrinth][web] Failed to set EB session identifier due to %s",
            r("getErrorSafe")(e).message,
          ),
          t
        );
      }
    }
    var c = null;
    function d(e) {
      return (c == null && (c = e), c);
    }
    ((l.MW_ENCRYPTED_BACKUPS_RESTORE_UPSELL_FIRST_IMPRESSION_TIME_KEY = s),
      (l.getFirstRestoreUpsellTime = u));
  },
  98,
);
