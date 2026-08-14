__d(
  "getMWEncryptedBackupsIsLocalStorageSupported",
  ["FBLogger", "WebStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return (e || (e = r("WebStorage"))).getLocalStorage() == null
        ? (r("FBLogger")("wmi_eb").warn("Local storage not supported"), !1)
        : (e || (e = r("WebStorage"))).isLocalStorageQuotaExceeded()
          ? (r("FBLogger")("wmi_eb").warn("Local storage quota exceeded"), !1)
          : !0;
    }
    l.getMWEncryptedBackupsIsLocalStorageSupported = s;
  },
  98,
);
