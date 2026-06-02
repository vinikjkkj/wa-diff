__d(
  "WAWebGroupAppealRejectedModalLoadable",
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
          "WAWebGroupAppealRejectedModal.react",
        )
          .__setRef("WAWebGroupAppealRejectedModalLoadable")
          .load();
        return e;
      }, "GroupAppealRejectedModal"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    l.GroupAppealRejectedModalLoadable = c;
  },
  98,
);
