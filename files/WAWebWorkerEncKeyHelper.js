__d(
  "WAWebWorkerEncKeyHelper",
  [
    "WALogger",
    "WAWebDbEncryptionKey",
    "WAWebLogoutReasonConstants",
    "WAWebSocketLogoutJob",
    "WAWebUserPrefsCacheStorage",
    "WAWebUserPrefsKeys",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      var t = null;
      return (
        (t = await c()),
        t == null &&
          (o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[DB ENC CRITICAL ERROR] null returned for local enc salt",
              ])),
          ),
          await o("WAWebSocketLogoutJob").socketLogout(
            o("WAWebLogoutReasonConstants").LogoutReason.WebFailEncSalt,
          )),
        (t = Uint8Array.from(atob(t), function (e) {
          return e.charCodeAt(0);
        })),
        Promise.resolve(t)
      );
    }
    async function u() {
      var e = await s();
      if (!(!e || e.constructor !== Uint8Array))
        return o("WAWebDbEncryptionKey").DbEncKeyStore.init(e);
    }
    function c() {
      return o(
        "WAWebUserPrefsCacheStorage",
      ).userPrefsCacheStorage.getItemFromCacheStorage(
        o("WAWebUserPrefsKeys").MD_NOISE_KEYS.WEB_ENC_SALT,
      );
    }
    l.initEncSalt = u;
  },
  98,
);
