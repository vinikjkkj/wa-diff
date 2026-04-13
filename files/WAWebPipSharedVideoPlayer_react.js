__d(
  "WAWebPipSharedVideoPlayer.react",
  [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebAlertIcon.react",
    "WAWebChevronIcon.react",
    "WAWebDomFullscreen",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebMediaGatingUtils",
    "WAWebMediaOpaqueData",
    "WAWebMediaStage.react",
    "WAWebMediaStateControls.react",
    "WAWebMediaTypes",
    "WAWebMessageThumbShadeTop.react",
    "WAWebMsgGetters",
    "WAWebMusicNewsletterAttribution.react",
    "WAWebPipButton.react",
    "WAWebPipCloseButton.react",
    "WAWebPipConst",
    "WAWebPipFullscreenToggleButton.react",
    "WAWebPipMsgVideoTagLoadable.react",
    "WAWebPipOverlay.react",
    "WAWebPipShade.react",
    "WAWebPipUrlVideoTagLoadable.react",
    "WAWebPipVideoRefControls.react",
    "WAWebSpinner.react",
    "WAWebUA",
    "WAWebUserPrefsGeneral",
    "WAWebVelocityTransitionGroup",
    "WAWebVideoUtils",
    "lodash",
    "react",
    "react-compiler-runtime",
    "useBoolean",
    "useWAWebDebouncedCallback",
    "useWAWebIsKeyboardUser",
    "useWAWebListener",
    "useWAWebPrevious",
    "useWAWebStableCallback",
    "useWAWebVideoPlaybackRate",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useImperativeHandle,
      f = m.useRef,
      g = m.useState,
      h = {
        errorLinkChevron: {
          marginInlineStart: "x7phf20",
          marginTop: "x7r5mf7",
          $$css: !0,
        },
        musicAttribution: {
          position: "x10l6tqk",
          top: "x1tk7jg1",
          insetInlineStart: "x1r4y97",
          left: null,
          right: null,
          $$css: !0,
        },
        musicAttributionHover: {
          insetInlineStart: "x9pwknu",
          insetInlineEnd: "x1g9hn12",
          left: null,
          right: null,
          transition: "x1xgqf3o",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      },
      y = 3e3;
    function C(e) {
      var t = o("react-compiler-runtime").c(24),
        n = e.autoPlay,
        r = e.isFullscreenMode,
        a = e.ogVideoInfo,
        i = e.onBufferUpdate,
        l = e.onEnded,
        u = e.onError,
        c = e.onLoadedData,
        m = e.onLoadedMetadata,
        p = e.onPause,
        _ = e.onPlaying,
        f = e.onTimeUpdate,
        g = e.onVolumeChange,
        h = e.setIsLoading,
        y = e.setRefVideo,
        C = e.startTime;
      if (!a) return null;
      var b = "url(" + a.previewUrl + ")",
        v;
      t[0] !== b
        ? ((v = { backgroundImage: b }), (t[0] = b), (t[1] = v))
        : (v = t[1]);
      var S = v,
        R;
      t[2] !== r || t[3] !== S
        ? ((R = r
            ? null
            : d.jsx("div", {
                className:
                  "x1xsqp64 x18d0r48 x14tgpju x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c",
                style: S,
              })),
          (t[2] = r),
          (t[3] = S),
          (t[4] = R))
        : (R = t[4]);
      var L;
      t[5] !== n ||
      t[6] !== a.videoMsg ||
      t[7] !== a.videoUrl ||
      t[8] !== i ||
      t[9] !== l ||
      t[10] !== u ||
      t[11] !== c ||
      t[12] !== m ||
      t[13] !== p ||
      t[14] !== _ ||
      t[15] !== f ||
      t[16] !== g ||
      t[17] !== h ||
      t[18] !== y ||
      t[19] !== C
        ? ((L =
            a.videoUrl !== ""
              ? d.jsx(
                  o("WAWebPipUrlVideoTagLoadable.react").UrlVideoTagLoadable,
                  {
                    msg: a == null ? void 0 : a.videoMsg,
                    ref: y,
                    url: a.videoUrl,
                    startTime: C,
                    onEnded: l,
                    onError: u,
                    onLoadedMetadata: m,
                    onPause: p,
                    onPlaying: _,
                    onBufferUpdate: i,
                    onTimeUpdate: f,
                    onWaiting: h,
                    onVolumeChange: g,
                    autoPlay: n,
                    onLoadedData: c,
                    children: s._(
                      /*BTDS*/ "Your browser doesn't support video playback.",
                    ),
                  },
                  "floating-media",
                )
              : null),
          (t[5] = n),
          (t[6] = a.videoMsg),
          (t[7] = a.videoUrl),
          (t[8] = i),
          (t[9] = l),
          (t[10] = u),
          (t[11] = c),
          (t[12] = m),
          (t[13] = p),
          (t[14] = _),
          (t[15] = f),
          (t[16] = g),
          (t[17] = h),
          (t[18] = y),
          (t[19] = C),
          (t[20] = L))
        : (L = t[20]);
      var E;
      return (
        t[21] !== R || t[22] !== L
          ? ((E = d.jsxs(d.Fragment, { children: [R, L] })),
            (t[21] = R),
            (t[22] = L),
            (t[23] = E))
          : (E = t[23]),
        E
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(35),
        n = e.autoPlay,
        a = e.isFullscreenMode,
        i = e.isLoading,
        l = e.isMediaRenderable,
        u = e.isVideoError,
        c = e.msgVideoInfo,
        m = e.onBufferUpdate,
        p = e.onEnded,
        _ = e.onError,
        f = e.onLoadedData,
        g = e.onLoadedMetadata,
        h = e.onPause,
        y = e.onPlaying,
        C = e.onTimeUpdate,
        b = e.onVolumeChange,
        v = e.setIsLoadedWithCancel,
        S = e.setIsLoadingDebounced,
        R = e.setRefVideo,
        L = e.startTime;
      if (!c) return null;
      var E = c.mediaData.preview;
      if (l) {
        var k;
        t[0] !== E
          ? ((k =
              E instanceof r("WAWebMediaOpaqueData")
                ? { backgroundImage: "url(" + E.url() + ")" }
                : void 0),
            (t[0] = E),
            (t[1] = k))
          : (k = t[1]);
        var I = k,
          T;
        t[2] !== a || t[3] !== I
          ? ((T = a
              ? null
              : d.jsx("div", {
                  className:
                    "x1xsqp64 x18d0r48 x14tgpju x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c",
                  style: I,
                })),
            (t[2] = a),
            (t[3] = I),
            (t[4] = T))
          : (T = t[4]);
        var D;
        t[5] !== n ||
        t[6] !== u ||
        t[7] !== c.mediaData ||
        t[8] !== c.msg ||
        t[9] !== m ||
        t[10] !== p ||
        t[11] !== _ ||
        t[12] !== f ||
        t[13] !== g ||
        t[14] !== h ||
        t[15] !== y ||
        t[16] !== C ||
        t[17] !== b ||
        t[18] !== v ||
        t[19] !== S ||
        t[20] !== R ||
        t[21] !== L
          ? ((D = u
              ? null
              : d.jsx(
                  o("WAWebPipMsgVideoTagLoadable.react").MsgVideoTagLoadable,
                  {
                    ref: R,
                    msg: c.msg,
                    mediaData: c.mediaData,
                    className: "x10l6tqk x5yr21d xh8yej3",
                    startTime: L,
                    onEnded: p,
                    onError: _,
                    onLoadedMetadata: g,
                    onPause: h,
                    onPlaying: y,
                    onBufferUpdate: m,
                    onTimeUpdate: C,
                    onVolumeChange: b,
                    autoPlay: n,
                    onWaiting: S,
                    onCanPlay: v,
                    onLoadedData: f,
                    children: s._(
                      /*BTDS*/ "Your browser doesn't support video playback.",
                    ),
                  },
                  "floating-media",
                )),
            (t[5] = n),
            (t[6] = u),
            (t[7] = c.mediaData),
            (t[8] = c.msg),
            (t[9] = m),
            (t[10] = p),
            (t[11] = _),
            (t[12] = f),
            (t[13] = g),
            (t[14] = h),
            (t[15] = y),
            (t[16] = C),
            (t[17] = b),
            (t[18] = v),
            (t[19] = S),
            (t[20] = R),
            (t[21] = L),
            (t[22] = D))
          : (D = t[22]);
        var x;
        t[23] !== i
          ? ((x =
              i &&
              o("WAWebABProps").getABPropConfigValue(
                "video_stream_buffering_ui_enabled",
              )
                ? d.jsx(o("WAWebFlex.react").FlexColumn, {
                    justify: "center",
                    align: "center",
                    className: "x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c",
                    children: d.jsx(o("WAWebSpinner.react").Spinner, {
                      color: "white",
                    }),
                  })
                : null),
            (t[23] = i),
            (t[24] = x))
          : (x = t[24]);
        var $;
        return (
          t[25] !== T || t[26] !== D || t[27] !== x
            ? (($ = d.jsxs(d.Fragment, { children: [T, D, x] })),
              (t[25] = T),
              (t[26] = D),
              (t[27] = x),
              (t[28] = $))
            : ($ = t[28]),
          $
        );
      }
      if (E instanceof r("WAWebMediaOpaqueData")) {
        var P, N;
        t[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = { className: "x14tgpju x5yr21d x19kjcj4 xh8yej3" }),
            (N = s._(/*BTDS*/ "Preview")),
            (t[29] = P),
            (t[30] = N))
          : ((P = t[29]), (N = t[30]));
        var M;
        t[31] !== E ? ((M = E.url()), (t[31] = E), (t[32] = M)) : (M = t[32]);
        var w;
        return (
          t[33] !== M
            ? ((w = d.jsx(
                "img",
                babelHelpers.extends({}, P, {
                  alt: N,
                  src: M,
                  draggable: "false",
                }),
                "floating-media",
              )),
              (t[33] = M),
              (t[34] = w))
            : (w = t[34]),
          w
        );
      }
      return null;
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(36),
        n = e.autoPlay,
        r = e.isFullscreenMode,
        a = e.isLoading,
        i = e.isMediaRenderable,
        l = e.isVideoError,
        s = e.msgVideoInfo,
        u = e.ogVideoInfo,
        c = e.onBufferUpdate,
        m = e.onEnded,
        p = e.onError,
        _ = e.onLoadedData,
        f = e.onLoadedMetadata,
        g = e.onPause,
        h = e.onPlaying,
        y = e.onTimeUpdate,
        v = e.onVolumeChange,
        S = e.setIsLoadedWithCancel,
        R = e.setIsLoading,
        L = e.setIsLoadingDebounced,
        E = e.setRefVideo,
        k = e.startTime,
        I = e.type;
      switch (I) {
        case o("WAWebPipConst").PlayerType.FLOATER:
        case o("WAWebPipConst").PlayerType.MEDIA_VIEWER: {
          var T;
          return (
            t[0] !== n ||
            t[1] !== r ||
            t[2] !== a ||
            t[3] !== i ||
            t[4] !== l ||
            t[5] !== s ||
            t[6] !== c ||
            t[7] !== m ||
            t[8] !== p ||
            t[9] !== _ ||
            t[10] !== f ||
            t[11] !== g ||
            t[12] !== h ||
            t[13] !== y ||
            t[14] !== v ||
            t[15] !== S ||
            t[16] !== L ||
            t[17] !== E ||
            t[18] !== k
              ? ((T = d.jsx(b, {
                  msgVideoInfo: s,
                  isMediaRenderable: i,
                  isFullscreenMode: r,
                  isVideoError: l,
                  setRefVideo: E,
                  startTime: k,
                  onError: p,
                  onEnded: m,
                  onLoadedMetadata: f,
                  onPause: g,
                  onPlaying: h,
                  onBufferUpdate: c,
                  onTimeUpdate: y,
                  isLoading: a,
                  setIsLoadingDebounced: L,
                  setIsLoadedWithCancel: S,
                  onVolumeChange: v,
                  autoPlay: n,
                  onLoadedData: _,
                })),
                (t[0] = n),
                (t[1] = r),
                (t[2] = a),
                (t[3] = i),
                (t[4] = l),
                (t[5] = s),
                (t[6] = c),
                (t[7] = m),
                (t[8] = p),
                (t[9] = _),
                (t[10] = f),
                (t[11] = g),
                (t[12] = h),
                (t[13] = y),
                (t[14] = v),
                (t[15] = S),
                (t[16] = L),
                (t[17] = E),
                (t[18] = k),
                (t[19] = T))
              : (T = t[19]),
            T
          );
        }
        case o("WAWebPipConst").PlayerType.OG_FLOATER: {
          var D;
          return (
            t[20] !== n ||
            t[21] !== r ||
            t[22] !== u ||
            t[23] !== c ||
            t[24] !== m ||
            t[25] !== p ||
            t[26] !== _ ||
            t[27] !== f ||
            t[28] !== g ||
            t[29] !== h ||
            t[30] !== y ||
            t[31] !== v ||
            t[32] !== R ||
            t[33] !== E ||
            t[34] !== k
              ? ((D = d.jsx(C, {
                  ogVideoInfo: u,
                  isFullscreenMode: r,
                  setRefVideo: E,
                  startTime: k,
                  onEnded: m,
                  onError: p,
                  onLoadedMetadata: f,
                  onPause: g,
                  onPlaying: h,
                  onBufferUpdate: c,
                  onTimeUpdate: y,
                  setIsLoading: R,
                  onVolumeChange: v,
                  autoPlay: n,
                  onLoadedData: _,
                })),
                (t[20] = n),
                (t[21] = r),
                (t[22] = u),
                (t[23] = c),
                (t[24] = m),
                (t[25] = p),
                (t[26] = _),
                (t[27] = f),
                (t[28] = g),
                (t[29] = h),
                (t[30] = y),
                (t[31] = v),
                (t[32] = R),
                (t[33] = E),
                (t[34] = k),
                (t[35] = D))
              : (D = t[35]),
            D
          );
        }
      }
      return null;
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.msgVideoInfo,
        a = e.ogVideoInfo,
        i = e.type;
      switch (i) {
        case o("WAWebPipConst").PlayerType.FLOATER:
        case o("WAWebPipConst").PlayerType.MEDIA_VIEWER: {
          if (!n) return null;
          var l;
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = { className: "x5yr21d x1o0tod x10l6tqk x13vifvy xh8yej3" }),
              (t[0] = l))
            : (l = t[0]);
          var s;
          return (
            t[1] !== n.mediaData || t[2] !== n.msg
              ? ((s = d.jsx(
                  "div",
                  babelHelpers.extends({}, l, {
                    children: d.jsx(r("WAWebMediaStage.react"), {
                      msg: n.msg,
                      mediaData: n.mediaData,
                    }),
                  }),
                )),
                (t[1] = n.mediaData),
                (t[2] = n.msg),
                (t[3] = s))
              : (s = t[3]),
            s
          );
        }
        case o("WAWebPipConst").PlayerType.OG_FLOATER: {
          if (!a) return null;
          if (a.videoUrl === "") {
            var u;
            return (
              t[4] === Symbol.for("react.memo_cache_sentinel")
                ? ((u = d.jsx("div", {
                    className: "x5yr21d x1o0tod x10l6tqk x13vifvy xh8yej3",
                    children: d.jsx(
                      o("WAWebMediaStateControls.react").Pending,
                      {},
                    ),
                  })),
                  (t[4] = u))
                : (u = t[4]),
              u
            );
          }
          return null;
        }
      }
      return null;
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.children,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = d.jsx(o("WAWebAlertIcon.react").AlertIcon, {
            directional: !0,
            xstyle: h.errorLinkChevron,
            displayInline: !0,
          })),
          (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "The video can't be played.")), (t[1] = i))
        : (i = t[1]);
      var l;
      return (
        t[2] !== n
          ? ((l = d.jsxs(r("WAWebPipOverlay.react"), {
              children: [a, " ", i, n],
            })),
            (t[2] = n),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    function L(e) {
      var t,
        n,
        r,
        a = o("react-compiler-runtime").c(5),
        i = e.ogVideoInfo,
        l = e.type;
      if (
        l !== o("WAWebPipConst").PlayerType.OG_FLOATER ||
        !i ||
        !(i != null && i.videoMsg)
      )
        return null;
      var u =
          (t =
            (n = i.videoMsg) == null || (n = n.ctwaContext) == null
              ? void 0
              : n.sourceUrl) != null
            ? t
            : (r = i.videoMsg) == null
              ? void 0
              : r.matchedText,
        c;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = "x1riek7e x1lliihq xav9cv8 xt0b8zv"), (a[0] = c))
        : (c = a[0]);
      var m, p;
      a[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = d.jsx("span", { children: s._(/*BTDS*/ "Open the link") })),
          (p = d.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
            directional: !0,
            displayInline: !0,
            xstyle: h.errorLinkChevron,
          })),
          (a[1] = m),
          (a[2] = p))
        : ((m = a[1]), (p = a[2]));
      var _;
      return (
        a[3] !== u
          ? ((_ = d.jsxs(o("WAWebExternalLink.react").ExternalLink, {
              className: c,
              href: u,
              children: [m, p],
            })),
            (a[3] = u),
            (a[4] = _))
          : (_ = a[4]),
        _
      );
    }
    function E(t) {
      var n,
        a,
        i,
        l = t.ref,
        s = babelHelpers.objectWithoutPropertiesLoose(t, u),
        c = s.autoPlay,
        m = s.disablePiPControls,
        C = m === void 0 ? !1 : m,
        b = s.msgVideoInfo,
        E = s.noPip,
        k = E === void 0 ? !1 : E,
        I = s.ogVideoInfo,
        T = s.onAspectRatio,
        D = s.onClose,
        x = s.onError,
        $ = s.onFullscreenToggle,
        P = s.onLoadedData,
        N = s.onRefSet,
        M = s.onSetFullscreenToggleCallback,
        w = s.onTimeUpdate,
        A = s.onVideoDimensions,
        F = s.onVideoEnded,
        O = s.onVideoMetadataChange,
        B = s.startTime,
        W = s.type,
        q = f(null),
        U = f(null),
        V = f([]),
        H = r("useBoolean")(!0),
        G = H.setFalse,
        z = H.setTrue,
        j = H.value,
        K = r("useWAWebDebouncedCallback")(z, 250),
        Q = r("useWAWebStableCallback")(function () {
          (K.cancel(), G());
        }),
        X = g(null),
        Y = X[0],
        J = X[1],
        Z = g(!1),
        ee = Z[0],
        te = Z[1],
        ne = g(!1),
        re = ne[0],
        oe = ne[1],
        ae = g(!1),
        ie = ae[0],
        le = ae[1],
        se = g(!1),
        ue = se[0],
        ce = se[1],
        de = g(r("WAWebDomFullscreen").isFullscreenMode()),
        me = de[0],
        pe = de[1],
        _e = g(!1),
        fe = _e[0],
        ge = _e[1],
        he = g(null),
        ye = he[0],
        Ce = he[1],
        be = r("useWAWebStableCallback")(function () {
          Ce(null);
        }),
        ve = r("useWAWebIsKeyboardUser")(),
        Se = ve.isKeyboardUser,
        Re = o("WAWebMediaGatingUtils").isVideoPlaybackSpeedEnabled(),
        Le =
          (n =
            b == null || (a = b.msg) == null || (a = a.id) == null
              ? void 0
              : a.toString()) != null
            ? n
            : null,
        Ee = r("useWAWebVideoPlaybackRate")(Le),
        ke = Ee.advancePlaybackRate,
        Ie = Ee.playbackRate;
      p(
        function () {
          if (Re) {
            var e;
            (e = q.current) == null || e.setPlaybackRate(Ie);
          }
        },
        [Re, Ie],
      );
      var Te = r("useWAWebPrevious")(Y),
        De = r("useWAWebPrevious")(ee),
        xe = r("useWAWebStableCallback")(function (e) {
          $ == null || $(e);
        });
      (p(
        function () {
          xe(me);
        },
        [me, xe],
      ),
        o("useWAWebListener").useListener(
          r("WAWebDomFullscreen"),
          "fullscreen_change",
          function () {
            r("WAWebDomFullscreen").isFullscreenMode() &&
            r("WAWebDomFullscreen").getFullscreenElement() === U.current
              ? pe(!0)
              : r("WAWebDomFullscreen").isFullscreenMode() || (pe(!1), be());
          },
        ));
      var $e = r("useWAWebDebouncedCallback")(function () {
          ce(!1);
        }, y),
        Pe = function (t) {
          (t.stopPropagation(), r("WAWebDomFullscreen").exitFullscreen());
        },
        Ne = function (t) {
          (t.stopPropagation(),
            r("WAWebDomFullscreen").requestFullscreen(U.current));
        },
        Me = function (t) {
          me ? Pe(t) : Ne(t);
        };
      p(function () {
        M == null || M(Me);
      }, []);
      var we = r("useWAWebStableCallback")(function (e) {
          ((q.current = e),
            e != null && (N == null || N(e), ge(e.getAudioDisabled())));
        }),
        Ae = r("useWAWebDebouncedCallback")(function (t, n) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[SharedVideoPlayer] error message: ",
                  "",
                ])),
              n,
            )
            .sendLogs("pip-shared-video-player-video-error-" + t, {
              sampling: 0.01,
            });
        }, 300 * 1e3),
        Fe = function (t) {
          var e,
            n = B != null ? B : 0;
          t.videoWidth ||
            (Ae("video-width", "metaData videoWidth is empty"), oe(!0));
          var r =
              ((e = q.current) == null ? void 0 : e.getAudioDisabled()) === !0,
            a = t.volume,
            i = t.muted;
          if (r) {
            var l,
              s = o("WAWebUserPrefsGeneral").getMediaVolumeSettings();
            ((a = (l = s.volume) != null ? l : t.volume), (i = s.muted));
          }
          (J({
            duration: t.duration,
            currentTime: n,
            volume: a,
            muted: i,
            bufferedTime: 0,
          }),
            T &&
              t.videoWidth &&
              t.videoHeight &&
              T(t.videoWidth / t.videoHeight),
            A &&
              t.videoWidth &&
              t.videoHeight &&
              A({ width: t.videoWidth, height: t.videoHeight }));
        },
        Oe = function (t, n) {
          for (var e = 0, r = 0; r < t.length; r++)
            if (n >= t[r][0] && n < t[r][1]) {
              e = t[r][1];
              break;
            }
          return e;
        },
        Be = function (t) {
          w == null || w(t);
          var e = null;
          if (Y) {
            var n = Oe(V.current, t);
            e = babelHelpers.extends({}, Y, {
              currentTime: t,
              bufferedTime: n,
            });
          }
          J(e);
        },
        We = function (t) {
          var e;
          if (
            ((e = q.current) == null ? void 0 : e.getAudioDisabled()) !== !0
          ) {
            var n = null;
            (Y &&
              (n = babelHelpers.extends({}, Y, {
                volume: t.volume,
                muted: t.muted,
              })),
              J(n));
          }
        },
        qe = function () {
          (F && F(), te(!1));
        },
        Ue = function (t, n) {
          if (t === 20) {
            te(!1);
            return;
          }
          (Ae(
            "generic",
            "code: " +
              (t != null ? t : -1) +
              ", message: " +
              (n != null ? n : ""),
          ),
            oe(!0),
            x && x());
        },
        Ve = function () {
          te(!1);
        },
        He = function () {
          te(!0);
        },
        Ge = function (t) {
          if (((V.current = t), !!Y)) {
            var e = Y.currentTime,
              n = Oe(t, e),
              r = babelHelpers.extends({}, Y, { bufferedTime: n });
            J(r);
          }
        },
        ze = function () {
          return me;
        },
        je = function () {
          return U.current;
        };
      p(
        function () {
          (De !== ee || !r("lodash").isEqual(Te, Y)) && (O == null || O(Y, ee));
        },
        [ee, O, De, Te, Y],
      );
      var Ke = function () {
          return q.current ? q.current.getCurrentTime() : 0;
        },
        Qe = function () {
          switch (W) {
            case o("WAWebPipConst").PlayerType.FLOATER:
            case o("WAWebPipConst").PlayerType.MEDIA_VIEWER: {
              if (!b) return !1;
              var e = b.mediaData;
              return (
                e.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED ||
                o("WAWebVideoUtils").isMsgStreamable(b.msg)
              );
            }
            case o("WAWebPipConst").PlayerType.OG_FLOATER:
              return !0;
          }
          return !0;
        };
      _(l, function () {
        return { getContainerElement: je, getCurrentTimeFromVideo: Ke };
      });
      var Xe,
        Ye,
        Je,
        Ze = Qe(),
        et = ze();
      Ze &&
        !et &&
        (Ye = d.jsx(r("WAWebPipFullscreenToggleButton.react"), {
          isFullscreenMode: me,
          onClick: Me,
        }));
      var tt =
        et || s.onClose == null
          ? null
          : d.jsx(r("WAWebPipCloseButton.react"), {
              isFullscreenMode: me,
              onClick: function (t) {
                (t.stopPropagation(), s.onClose == null || s.onClose());
              },
            });
      switch (s.type) {
        case o("WAWebPipConst").PlayerType.OG_FLOATER:
        case o("WAWebPipConst").PlayerType.FLOATER:
          Xe = [o("WAWebUA").UA.isSafari ? null : Ye, tt];
          break;
        case o("WAWebPipConst").PlayerType.MEDIA_VIEWER: {
          var nt;
          (me
            ? (nt = tt)
            : (nt =
                !k && Ze
                  ? d.jsx(o("WAWebPipButton.react").PiPButton, {
                      onClick: function (t) {
                        (t.stopPropagation(),
                          s.onClose && s.onClose(),
                          s.onOpenVideoFloater && s.onOpenVideoFloater());
                      },
                      theme: o("WAWebPipButton.react").PIP_BUTTON_THEME.PLAYER,
                    })
                  : null),
            (Xe = [Ye, nt]),
            (Je = function (t) {
              (t.stopPropagation(),
                q.current && (ee ? q.current.pause() : q.current.play()));
            }));
          break;
        }
      }
      var rt = b == null ? void 0 : b.msg,
        ot =
          rt != null &&
          o("WAWebMsgGetters").getFirstMusicAnnotation(rt) != null,
        at = ot ? d.jsx(r("WAWebMessageThumbShadeTop.react"), {}) : null,
        it;
      me
        ? (it = [
            d.jsx(r("WAWebPipShade.react"), { theme: "upper" }, "upper"),
            d.jsx(r("WAWebPipShade.react"), { theme: "lower" }, "lower"),
          ])
        : (it = [
            s.type === o("WAWebPipConst").PlayerType.MEDIA_VIEWER
              ? d.jsx(
                  r("WAWebPipShade.react"),
                  { theme: "full-sharp" },
                  "full-sharp",
                )
              : d.jsx(
                  r("WAWebPipShade.react"),
                  { theme: "full-rounded" },
                  "full-rounded",
                ),
          ]);
      var lt = re
          ? d.jsx(R, { children: d.jsx(L, { type: W, ogVideoInfo: I }) })
          : null,
        st = C && !me,
        ut =
          Qe() && Y != null
            ? d.jsx(o("WAWebPipVideoRefControls.react").VideoRefControls, {
                refVideo: q.current,
                videoMetadata: Y,
                isFullscreenMode: me,
                isVideoPlaying: ee,
                ctwaSourceUrl:
                  I == null ||
                  (i = I.videoMsg) == null ||
                  (i = i.ctwaContext) == null
                    ? void 0
                    : i.sourceUrl,
                newPiPStyle: et,
                onFullscreenToggle: et ? Me : void 0,
                onClose: et ? D : void 0,
                playbackRate: Re ? Ie : void 0,
                onPlaybackRateChange: Re ? ke : void 0,
                disableAudioControls: fe,
              })
            : null;
      return d.jsxs(
        "div",
        babelHelpers.extends(
          { ref: U },
          {
            0: {
              className:
                "xjbqb8w x5yr21d x1o0tod x6ikm8r x10wlt62 x10l6tqk x13vifvy xh8yej3",
            },
            1: {
              className:
                "xjbqb8w x5yr21d x1o0tod x6ikm8r x10wlt62 x10l6tqk x13vifvy xh8yej3 xt0e3qv",
            },
          }[!!me << 0],
          {
            onMouseEnter: function (t) {
              le(!0);
            },
            onMouseLeave: function (t) {
              le(!1);
            },
            onMouseDown: function (t) {
              me && t.stopPropagation();
            },
            onMouseMove: function (t) {
              (ie || le(!0), ue || ce(!0), $e());
            },
            onClick: Je,
            children: [
              d.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: {
                      className:
                        "x5yr21d x19kjcj4 x6ikm8r x10wlt62 x1n2onr6 xh8yej3",
                    },
                    1: {
                      className:
                        "x5yr21d x19kjcj4 x6ikm8r x10wlt62 x1n2onr6 xh8yej3 x9f619 xxh1dlw",
                    },
                  }[!!et << 0],
                  {
                    children: d.jsx(v, {
                      type: W,
                      ogVideoInfo: I,
                      msgVideoInfo: b,
                      isMediaRenderable: Qe(),
                      isFullscreenMode: me,
                      isVideoError: re,
                      setRefVideo: we,
                      startTime: B,
                      onError: Ue,
                      onEnded: qe,
                      onLoadedMetadata: Fe,
                      onPause: Ve,
                      onPlaying: He,
                      onBufferUpdate: Ge,
                      onTimeUpdate: Be,
                      isLoading: j,
                      setIsLoading: z,
                      setIsLoadingDebounced: K,
                      setIsLoadedWithCancel: Q,
                      onVolumeChange: We,
                      autoPlay: c,
                      onLoadedData: P,
                    }),
                  },
                ),
              ),
              d.jsx(S, { type: W, msgVideoInfo: b, ogVideoInfo: I }),
              lt,
              s.overlays,
              at,
              d.jsxs(r("WAWebVelocityTransitionGroup"), {
                transitionName: "fade-fast",
                children: [
                  s.type === o("WAWebPipConst").PlayerType.MEDIA_VIEWER &&
                  (ie || Se) &&
                  st !== !0 &&
                  !re
                    ? [it, ut, Xe]
                    : null,
                  rt != null
                    ? d.jsx(r("WAWebMusicNewsletterAttribution.react"), {
                        msg: rt,
                        playing: ee,
                        mediaController: {
                          play: function () {
                            var e;
                            return (e = q.current) == null ? void 0 : e.play();
                          },
                          pause: function () {
                            var e;
                            return (e = q.current) == null ? void 0 : e.pause();
                          },
                        },
                        xstyle:
                          s.type ===
                            o("WAWebPipConst").PlayerType.MEDIA_VIEWER &&
                          (ie || Se)
                            ? [h.musicAttribution, h.musicAttributionHover]
                            : h.musicAttribution,
                        isFullscreen: me,
                        onShowModal: Ce,
                        onCloseModal: be,
                      })
                    : null,
                ],
              }),
              me &&
                ye != null &&
                d.jsx("div", {
                  className:
                    "x6s0dn4 x1ey2m1c x78zum5 xtijo5x x1o0tod xl56j7k x10l6tqk x13vifvy x11uqc5h",
                  children: ye,
                }),
            ],
          },
        ),
        "elementsWrapped",
      );
    }
    E.displayName = E.name + " [from " + i.id + "]";
    var k = E;
    ((l.FULLSCREEN_CONTROLS_DISPLAY_TIMEOUT = y),
      (l.WrappedSharedVideoPlayer = k));
  },
  226,
);
