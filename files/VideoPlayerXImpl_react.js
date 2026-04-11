__d(
  "VideoPlayerXImpl.react",
  [
    "CoreVideoPlayerMetaData",
    "CoreVideoPlayerWithComponents.react",
    "VideoPlayerXImplSurface.react",
    "react",
    "react-compiler-runtime",
    "usePlayerOriginRouteTracePolicy",
    "useRouteProductAttribution",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "apiRef",
        "children",
        "disableLoadingIndicator",
        "implementations",
        "instreamVideoAdBreaksPlayer",
        "portalingEnabled",
        "portalingFromVideoID",
        "portalingPlaceMetaData",
        "portalingRenderPlaceholder",
        "videoPlayerIMFFromVideoMetadata",
        "videoPlayerSpherical",
      ],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(20),
        a = t.apiRef,
        i = t.children,
        l = t.disableLoadingIndicator,
        s = t.implementations,
        c = t.instreamVideoAdBreaksPlayer,
        d = t.portalingEnabled,
        m = t.portalingFromVideoID,
        p = t.portalingPlaceMetaData,
        _ = t.portalingRenderPlaceholder,
        f = t.videoPlayerIMFFromVideoMetadata,
        g = t.videoPlayerSpherical,
        h = babelHelpers.objectWithoutPropertiesLoose(t, e),
        y = r("usePlayerOriginRouteTracePolicy")(),
        C = r("useRouteProductAttribution")();
      C || (C = h.productAttribution);
      var b = o(
          "CoreVideoPlayerMetaData",
        ).applyDefaultsToCoreVideoPlayerMetaData(
          babelHelpers.extends({}, h, {
            productAttribution: C,
            routeTracePolicy: y,
          }),
        ),
        v;
      n[0] !== a ||
      n[1] !== i ||
      n[2] !== b.loggingConfig.disableCVCSubscription ||
      n[3] !== b.loggingConfig.disableLogging ||
      n[4] !== b.playerFormat ||
      n[5] !== b.subOrigin ||
      n[6] !== b.videoFBID ||
      n[7] !== l ||
      n[8] !== c ||
      n[9] !== f ||
      n[10] !== g
        ? ((v = u.jsx(r("VideoPlayerXImplSurface.react"), {
            apiRef: a,
            children: i,
            disableCVCSubscription: b.loggingConfig.disableCVCSubscription,
            disableLoadingIndicator: l,
            disableLogging: b.loggingConfig.disableLogging,
            instreamVideoAdBreaksPlayer: c,
            playerFormat: b.playerFormat,
            subOrigin: b.subOrigin,
            videoFBID: b.videoFBID,
            videoPlayerIMFFromVideoMetadata: f,
            videoPlayerSpherical: g,
          })),
          (n[0] = a),
          (n[1] = i),
          (n[2] = b.loggingConfig.disableCVCSubscription),
          (n[3] = b.loggingConfig.disableLogging),
          (n[4] = b.playerFormat),
          (n[5] = b.subOrigin),
          (n[6] = b.videoFBID),
          (n[7] = l),
          (n[8] = c),
          (n[9] = f),
          (n[10] = g),
          (n[11] = v))
        : (v = n[11]);
      var S;
      return (
        n[12] !== b ||
        n[13] !== s ||
        n[14] !== d ||
        n[15] !== m ||
        n[16] !== p ||
        n[17] !== _ ||
        n[18] !== v
          ? ((S = u.jsx(r("CoreVideoPlayerWithComponents.react"), {
              coreVideoPlayerMetaData: b,
              implementations: s,
              portalingEnabled: d,
              portalingFromVideoID: m,
              portalingPlaceMetaData: p,
              portalingRenderPlaceholder: _,
              children: v,
            })),
            (n[12] = b),
            (n[13] = s),
            (n[14] = d),
            (n[15] = m),
            (n[16] = p),
            (n[17] = _),
            (n[18] = v),
            (n[19] = S))
          : (S = n[19]),
        S
      );
    }
    l.default = c;
  },
  98,
);
