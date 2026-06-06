__d(
  "WAWebUsernameKeyVerificationFlow",
  [
    "Promise",
    "WAWebModalManager",
    "WAWebUsernameKeyVerificationModalLoadable",
    "WAWebUsernameUtils",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.initWithError,
            a = t.onInvalidKeyError,
            i = t.username,
            l = o("WAWebUsernameUtils").getLIDByUsername(i);
          return (
            l ||
            new (e || (e = n("Promise")))(function (e) {
              var t = u.jsx(
                o("WAWebUsernameKeyVerificationModalLoadable")
                  .UsernameKeyVerificationModalLoadable,
                {
                  username: i,
                  onKeyVerificationSuccess: function (n) {
                    return e(n);
                  },
                  onKeyVerificationCancel: function () {
                    return e(null);
                  },
                  initWithError: r === !0,
                  onInvalidKeyError: a,
                },
              );
              o("WAWebModalManager").ModalManager.open(t);
            })
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.usernameKeyVerificationFlow = c;
  },
  98,
);
