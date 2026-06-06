__d(
  "WAWebCryptoEncryptionSaltHelper",
  [
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebLogoutReasonConstants",
    "WAWebSocketLogoutJob",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      var t = 128,
        n = !!o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
        r = null;
      return (
        n ||
          ((r = new Uint8Array(t)),
          self.crypto.getRandomValues(r),
          (r = btoa(
            String.fromCharCode.apply(String, Array.from(new Uint8Array(r))),
          )),
          await o("WAWebUserPrefsMultiDevice").setWebEncSalt(r)),
        (r = o("WAWebUserPrefsMultiDevice").getWebEncSalt()),
        r == null &&
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
        (r = Uint8Array.from(atob(r), function (e) {
          return e.charCodeAt(0);
        })),
        Promise.resolve(r)
      );
    }
    async function u() {
      await o("WAWebUserPrefsMultiDevice").setWebEncSalt(null);
    }
    ((l.getOrGenSalt = s), (l.deleteSalt = u));
  },
  98,
);
