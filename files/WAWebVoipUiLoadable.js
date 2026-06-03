__d(
  "WAWebVoipUiLoadable",
  [
    "JSResourceForInteraction",
    "WAWebCallCollection",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebVoipActivityTracker",
    "WAWebVoipCallLinkLoadingPreview.react",
    "WAWebVoipInitEventEmitter",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          (e = o("WAWebVoipActivityTracker")).trackUiActivity(
            e.VoipUiActivity.VOIP_UI_BUNDLE_LOADING,
          );
          var t = yield r("JSResourceForInteraction")("WAWebVoipUi.react")
            .__setRef("WAWebVoipUiLoadable")
            .load();
          return (e.trackUiActivity(e.VoipUiActivity.VOIP_UI_BUNDLE_LOADED), t);
        }),
        "WAWebVoipUiLoadable",
      );
    function c() {
      typeof window.requestIdleCallback == "function" &&
        window.requestIdleCallback(function () {
          r("JSResourceForInteraction")("WAWebVoipUi.react")
            .__setRef("WAWebVoipUiLoadable")
            .load();
        });
    }
    o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()
      ? c()
      : o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.on(
          "voipInitSuccess",
          c,
        );
    var d = r("WAWebLoadable")({
      loader: u,
      loading: function (t) {
        var e = r("WAWebCallCollection").pendingCallLink;
        return e != null
          ? s.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), {
              isVideo: e.isVideo,
            })
          : s.jsx(s.Fragment, {});
      },
    });
    ((l.requireBundle = u), (l.WAWebVoipUiLoadable = d));
  },
  98,
);
