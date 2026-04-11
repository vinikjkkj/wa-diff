__d(
  "VideoPlayerComponentContainer.react",
  [
    "CometSSRRenderingStateHooks",
    "CometVisualCompletionAttributes",
    "VideoPlayerContexts",
    "VideoPlayerHooks",
    "VideoPlayerViewabilityProvider.react",
    "clearTimeout",
    "cr:6094",
    "react",
    "react-compiler-runtime",
    "setTimeout",
    "useBlockCappedListItemWhenPlayingVideo",
    "useDisableVirtualizationWhenPlayingVideo",
    "wrapWithContextProviders",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = e || (e = o("react")),
      d = e,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useRef,
      f = d.useState;
    function g(e) {
      var t = o("react-compiler-runtime").c(10),
        n = _(e),
        a,
        i;
      (t[0] !== e
        ? ((a = function () {
            n.current = e;
          }),
          (i = [e]),
          (t[0] = e),
          (t[1] = a),
          (t[2] = i))
        : ((a = t[1]), (i = t[2])),
        p(a, i));
      var l = f(!1),
        s = l[0],
        u = l[1],
        c;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = function () {
            var e = null;
            return {
              cleanup: function () {
                e && e();
              },
              pingNotIdle: function () {
                (e && e(), u(!1));
                var t = r("setTimeout")(function () {
                  u(!0);
                }, n.current);
                e = function () {
                  (r("clearTimeout")(t), (e = null));
                };
              },
            };
          }),
          (t[3] = c))
        : (c = t[3]);
      var d = f(c),
        m = d[0],
        g = m.cleanup,
        h = m.pingNotIdle,
        y,
        C;
      (t[4] !== g
        ? ((y = function () {
            return g;
          }),
          (C = [g]),
          (t[4] = g),
          (t[5] = y),
          (t[6] = C))
        : ((y = t[5]), (C = t[6])),
        p(y, C));
      var b;
      return (
        t[7] !== s || t[8] !== h
          ? ((b = { isIdle: s, pingNotIdle: h }),
            (t[7] = s),
            (t[8] = h),
            (t[9] = b))
          : (b = t[9]),
        b
      );
    }
    function h() {
      var e = o("react-compiler-runtime").c(18),
        t = f(!1),
        n = t[0],
        r = t[1],
        a = g(3e3),
        i = a.isIdle,
        l = a.pingNotIdle,
        s;
      e[0] !== l
        ? ((s = function () {
            (r(!0), l());
          }),
          (e[0] = l),
          (e[1] = s))
        : (s = e[1]);
      var u = s,
        c;
      e[2] !== l
        ? ((c = function () {
            (r(!1), l());
          }),
          (e[2] = l),
          (e[3] = c))
        : (c = e[3]);
      var d = c,
        m;
      e[4] !== l
        ? ((m = function () {
            (r(!0), l());
          }),
          (e[4] = l),
          (e[5] = m))
        : (m = e[5]);
      var p = m,
        _;
      e[6] !== l
        ? ((_ = function () {
            l();
          }),
          (e[6] = l),
          (e[7] = _))
        : (_ = e[7]);
      var h = _,
        y;
      e[8] !== l
        ? ((y = function () {
            l();
          }),
          (e[8] = l),
          (e[9] = y))
        : (y = e[9]);
      var C = y,
        b;
      return (
        e[10] !== n ||
        e[11] !== i ||
        e[12] !== h ||
        e[13] !== u ||
        e[14] !== d ||
        e[15] !== p ||
        e[16] !== C
          ? ((b = {
              isHovering: n,
              isIdle: i,
              onMouseDown: h,
              onMouseEnter: u,
              onMouseLeave: d,
              onMouseMove: p,
              onMouseUp: C,
            }),
            (e[10] = n),
            (e[11] = i),
            (e[12] = h),
            (e[13] = u),
            (e[14] = d),
            (e[15] = p),
            (e[16] = C),
            (e[17] = b))
          : (b = e[17]),
        b
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.children,
        a = h(),
        i = a.isHovering,
        l = a.isIdle,
        d = a.onMouseDown,
        m = a.onMouseEnter,
        p = a.onMouseLeave,
        _ = a.onMouseMove,
        f = a.onMouseUp,
        g = (s || (s = o("VideoPlayerHooks"))).useIsFullscreen(),
        y;
      t[0] !== g || t[1] !== l
        ? ((y = {
            0: "x5yr21d x10l6tqk x13vifvy xh8yej3",
            1: "x5yr21d x10l6tqk x13vifvy xh8yej3 xjfk50j",
          }[!!(g && l) << 0]),
          (t[0] = g),
          (t[1] = l),
          (t[2] = y))
        : (y = t[2]);
      var C;
      t[3] !== n || t[4] !== l
        ? ((C = c.jsx(
            (u || (u = o("VideoPlayerContexts"))).VideoPlayerMouseIdleContext
              .Provider,
            { value: l, children: n },
          )),
          (t[3] = n),
          (t[4] = l),
          (t[5] = C))
        : (C = t[5]);
      var b;
      t[6] !== i || t[7] !== C
        ? ((b = c.jsx(
            (u || (u = o("VideoPlayerContexts"))).VideoPlayerMouseHoverContext
              .Provider,
            { value: i, children: C },
          )),
          (t[6] = i),
          (t[7] = C),
          (t[8] = b))
        : (b = t[8]);
      var v;
      return (
        t[9] !== d ||
        t[10] !== m ||
        t[11] !== p ||
        t[12] !== _ ||
        t[13] !== f ||
        t[14] !== y ||
        t[15] !== b
          ? ((v = c.jsx(
              "div",
              babelHelpers.extends(
                { "aria-label": "Video player", className: y, role: "group" },
                r("CometVisualCompletionAttributes").IGNORE,
                {
                  onMouseDown: d,
                  onMouseEnter: m,
                  onMouseLeave: p,
                  onMouseMove: _,
                  onMouseUp: f,
                  children: b,
                },
              ),
            )),
            (t[9] = d),
            (t[10] = m),
            (t[11] = p),
            (t[12] = _),
            (t[13] = f),
            (t[14] = y),
            (t[15] = b),
            (t[16] = v))
          : (v = t[16]),
        v
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = "x5yr21d x10l6tqk x13vifvy xh8yej3"), (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== n
          ? ((i = c.jsx(
              "div",
              babelHelpers.extends(
                { "aria-label": "Video player", className: a, role: "group" },
                r("CometVisualCompletionAttributes").IGNORE,
                {
                  children: c.jsx(
                    (u || (u = o("VideoPlayerContexts")))
                      .VideoPlayerMouseHoverContext.Provider,
                    {
                      value: !1,
                      children: c.jsx(u.VideoPlayerMouseIdleContext.Provider, {
                        value: !1,
                        children: n,
                      }),
                    },
                  ),
                },
              ),
            )),
            (t[1] = n),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(79),
        a = e.children,
        i = e.implementationController,
        l = e.implementationExposedState,
        s = e.videoPlayerPassiveViewabilityInfo,
        d = l.activeCaptions,
        m = l.activeEmsgBoxes,
        p = l.availableAudioTracks,
        _ = l.availableVideoQualities,
        f = l.availableVideoTracks,
        g = l.bufferEnd,
        h = l.captionDisplayStyle,
        b = l.captionsLoaded,
        v = l.captionsVisible,
        S = l.currentAudioTrackID,
        R = l.currentVideoQuality,
        L = l.currentVideoTrackID,
        E = l.duration,
        k = l.ended,
        I = l.error,
        T = l.inbandCaptionsAutogenerated,
        D = l.inPlayStalling,
        x = l.internal_coreVideoPlayerMetaData,
        $ = l.isAbrEnabled,
        P = l.isDesktopPictureInPicture,
        N = l.isFullscreen,
        M = l.isLiveRewindActive,
        w = l.isLiveRewindAvailable,
        A = l.lastMuteReason,
        F = l.lastPauseReason,
        O = l.lastPlayedTimeMs,
        B = l.lastPlayReason,
        W = l.latencyLevel,
        q = l.loopCount,
        U = l.loopCurrent,
        V = l.muted,
        H = l.paused,
        G = l.playerInstanceKey,
        z = l.playerVersion,
        j = l.playerViewportDimensions,
        K = l.playing,
        Q = l.seekableRanges,
        X = l.seeking,
        Y = l.selectedVideoQuality,
        J = l.stalling,
        Z = l.streamInterrupted,
        ee = l.targetAudioTrack,
        te = l.targetPlaybackRate,
        ne = l.targetVideoQuality,
        re = l.videoFBID,
        oe = l.videoPixelsAspectRatio,
        ae = l.volume,
        ie = l.watchTimeMs,
        le = x.adClientToken,
        se = x.audioAvailabilityInfo,
        ue = x.autoplayGatingResult,
        ce = x.broadcastStatus,
        de = x.canAutoplay,
        me = x.disableDubbing,
        pe = x.initialTracePolicy,
        _e = x.isNCSR,
        fe = x.isPremiumMusicVideo,
        ge = x.pointerTrackingEnabled,
        he = x.volumeSetting,
        ye;
      t[0] !== a || t[1] !== ge
        ? ((ye =
            ge === !1 ? c.jsx(C, { children: a }) : c.jsx(y, { children: a })),
          (t[0] = a),
          (t[1] = ge),
          (t[2] = ye))
        : (ye = t[2]);
      var Ce = ye,
        be;
      t[3] !== i || t[4] !== l || t[5] !== s
        ? ((be = {
            implementationController: i,
            implementationExposedState: l,
            videoPlayerPassiveViewabilityInfo: s,
          }),
          (t[3] = i),
          (t[4] = l),
          (t[5] = s),
          (t[6] = be))
        : (be = t[6]);
      var ve;
      (t[7] !== i || t[8] !== be || t[9] !== s
        ? ((ve = {
            controller: i,
            coreVideoStates: be,
            videoPlayerPassiveViewabilityInfo: s,
          }),
          (t[7] = i),
          (t[8] = be),
          (t[9] = s),
          (t[10] = ve))
        : (ve = t[10]),
        n("cr:6094")(G, ve));
      var Se;
      if (
        t[11] !== d ||
        t[12] !== m ||
        t[13] !== le ||
        t[14] !== se ||
        t[15] !== ue ||
        t[16] !== p ||
        t[17] !== _ ||
        t[18] !== f ||
        t[19] !== ce ||
        t[20] !== g ||
        t[21] !== de ||
        t[22] !== h ||
        t[23] !== b ||
        t[24] !== v ||
        t[25] !== i ||
        t[26] !== S ||
        t[27] !== R ||
        t[28] !== L ||
        t[29] !== j ||
        t[30] !== me ||
        t[31] !== E ||
        t[32] !== k ||
        t[33] !== I ||
        t[34] !== D ||
        t[35] !== T ||
        t[36] !== pe ||
        t[37] !== G ||
        t[38] !== $ ||
        t[39] !== P ||
        t[40] !== N ||
        t[41] !== M ||
        t[42] !== w ||
        t[43] !== _e ||
        t[44] !== fe ||
        t[45] !== A ||
        t[46] !== F ||
        t[47] !== B ||
        t[48] !== O ||
        t[49] !== W ||
        t[50] !== q ||
        t[51] !== U ||
        t[52] !== V ||
        t[53] !== H ||
        t[54] !== z ||
        t[55] !== K ||
        t[56] !== Q ||
        t[57] !== X ||
        t[58] !== Y ||
        t[59] !== J ||
        t[60] !== Z ||
        t[61] !== ee ||
        t[62] !== te ||
        t[63] !== ne ||
        t[64] !== re ||
        t[65] !== oe ||
        t[66] !== s ||
        t[67] !== ae ||
        t[68] !== he ||
        t[69] !== ie ||
        t[70] !== Ce
      ) {
        var Re;
        (t[72] !== P || t[73] !== N || t[74] !== s
          ? ((Re = function (t) {
              return c.jsx(r("VideoPlayerViewabilityProvider.react"), {
                isDesktopPictureInPicture: P,
                isFullscreen: N,
                videoPlayerPassiveViewabilityInfo: s,
                children: t,
              });
            }),
            (t[72] = P),
            (t[73] = N),
            (t[74] = s),
            (t[75] = Re))
          : (Re = t[75]),
          (Se = o("wrapWithContextProviders").wrapWithContextProviders(Ce, [
            o("wrapWithContextProviders").makeRenderProviderFn(
              (u || (u = o("VideoPlayerContexts"))).VideoFBIDContext,
              re,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.StallingContext,
              J,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.PlayingContext,
              K,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.InPlayStallingContext,
              D,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.BufferEndContext,
              g,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.LastMuteReasonContext,
              A,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.LastPlayReasonContext,
              B,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.LastPauseReasonContext,
              F,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.PausedContext,
              H,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.CurrentAudioTrackIDContext,
              S,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.CurrentVideoTrackIDContext,
              L,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.CurrentVideoQualityContext,
              R,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.MutedContext,
              V,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.TargetAudioTrackContext,
              ee,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.VolumeContext,
              ae,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.SelectedVideoQualityContext,
              Y,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.SeekingContext,
              X,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.DurationContext,
              E,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.EndedContext,
              k,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.ErrorContext,
              I,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.DimensionsContext,
              j || null,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.InstanceKeyContext,
              G,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.ControllerContext,
              i,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.AvailableAudioTracksContext,
              p,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.AvailableVideoQualitiesContext,
              _,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.AvailableVideoTracksContext,
              f,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.PlayerVersionContext,
              z,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.IsAbrEnabledContext,
              $,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.TargetVideoQualityContext,
              ne,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.PlaybackRateContext,
              te,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.CanAutoplayContext,
              de,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.VolumeSettingContext,
              he,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.AutoplayGatingResultContext,
              ue,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.BroadcastStatusContext,
              ce,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.LoopCountContext,
              q,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.LoopCurrentContext,
              U,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.AdClientTokenContext,
              le,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.ActiveCaptionsContext,
              d,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.CaptionsVisibleContext,
              v,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.CaptionDisplayStyleContext,
              h,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.CaptionsLoadedContext,
              b,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.InbandCaptionsAutogeneratedContext,
              T,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.StreamInterruptedContext,
              Z,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.WatchTimeContext,
              ie,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.LastPlayedTimeContext,
              O,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.SeekableRangesContext,
              Q,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.LatencyLevelContext,
              W,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.IsLiveRewindActiveContext,
              M,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.IsLiveRewindAvailableContext,
              w,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.AudioAvailabilityInfoContext,
              se,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.IsNCSRContext,
              _e,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.IsPremiumMusicVideoContext,
              fe,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.InitialTracePolicyContext,
              pe,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.ActiveEmsgBoxesContext,
              m,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.VideoPixelsAspectRatioContext,
              oe != null ? oe : null,
            ),
            o("wrapWithContextProviders").makeRenderProviderFn(
              u.DisableDubbingContext,
              me != null ? me : !1,
            ),
            Re,
          ])),
          (t[11] = d),
          (t[12] = m),
          (t[13] = le),
          (t[14] = se),
          (t[15] = ue),
          (t[16] = p),
          (t[17] = _),
          (t[18] = f),
          (t[19] = ce),
          (t[20] = g),
          (t[21] = de),
          (t[22] = h),
          (t[23] = b),
          (t[24] = v),
          (t[25] = i),
          (t[26] = S),
          (t[27] = R),
          (t[28] = L),
          (t[29] = j),
          (t[30] = me),
          (t[31] = E),
          (t[32] = k),
          (t[33] = I),
          (t[34] = D),
          (t[35] = T),
          (t[36] = pe),
          (t[37] = G),
          (t[38] = $),
          (t[39] = P),
          (t[40] = N),
          (t[41] = M),
          (t[42] = w),
          (t[43] = _e),
          (t[44] = fe),
          (t[45] = A),
          (t[46] = F),
          (t[47] = B),
          (t[48] = O),
          (t[49] = W),
          (t[50] = q),
          (t[51] = U),
          (t[52] = V),
          (t[53] = H),
          (t[54] = z),
          (t[55] = K),
          (t[56] = Q),
          (t[57] = X),
          (t[58] = Y),
          (t[59] = J),
          (t[60] = Z),
          (t[61] = ee),
          (t[62] = te),
          (t[63] = ne),
          (t[64] = re),
          (t[65] = oe),
          (t[66] = s),
          (t[67] = ae),
          (t[68] = he),
          (t[69] = ie),
          (t[70] = Ce),
          (t[71] = Se));
      } else Se = t[71];
      var Le = Se;
      (r("useBlockCappedListItemWhenPlayingVideo")(i, G),
        r("useDisableVirtualizationWhenPlayingVideo")(i, G));
      var Ee = o(
          "CometSSRRenderingStateHooks",
        ).useIsServerRenderingOrHydrating(),
        ke = Ee ? void 0 : G,
        Ie;
      return (
        t[76] !== Le || t[77] !== ke
          ? ((Ie = c.jsx("div", {
              "data-instancekey": ke,
              "data-testid": void 0,
              children: Le,
            })),
            (t[76] = Le),
            (t[77] = ke),
            (t[78] = Ie))
          : (Ie = t[78]),
        Ie
      );
    }
    var v = c.memo(b);
    l.default = v;
  },
  98,
);
