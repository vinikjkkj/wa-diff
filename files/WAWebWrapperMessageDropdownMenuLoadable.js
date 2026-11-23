__d(
  "WAWebWrapperMessageDropdownMenuLoadable",
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
          "WAWebWrapperMessageDropdownMenu.react",
        )
          .__setRef("WAWebWrapperMessageDropdownMenuLoadable")
          .load();
        return e;
      }, "WrapperMessageDropdownMenu"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    ((l.requireBundle = u), (l.WAWebWrapperMessageDropdownMenuLoadable = c));
  },
  98,
);
