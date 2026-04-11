__d(
  "WAWebUserPrefsBase",
  [
    "WALogger",
    "WAWebPermanentStorage",
    "WAWebUserPrefsKeys",
    "WAWebWidJsonReviver",
    "cr:34987",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (e = n("cr:34987")) != null ? e : {},
      c = u.notifySettingChangeHandler,
      d = [
        o("WAWebUserPrefsKeys").KEYS.WHATSAPP_MUTEX,
        o("WAWebUserPrefsKeys").KEYS.PRESERVED_USER_KEYS,
        o("WAWebUserPrefsKeys").MD_KEYS.INITIAL_HISTORY_SYNCED,
        o("WAWebUserPrefsKeys").MD_KEYS.WEB_ENC_SALT,
        o("WAWebUserPrefsKeys").UserPrefs.WebUiRefreshNuxAcknowledged,
      ],
      m = {
        isRawString: !1,
        ignoreCache: !1,
        shouldWriteToIdb: !0,
        storage: r("WAWebPermanentStorage"),
      },
      p = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.$1 = function (t, n) {
            return d.includes(t)
              ? r("WAWebPermanentStorage")
              : n != null
                ? n
                : m.storage;
          }),
          (t.get = function (t, n) {
            if (t == null)
              throw r("err")("UserPreferencesStoreBase.get called with no key");
            var e = t,
              a = this.$1(e, n == null ? void 0 : n.storage),
              i =
                (n == null ? void 0 : n.ignoreCache) == null
                  ? m.ignoreCache
                  : n.ignoreCache,
              l = a.getItem(e, i),
              u =
                (n == null ? void 0 : n.isRawString) == null
                  ? m.isRawString
                  : n.isRawString;
            if (u || l == null) return l;
            try {
              return JSON.parse(l, o("WAWebWidJsonReviver").jsonWidReviver);
            } catch (t) {
              (o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "UserPreferencesStoreBase.get(): failed: ",
                      "",
                    ])),
                  t.toString(),
                )
                .sendLogs("userprefs-parse-error"),
                a.removeItem(e));
              return;
            }
          }),
          (t.set = function (t, n, o) {
            if (t == null)
              throw r("err")("UserPreferencesStoreBase.set called with no key");
            var e = t,
              a = this.$1(e, o == null ? void 0 : o.storage);
            if (n == null) a.removeItem(e);
            else {
              var i =
                (o == null ? void 0 : o.isRawString) == null
                  ? m.isRawString
                  : o.isRawString;
              if (i)
                if (typeof n == "string") a.setItem(e, n);
                else
                  throw r("err")(
                    "UserPreferencesStoreBase.set: expecting string because isRawString is true",
                  );
              else {
                var l =
                  (o == null ? void 0 : o.shouldWriteToIdb) == null
                    ? m.shouldWriteToIdb
                    : o.shouldWriteToIdb;
                a.setItem(e, JSON.stringify(n), l);
              }
            }
            c == null || c(e, n);
          }),
          e
        );
      })(),
      _ = new p();
    ((l.ENFORCE_PERMANENT_STORAGE_KEYS = d),
      (l.UserPreferencesStoreBase = p),
      (l.userPreferencesStoreBase = _));
  },
  98,
);
