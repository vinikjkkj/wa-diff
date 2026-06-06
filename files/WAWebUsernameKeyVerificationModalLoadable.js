__d(
  "WAWebUsernameKeyVerificationModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingModal.react",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebUsernameKeyVerificationModal.react",
        )
          .__setRef("WAWebUsernameKeyVerificationModalLoadable")
          .load();
        return e;
      }, "UsernameKeyVerificationModal"),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), { error: !!t.error });
        },
      });
    l.UsernameKeyVerificationModalLoadable = c;
  },
  98,
);
