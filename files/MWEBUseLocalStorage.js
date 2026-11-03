__d(
  "MWEBUseLocalStorage",
  ["WALogger", "WebStorage", "getMWEncryptedBackupsIsLocalStorageSupported"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, n) {
      var a = t,
        i = n != null ? n : "true";
      if (
        o(
          "getMWEncryptedBackupsIsLocalStorageSupported",
        ).getMWEncryptedBackupsIsLocalStorageSupported()
      ) {
        var l;
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[labyrinth_web] Encrypted Backups key ",
              " written to local storage",
            ])),
          a,
        ),
          (l = (s || (s = r("WebStorage"))).getLocalStorage()) == null ||
            l.setItem(a, i));
      }
    }
    function c(e) {
      var t = e;
      if (
        o(
          "getMWEncryptedBackupsIsLocalStorageSupported",
        ).getMWEncryptedBackupsIsLocalStorageSupported()
      ) {
        var n;
        (n = (s || (s = r("WebStorage"))).getLocalStorage()) == null ||
          n.removeItem(t);
      }
    }
    function d(e) {
      if (
        o(
          "getMWEncryptedBackupsIsLocalStorageSupported",
        ).getMWEncryptedBackupsIsLocalStorageSupported()
      ) {
        var t,
          n = e;
        return (t = (s || (s = r("WebStorage"))).getLocalStorageForRead()) ==
          null
          ? void 0
          : t.getItem(n);
      }
      return null;
    }
    function m(e) {
      if (
        o(
          "getMWEncryptedBackupsIsLocalStorageSupported",
        ).getMWEncryptedBackupsIsLocalStorageSupported()
      ) {
        var t,
          n = e;
        return (
          ((t = (s || (s = r("WebStorage"))).getLocalStorageForRead()) == null
            ? void 0
            : t.getItem(n)) != null
        );
      }
      return !0;
    }
    ((l.mwEBCreateLocalStorageEntry = u),
      (l.mwEBDeleteLocalStorageEntry = c),
      (l.mwEBGetLocalStorageEntryValue = d),
      (l.mwEBGetIsLocalStorageEntryValuePresent = m));
  },
  98,
);
