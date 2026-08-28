__d(
  "FXEncryptionUtils",
  ["asyncToGeneratorRuntime", "encryptPassword", "encryptPasswordEnums"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = Math.floor(Date.now() / 1e3).toString(),
            i = yield r("encryptPassword")(
              e,
              t,
              n,
              a,
              o("encryptPasswordEnums").EncryptPasswordAppID
                .ACCOUNTS_CENTER_VR_APP_ID,
              o("encryptPasswordEnums").EncryptPasswordClientToken
                .ACCOUNTS_CENTER_VR_CLIENT_TOKEN,
            );
          return i;
        })),
        s.apply(this, arguments)
      );
    }
    l.encryptPasswordAsVariable = e;
  },
  98,
);
