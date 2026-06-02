__d(
  "WAWebContactMsgInfoFlowLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingDrawer.react",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebContactMsgInfoFlow.react",
        )
          .__setRef("WAWebContactMsgInfoFlowLoadable")
          .load();
        return e;
      }, "ContactMsgInfoFlow"),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingDrawer.react"), {
            title: s._(/*BTDS*/ "Message info"),
            error: !!t.error,
          });
        },
      });
    ((l.requireBundle = c), (l.ContactMsgInfoFlowLoadable = d));
  },
  226,
);
