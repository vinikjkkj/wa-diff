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
      var t = e.autoPlay,
        n = e.isFullscreenMode,
        r = e.ogVideoInfo,
        a = e.onBufferUpdate,
        i = e.onEnded,
        l = e.onError,
        u = e.onLoadedData,
        c = e.onLoadedMetadata,
        m = e.onPause,
        p = e.onPlaying,
        _ = e.onTimeUpdate,
        f = e.onVolumeChange,
        g = e.setIsLoading,
        h = e.setRefVideo,
        y = e.startTime;
      if (!r) return null;
      var C = { backgroundImage: "url(" + r.previewUrl + ")" };
      return d.jsxs(d.Fragment, {
        children: [
          n
            ? null
            : d.jsx("div", {
                className:
                  "x1xsqp64 x18d0r48 x14tgpju x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c",
                style: C,
              }),
          r.videoUrl !== ""
            ? d.jsx(
                o("WAWebPipUrlVideoTagLoadable.react").UrlVideoTagLoadable,
                {
                  msg: r == null ? void 0 : r.videoMsg,
                  ref: h,
                  url: r.videoUrl,
                  startTime: y,
                  onEnded: i,
                  onError: l,
                  onLoadedMetadata: c,
                  onPause: m,
                  onPlaying: p,
                  onBufferUpdate: a,
                  onTimeUpdate: _,
                  onWaiting: g,
                  onVolumeChange: f,
                  autoPlay: t,
                  onLoadedData: u,
                  children: s._(
                    /*BTDS*/ "Your browser doesn't support video playback.",
                  ),
                },
                "floating-media",
              )
            : null,
        ],
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.autoPlay,
        n = e.isFullscreenMode,
        a = e.isLoading,
        i = e.isMediaRenderable,
        l = e.isVideoError,
        u = e.msgVideoInfo,
        c = e.onBufferUpdate,
        m = e.onEnded,
        p = e.onError,
        _ = e.onLoadedData,
        f = e.onLoadedMetadata,
        g = e.onPause,
        h = e.onPlaying,
        y = e.onTimeUpdate,
        C = e.onVolumeChange,
        b = e.setIsLoadedWithCancel,
        v = e.setIsLoadingDebounced,
        S = e.setRefVideo,
        R = e.startTime;
      if (!u) return null;
      var L = u.mediaData.preview;
      if (i) {
        var E =
          L instanceof r("WAWebMediaOpaqueData")
            ? { backgroundImage: "url(" + L.url() + ")" }
            : void 0;
        return d.jsxs(d.Fragment, {
          children: [
            n
              ? null
              : d.jsx("div", {
                  className:
                    "x1xsqp64 x18d0r48 x14tgpju x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c",
                  style: E,
                }),
            l
              ? null
              : d.jsx(
                  o("WAWebPipMsgVideoTagLoadable.react").MsgVideoTagLoadable,
                  {
                    ref: S,
                    msg: u.msg,
                    mediaData: u.mediaData,
                    className: "x10l6tqk x5yr21d xh8yej3",
                    startTime: R,
                    onEnded: m,
                    onError: p,
                    onLoadedMetadata: f,
                    onPause: g,
                    onPlaying: h,
                    onBufferUpdate: c,
                    onTimeUpdate: y,
                    onVolumeChange: C,
                    autoPlay: t,
                    onWaiting: v,
                    onCanPlay: b,
                    onLoadedData: _,
                    children: s._(
                      /*BTDS*/ "Your browser doesn't support video playback.",
                    ),
                  },
                  "floating-media",
                ),
            a &&
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
              : null,
          ],
        });
      }
      return L instanceof r("WAWebMediaOpaqueData")
        ? d.jsx(
            "img",
            {
              className: "x14tgpju x5yr21d x19kjcj4 xh8yej3",
              alt: s._(/*BTDS*/ "Preview"),
              src: L.url(),
              draggable: "false",
            },
            "floating-media",
          )
        : null;
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.autoPlay,
        n = e.isFullscreenMode,
        r = e.isLoading,
        a = e.isMediaRenderable,
        i = e.isVideoError,
        l = e.msgVideoInfo,
        s = e.ogVideoInfo,
        u = e.onBufferUpdate,
        c = e.onEnded,
        m = e.onError,
        p = e.onLoadedData,
        _ = e.onLoadedMetadata,
        f = e.onPause,
        g = e.onPlaying,
        h = e.onTimeUpdate,
        y = e.onVolumeChange,
        v = e.setIsLoadedWithCancel,
        S = e.setIsLoading,
        R = e.setIsLoadingDebounced,
        L = e.setRefVideo,
        E = e.startTime,
        k = e.type;
      switch (k) {
        case o("WAWebPipConst").PlayerType.FLOATER:
        case o("WAWebPipConst").PlayerType.MEDIA_VIEWER:
          return d.jsx(b, {
            msgVideoInfo: l,
            isMediaRenderable: a,
            isFullscreenMode: n,
            isVideoError: i,
            setRefVideo: L,
            startTime: E,
            onError: m,
            onEnded: c,
            onLoadedMetadata: _,
            onPause: f,
            onPlaying: g,
            onBufferUpdate: u,
            onTimeUpdate: h,
            isLoading: r,
            setIsLoadingDebounced: R,
            setIsLoadedWithCancel: v,
            onVolumeChange: y,
            autoPlay: t,
            onLoadedData: p,
          });
        case o("WAWebPipConst").PlayerType.OG_FLOATER:
          return d.jsx(C, {
            ogVideoInfo: s,
            isFullscreenMode: n,
            setRefVideo: L,
            startTime: E,
            onEnded: c,
            onError: m,
            onLoadedMetadata: _,
            onPause: f,
            onPlaying: g,
            onBufferUpdate: u,
            onTimeUpdate: h,
            setIsLoading: S,
            onVolumeChange: y,
            autoPlay: t,
            onLoadedData: p,
          });
      }
      return null;
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = e.msgVideoInfo,
        n = e.ogVideoInfo,
        a = e.type;
      switch (a) {
        case o("WAWebPipConst").PlayerType.FLOATER:
        case o("WAWebPipConst").PlayerType.MEDIA_VIEWER:
          return t
            ? d.jsx("div", {
                className: "x5yr21d x1o0tod x10l6tqk x13vifvy xh8yej3",
                children: d.jsx(r("WAWebMediaStage.react"), {
                  msg: t.msg,
                  mediaData: t.mediaData,
                }),
              })
            : null;
        case o("WAWebPipConst").PlayerType.OG_FLOATER:
          return n && n.videoUrl === ""
            ? d.jsx("div", {
                className: "x5yr21d x1o0tod x10l6tqk x13vifvy xh8yej3",
                children: d.jsx(o("WAWebMediaStateControls.react").Pending, {}),
              })
            : null;
      }
      return null;
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = e.children;
      return d.jsxs(r("WAWebPipOverlay.react"), {
        children: [
          d.jsx(o("WAWebAlertIcon.react").AlertIcon, {
            directional: !0,
            xstyle: h.errorLinkChevron,
            displayInline: !0,
          }),
          " ",
          s._(/*BTDS*/ "The video can't be played."),
          t,
        ],
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t,
        n,
        r,
        a = e.ogVideoInfo,
        i = e.type;
      if (
        i !== o("WAWebPipConst").PlayerType.OG_FLOATER ||
        !a ||
        !(a != null && a.videoMsg)
      )
        return null;
      var l =
        (t =
          (n = a.videoMsg) == null || (n = n.ctwaContext) == null
            ? void 0
            : n.sourceUrl) != null
          ? t
          : (r = a.videoMsg) == null
            ? void 0
            : r.matchedText;
      return d.jsxs(o("WAWebExternalLink.react").ExternalLink, {
        className: "x1riek7e x1lliihq xav9cv8 xt0b8zv",
        href: l,
        children: [
          d.jsx("span", { children: s._(/*BTDS*/ "Open the link") }),
          d.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
            directional: !0,
            displayInline: !0,
            xstyle: h.errorLinkChevron,
          }),
        ],
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
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
