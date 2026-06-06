__d(
  "WAWebUserPrefsClearLocalState",
  [
    "WAWebLoggerImpl",
    "WAWebPermanentStorage",
    "WAWebTemporaryStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebUserPrefsTypes",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").KEYS.PRESERVED_USER_KEYS,
          { storage: r("WAWebPermanentStorage") },
        ),
        t =
          e instanceof Array
            ? [].concat(
                o("WAWebUserPrefsTypes").LS_PRESERVE_KEYS,
                e.filter(function (e) {
                  return typeof e == "string";
                }),
              )
            : o("WAWebUserPrefsTypes").LS_PRESERVE_KEYS;
      return r("WAWebUserPrefsStore").getKeys(
        r("WAWebPermanentStorage"),
        t,
        !0,
      );
    }
    function s() {
      return r("WAWebUserPrefsStore").getKeys(
        r("WAWebTemporaryStorage"),
        o("WAWebUserPrefsTypes").TS_PRESERVE_KEYS,
        !0,
      );
    }
    function u() {
      r("WAWebTemporaryStorage").clear(s());
    }
    async function c() {
      var t = e(),
        n = [
          r("WAWebTemporaryStorage").clear(s()),
          r("WAWebPermanentStorage").clear(t),
        ];
      (r("gkx")("26258") && n.push(o("WAWebLoggerImpl").Logger.clearLogs()),
        await Promise.all(n));
    }
    ((l.clearAllTemporaryStorageData = u), (l.clearAllLocalState = c));
  },
  98,
);
