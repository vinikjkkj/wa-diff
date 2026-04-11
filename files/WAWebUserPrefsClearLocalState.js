__d(
  "WAWebUserPrefsClearLocalState",
  [
    "Promise",
    "WAWebLoggerImpl",
    "WAWebPermanentStorage",
    "WAWebTemporaryStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebUserPrefsTypes",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
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
    function u() {
      return r("WAWebUserPrefsStore").getKeys(
        r("WAWebTemporaryStorage"),
        o("WAWebUserPrefsTypes").TS_PRESERVE_KEYS,
        !0,
      );
    }
    function c() {
      r("WAWebTemporaryStorage").clear(u());
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = s(),
            a = [
              r("WAWebTemporaryStorage").clear(u()),
              r("WAWebPermanentStorage").clear(t),
            ];
          (r("gkx")("26258") && a.push(o("WAWebLoggerImpl").Logger.clearLogs()),
            yield (e || (e = n("Promise"))).all(a));
        })),
        m.apply(this, arguments)
      );
    }
    ((l.clearAllTemporaryStorageData = c), (l.clearAllLocalState = d));
  },
  98,
);
