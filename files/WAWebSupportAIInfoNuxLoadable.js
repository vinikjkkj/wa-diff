__d(
  "WAWebSupportAIInfoNuxLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingConfirmPopup.react",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebSupportAIInfoNux.react",
        )
          .__setRef("WAWebSupportAIInfoNuxLoadable")
          .load();
        return e;
      }, "SupportAIInfoChatNux"),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingConfirmPopup.react"), {
            error: !!t.error,
          });
        },
      });
    l.SupportAIInfoNuxLoadable = c;
  },
  98,
);
