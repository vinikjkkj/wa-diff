__d(
  "WAWebCryptoEncryptionSaltHelper",
  [
    "Promise",
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebLogoutReasonConstants",
    "WAWebSocketLogoutJob",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = 128,
            r = !!o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
            a = null;
          return (
            r ||
              ((a = new Uint8Array(t)),
              self.crypto.getRandomValues(a),
              (a = btoa(
                String.fromCharCode.apply(
                  String,
                  Array.from(new Uint8Array(a)),
                ),
              )),
              yield o("WAWebUserPrefsMultiDevice").setWebEncSalt(a)),
            (a = o("WAWebUserPrefsMultiDevice").getWebEncSalt()),
            a == null &&
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
            (a = Uint8Array.from(atob(a), function (e) {
              return e.charCodeAt(0);
            })),
            (s || (s = n("Promise"))).resolve(a)
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebUserPrefsMultiDevice").setWebEncSalt(null);
        })),
        m.apply(this, arguments)
      );
    }
    ((l.getOrGenSalt = u), (l.deleteSalt = d));
  },
  98,
);
