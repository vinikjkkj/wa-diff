__d(
  "WAWebListSubmenuContentLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebListSubmenuContent.react",
        )
          .__setRef("WAWebListSubmenuContentLoadable")
          .load();
        return e;
      }, "ListSubmenuContent"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    ((l.requireBundle = u), (l.ListSubmenuContentLoadable = c));
  },
  98,
);
