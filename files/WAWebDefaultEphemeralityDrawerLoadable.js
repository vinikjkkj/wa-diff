__d(
  "WAWebDefaultEphemeralityDrawerLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebDefaultEphemeralityDrawer.react",
        )
          .__setRef("WAWebDefaultEphemeralityDrawerLoadable")
          .load();
        return e;
      }, "DefaultEphemeralityDrawer"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.DefaultEphemeralityDrawerLoadable = c;
  },
  98,
);
