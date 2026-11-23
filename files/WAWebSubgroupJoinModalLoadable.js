__d(
  "WAWebSubgroupJoinModalLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebSubgroupJoinModal.react",
        )
          .__setRef("WAWebSubgroupJoinModalLoadable")
          .load();
        return e;
      }, "SubgroupJoinModal"),
      d = r("WAWebLoadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingModal.react"), {
            title: s._(/*BTDS*/ ""),
            error: !!t.error,
          });
        },
      });
    l.SubgroupJoinModalLoadable = d;
  },
  226,
);
