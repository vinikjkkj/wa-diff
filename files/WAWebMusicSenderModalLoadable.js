__d(
  "WAWebMusicSenderModalLoadable",
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
            "WAWebMusicSenderModal.react",
          )
            .__setRef("WAWebMusicSenderModalLoadable")
            .load();
          return e;
        }),
        "MusicSenderModal",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          var e = t.error,
            n = t.retry;
          return e == null
            ? s.jsx(s.Fragment, {})
            : s.jsx(r("WAWebLoadingModal.react"), { error: !0, retry: n });
        },
      });
    l.WAWebMusicSenderModalLoadable = c;
  },
  98,
);
