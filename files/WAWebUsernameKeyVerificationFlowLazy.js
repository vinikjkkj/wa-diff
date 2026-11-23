__d(
  "WAWebUsernameKeyVerificationFlowLazy",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(function () {
      return r("JSResourceForInteraction")("WAWebUsernameKeyVerificationFlow")
        .__setRef("WAWebUsernameKeyVerificationFlowLazy")
        .load();
    }, "UsernameKeyVerificationFlow");
    async function s(t) {
      var n = await e(),
        r = n.usernameKeyVerificationFlow;
      return r(t);
    }
    l.usernameKeyVerificationFlow = s;
  },
  98,
);
