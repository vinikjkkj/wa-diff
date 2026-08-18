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
            i = t.stackOverExistingModal,
            l = t.username,
            s = o("WAWebUsernameUtils").getLIDByUsername(l);
          if (s) return s;
          var c = i === !0;
          return new (e || (e = n("Promise")))(function (e) {
            var t = function (n) {
                (c && o("WAWebModalManager").ModalManager.closeSupportOrModal(),
                  e(n));
              },
              n = u.jsx(
                o("WAWebUsernameKeyVerificationModalLoadable")
                  .UsernameKeyVerificationModalLoadable,
                {
                  username: l,
                  onKeyVerificationSuccess: t,
                  onKeyVerificationCancel: function () {
                    return t(null);
                  },
                  initWithError: r === !0,
                  onInvalidKeyError: a,
                  dontCloseViaModalManager: c ? !0 : void 0,
                },
              );
            c
              ? o("WAWebModalManager").ModalManager.openSupportModal(n)
              : o("WAWebModalManager").ModalManager.open(n);
          });
        })),
        d.apply(this, arguments)
      );
    }
    l.usernameKeyVerificationFlow = c;
  },
  98,
);
