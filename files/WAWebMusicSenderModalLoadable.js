__d(
  "WAWebMusicSenderModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebMusicSenderModal.react",
        )
          .__setRef("WAWebMusicSenderModalLoadable")
          .load();
        return e;
      }, "MusicSenderModal"),
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
