__d(
  "WAWebUsernameKeyVerificationFlowLazy",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(function () {
      return r("JSResourceForInteraction")("WAWebUsernameKeyVerificationFlow")
        .__setRef("WAWebUsernameKeyVerificationFlowLazy")
        .load();
    }, "UsernameKeyVerificationFlow");
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield e(),
            r = n.usernameKeyVerificationFlow;
          return r(t);
        })),
        u.apply(this, arguments)
      );
    }
    l.usernameKeyVerificationFlow = s;
  },
  98,
);
