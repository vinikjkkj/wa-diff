__d(
  "WAWebCryptoEncryptionSaltHelper",
  [
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebLogoutReasonConstants",
    "WAWebSocketLogoutJob",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      var t = 128,
        n = null;
      return (
        o("WAWebUserUtils").hasLoggedIn() ||
          ((n = new Uint8Array(t)),
          self.crypto.getRandomValues(n),
          (n = btoa(
            String.fromCharCode.apply(String, Array.from(new Uint8Array(n))),
          )),
          await o("WAWebUserPrefsMultiDevice").setWebEncSalt(n)),
        (n = o("WAWebUserPrefsMultiDevice").getWebEncSalt()),
        n == null &&
          (o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[DB ENC CRITICAL ERROR] null returned for local enc salt",
              ])),
          ),
          o("WAWebCoreActionsODS").logSessionForcedLogout(),
          o("WAWebSocketLogoutJob").socketLogout(
            o("WAWebLogoutReasonConstants").LogoutReason.MissingEncSalt,
          )),
        (n = Uint8Array.from(atob(n), function (e) {
          return e.charCodeAt(0);
        })),
        Promise.resolve(n)
      );
    }
    async function u() {
      await o("WAWebUserPrefsMultiDevice").setWebEncSalt(null);
    }
    ((l.getOrGenSalt = s), (l.deleteSalt = u));
  },
  98,
);
