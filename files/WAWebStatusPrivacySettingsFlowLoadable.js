__d(
  "WAWebStatusPrivacySettingsFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingModal.react",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebStatusPrivacySettingsModalFlow.react",
        )
          .__setRef("WAWebStatusPrivacySettingsFlowLoadable")
          .load();
        return e;
      }, "StatusPrivacySettingsFlow"),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), { error: !!t.error });
        },
      });
    l.StatusPrivacySettingsFlowLoadable = c;
  },
  98,
);
