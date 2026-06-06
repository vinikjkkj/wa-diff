__d(
  "WAWebAddContactToGroupFlowLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingModal.react",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebAddContactToGroupFlow.react",
        )
          .__setRef("WAWebAddContactToGroupFlowLoadable")
          .load();
        return e;
      }, "AddContactToGroupFlow"),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingModal.react"), {
            title: s._(/*BTDS*/ "Groups"),
            error: !!t.error,
          });
        },
      });
    ((l.requireBundle = c), (l.AddContactToGroupFlowLoadable = d));
  },
  226,
);
