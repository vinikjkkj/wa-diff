__d(
  "WAWebGroupHoverCardLoadable",
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
        var e = await r("JSResourceForInteraction")("WAWebGroupHoverCard.react")
          .__setRef("WAWebGroupHoverCardLoadable")
          .load();
        return e;
      }, "GroupHoverCard"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    l.GroupHoverCardLoadable = c;
  },
  98,
);
