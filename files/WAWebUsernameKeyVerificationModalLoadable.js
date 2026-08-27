__d(
  "WAWebUsernameKeyVerificationModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebUsernameKeyVerificationModal.react",
          )
            .__setRef("WAWebUsernameKeyVerificationModalLoadable")
            .load();
          return e;
        }),
        "UsernameKeyVerificationModal",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), { error: !!t.error });
        },
      });
    l.UsernameKeyVerificationModalLoadable = c;
  },
  98,
);
