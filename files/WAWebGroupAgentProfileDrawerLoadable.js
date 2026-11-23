__d(
  "WAWebGroupAgentProfileDrawerLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebGroupAgentProfileDrawer.react",
        )
          .__setRef("WAWebGroupAgentProfileDrawerLoadable")
          .load();
        return e;
      }, "GroupAgentProfileDrawer"),
      d = r("WAWebLoadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingDrawer.react"), {
            title: s._(/*BTDS*/ ""),
            error: !!t.error,
          });
        },
      });
    l.GroupAgentProfileDrawerLoadable = d;
  },
  226,
);
