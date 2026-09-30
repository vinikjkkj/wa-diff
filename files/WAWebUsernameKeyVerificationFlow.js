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
            i = t.searchLogContext,
            l = t.stackOverExistingModal,
            s = t.username,
            c = o("WAWebUsernameUtils").getLIDByUsername(s);
          if (c) return c;
          var d = l === !0;
          return new (e || (e = n("Promise")))(function (e) {
            var t = function (n) {
                (d && o("WAWebModalManager").ModalManager.closeSupportOrModal(),
                  e(n));
              },
              n = u.jsx(
                o("WAWebUsernameKeyVerificationModalLoadable")
                  .UsernameKeyVerificationModalLoadable,
                {
                  username: s,
                  onKeyVerificationSuccess: t,
                  onKeyVerificationCancel: function () {
                    return t(null);
                  },
                  initWithError: r === !0,
                  onInvalidKeyError: a,
                  searchLogContext: i,
                  dontCloseViaModalManager: d ? !0 : void 0,
                },
              );
            d
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
