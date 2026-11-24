__d(
  "WAWebVoipUiLoadable",
  [
    "JSResourceForInteraction",
    "WAWebCallCollection",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebVoipActivityTracker",
    "WAWebVoipCallLinkLoadingPreview.react",
    "WAWebVoipHiddenPrewarmIdleWork",
    "WAWebVoipIncomingLoadingPreview.react",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipOutgoingLoadingPreview.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e;
        (e = o("WAWebVoipActivityTracker")).trackUiActivity(
          e.VoipUiActivity.VOIP_UI_BUNDLE_LOADING,
        );
        var t = await r("JSResourceForInteraction")("WAWebVoipUi.react")
          .__setRef("WAWebVoipUiLoadable")
          .load();
        return (e.trackUiActivity(e.VoipUiActivity.VOIP_UI_BUNDLE_LOADED), t);
      }, "WAWebVoipUiLoadable");
    function c() {
      typeof window.requestIdleCallback == "function" &&
        (o("WAWebVoipHiddenPrewarmIdleWork").requestHiddenPrewarmIdleWork(
          "ui_bundle",
          d,
        ) ||
          window.requestIdleCallback(d));
    }
    function d() {
      r("JSResourceForInteraction")("WAWebVoipUi.react")
        .__setRef("WAWebVoipUiLoadable")
        .load();
    }
    o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()
      ? c()
      : o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.on(
          "voipInitSuccess",
          c,
        );
    var m = r("WAWebLoadable")({
      loader: u,
      loading: function (t) {
        var e = r("WAWebCallCollection").pendingCallLink;
        if (e != null)
          return s.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), {
            isVideo: e.isVideo,
          });
        var n = r("WAWebCallCollection").pendingOutgoingCall;
        if (n != null)
          return s.jsx(r("WAWebVoipOutgoingLoadingPreview.react"), {
            isJoin: n.isJoin,
            isVideo: n.isVideo,
          });
        var o = r("WAWebCallCollection").activeCall;
        return (o == null ? void 0 : o.callLinkState) != null
          ? s.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), {
              isVideo: o.isVideo,
            })
          : o != null && !o.outgoing
            ? s.jsx(r("WAWebVoipIncomingLoadingPreview.react"), { call: o })
            : s.jsx(s.Fragment, {});
      },
      renderLoadingImmediately: !0,
    });
    ((l.requireBundle = u), (l.WAWebVoipUiLoadable = m));
  },
  98,
);
