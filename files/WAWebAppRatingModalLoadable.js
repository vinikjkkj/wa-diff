__d(
  "WAWebAppRatingModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebAppRatingCommonFbt",
    "WAWebFbtCommon",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingConfirmPopup.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")("WAWebAppRatingModal.react")
          .__setRef("WAWebAppRatingModalLoadable")
          .load();
        return e;
      }, "AppRatingModal"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingConfirmPopup.react"), {
            title: o("WAWebAppRatingCommonFbt").getModalTitle(),
            okText: r("WAWebFbtCommon")("Submit"),
            error: !!t.error,
          });
        },
      });
    l.WAWebAppRatingModalLoadable = c;
  },
  98,
);
