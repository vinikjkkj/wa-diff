__d(
  "WAWebUsernameKeyVerificationFlow",
  [
    "WAWebModalManager",
    "WAWebUsernameKeyVerificationModalLoadable",
    "WAWebUsernameUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    async function u(e) {
      var t = e.initWithError,
        n = e.onInvalidKeyError,
        r = e.username,
        a = o("WAWebUsernameUtils").getLIDByUsername(r);
      return (
        a ||
        new Promise(function (e) {
          var a = s.jsx(
            o("WAWebUsernameKeyVerificationModalLoadable")
              .UsernameKeyVerificationModalLoadable,
            {
              username: r,
              onKeyVerificationSuccess: function (n) {
                return e(n);
              },
              onKeyVerificationCancel: function () {
                return e(null);
              },
              initWithError: t === !0,
              onInvalidKeyError: n,
            },
          );
          o("WAWebModalManager").ModalManager.open(a);
        })
      );
    }
    l.usernameKeyVerificationFlow = u;
  },
  98,
);
