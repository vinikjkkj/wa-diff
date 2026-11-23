__d(
  "WAWebMetaAiChatNullStateLoadable",
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
          "WAWebMetaAiChatNullState.react",
        )
          .__setRef("WAWebMetaAiChatNullStateLoadable")
          .load();
        return e;
      }, "MetaAiChatNullState"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    l.WAWebMetaAiChatNullStateLoadable = c;
  },
  98,
);
