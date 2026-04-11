__d(
  "VideoPlayerXImplSurface.react",
  [
    "CoreVideoPlayerAudioClient.react",
    "CoreVideoPlayerAutoplayClient.react",
    "VideoPlayerCaptionsAreaDeferred.react",
    "VideoPlayerHooks",
    "VideoPlayerIMFMetadataContext",
    "VideoPlayerInteractionOverlay.react",
    "VideoPlayerPortalingPlaceInfoProvider.react",
    "VideoPlayerWebSessionExtender.react",
    "cr:1222",
    "cr:1954434",
    "cr:2987",
    "cr:7266",
    "gkx",
    "react",
    "react-compiler-runtime",
    "useVideoPlayerDefaultLoadingIndicators",
    "useVideoPlayerUnifiedCVCProvider",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = s || (s = o("react")),
      d = s.useImperativeHandle,
      m = (e = n("cr:7266")) == null ? void 0 : e.VideoPlayerWithDebugOverlay;
    function p(e) {
      var t = o("react-compiler-runtime").c(27),
        a = e.apiRef,
        i = e.children,
        l = e.disableCVCSubscription,
        s = e.disableLoadingIndicator,
        p = e.disableLogging,
        _ = e.instreamVideoAdBreaksPlayer,
        f = e.playerFormat,
        g = e.subOrigin,
        h = e.videoFBID,
        y = e.videoPlayerIMFFromVideoMetadata,
        C = e.videoPlayerSpherical,
        b = s === void 0 ? !1 : s,
        v = (u || (u = o("VideoPlayerHooks"))).useController(),
        S = o(
          "VideoPlayerPortalingPlaceInfoProvider.react",
        ).useVideoPlayerPortalingPlaceInfo(),
        R,
        L;
      (t[0] !== v || t[1] !== S
        ? ((R = function () {
            return { controller: v, portalingPlaceInfo: S };
          }),
          (L = [v, S]),
          (t[0] = v),
          (t[1] = S),
          (t[2] = R),
          (t[3] = L))
        : ((R = t[2]), (L = t[3])),
        d(typeof a == "function" ? a : null, R, L));
      var E = p === !0 || l === !0,
        k;
      (t[4] !== f || t[5] !== g || t[6] !== E || t[7] !== h
        ? ((k = {
            disableSubscription: E,
            playerFormat: f,
            subOrigin: g,
            videoFBID: h,
          }),
          (t[4] = f),
          (t[5] = g),
          (t[6] = E),
          (t[7] = h),
          (t[8] = k))
        : (k = t[8]),
        o("useVideoPlayerUnifiedCVCProvider").useVideoPlayerUnifiedCVCProvider(
          k,
        ));
      var I = r("useVideoPlayerDefaultLoadingIndicators")(),
        T = I.loadingIndicatorElement,
        D = y != null ? y : null,
        x = b ? null : T,
        $,
        P,
        N;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = r("gkx")("24328")
            ? c.jsx(
                o("VideoPlayerInteractionOverlay.react")
                  .VideoPlayerInteractionOverlay,
                {},
              )
            : null),
          (N = n("cr:2987") != null ? c.jsx(n("cr:2987"), {}) : null),
          ($ = n("cr:1222") != null ? c.jsx(n("cr:1222"), {}) : null),
          (t[9] = $),
          (t[10] = P),
          (t[11] = N))
        : (($ = t[9]), (P = t[10]), (N = t[11]));
      var M;
      t[12] !== i || t[13] !== _
        ? ((M = c.jsxs(r("VideoPlayerCaptionsAreaDeferred.react"), {
            children: [i, _],
          })),
          (t[12] = i),
          (t[13] = _),
          (t[14] = M))
        : (M = t[14]);
      var w, A, F;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsx(r("CoreVideoPlayerAutoplayClient.react"), {})),
          (A = c.jsx(r("CoreVideoPlayerAudioClient.react"), {})),
          (F = n("cr:1954434") ? c.jsx(n("cr:1954434"), {}) : null),
          (t[15] = w),
          (t[16] = A),
          (t[17] = F))
        : ((w = t[15]), (A = t[16]), (F = t[17]));
      var O;
      t[18] !== g
        ? ((O = m ? c.jsx(m, { subOrigin: g }) : null),
          (t[18] = g),
          (t[19] = O))
        : (O = t[19]);
      var B;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = c.jsx(r("VideoPlayerWebSessionExtender.react"), {})),
          (t[20] = B))
        : (B = t[20]);
      var W;
      return (
        t[21] !== M || t[22] !== O || t[23] !== D || t[24] !== x || t[25] !== C
          ? ((W = c.jsxs(
              o("VideoPlayerIMFMetadataContext")
                .VideoPlayerIMFMetadataContextProvider,
              { value: D, children: [C, x, P, N, $, M, w, A, F, O, B] },
            )),
            (t[21] = M),
            (t[22] = O),
            (t[23] = D),
            (t[24] = x),
            (t[25] = C),
            (t[26] = W))
          : (W = t[26]),
        W
      );
    }
    l.default = p;
  },
  98,
);
