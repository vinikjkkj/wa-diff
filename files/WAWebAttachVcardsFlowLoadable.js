__d(
  "WAWebAttachVcardsFlowLoadable",
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
          "WAWebAttachVcardsFlow.react",
        )
          .__setRef("WAWebAttachVcardsFlowLoadable")
          .load();
        return e;
      }, "AttachVcardsFlow"),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingModal.react"), {
            title: s._(/*BTDS*/ "Send contacts"),
            error: !!t.error,
          });
        },
      });
    ((l.requireBundle = c), (l.AttachVcardsFlowLoadable = d));
  },
  226,
);
