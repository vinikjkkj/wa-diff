__d(
  "WAWebStatusVideo.react",
  [
    "fbt",
    "VideoPlayerStateTransitionHelpers",
    "WALogger",
    "WAWebAnnotation.react",
    "WAWebEnvironment",
    "WAWebMediaDataUtils",
    "WAWebMediaTypes",
    "WAWebMsgGetters",
    "WAWebMusicGatingUtils",
    "WAWebNormalizeStack",
    "WAWebObjectFit.react",
    "WAWebSNAPLLoggingConfig",
    "WAWebStatusButton.react",
    "WAWebVideoTag.react",
    "WAWebVideoUtils",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumWebcRmrReasonCode",
    "react",
    "useWAWebCanPlaybackAudio",
    "useWAWebCometVideoPlayerStateMachine",
    "useWAWebModelValues",
    "useWAWebMsgValues",
    "useWAWebOnUnmount",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useRef;
    function _(t) {
      var n,
        a,
        i = t.markRead,
        l = t.msg,
        u = t.onMouseDown,
        d = t.onMouseUp,
        _ = t.pause,
        f = t.play,
        g = t.playbackController,
        h = t.status,
        y = p(null),
        C = o("useWAWebMsgValues").useMsgValues(l.id, [
          o("WAWebMsgGetters").getFirstMusicAnnotationEmbeddedContent,
          o("WAWebMsgGetters").isStatusWithMusic,
        ]),
        b = C[0],
        v = C[1],
        S = o("useWAWebCanPlaybackAudio").useCanPlaybackAudio(l),
        R = {
          isCopyrightMuted: !S,
          mediaId: b == null ? void 0 : b.musicContentMediaId,
          mediaIdString: null,
          videoOrigin: o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS,
        },
        L = r("useWAWebCometVideoPlayerStateMachine")(R),
        E = L.callbacks,
        k = L.handleReactEffectCleanup,
        I = L.handleReactEffectInit,
        T = L.ready,
        D = L.videoElementRefCallback,
        x = l.actionLink || {},
        $ = x.buttonTitle,
        P = x.url,
        N = t.cvpApi,
        M = N == null || (n = N[1]) == null ? void 0 : n.controller,
        w = !o("WAWebMusicGatingUtils").isStatusMusicReceiverEnabled() || !v,
        A = o("useWAWebModelValues").useModelValues(t.mediaData, [
          "preview",
          "mediaStage",
          "fullWidth",
          "fullHeight",
          "streamable",
          "fullPreviewData",
        ]);
      (m(function () {
        o("WAWebVideoUtils").isMsgStreamable(l) ||
          l.downloadMedia({
            downloadEvenIfExpensive: !0,
            rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
              .STATUS_V3,
            isUserInitiated: !0,
          });
      }, []),
        m(
          function () {
            I();
          },
          [I],
        ),
        r("useWAWebOnUnmount")(function () {
          (_(), k());
        }));
      var F = r("useWAWebStableCallback")(function (e) {
        ((y.current = e.current), D(e.current), g.setMedia(y.current));
      });
      m(
        function () {
          var t;
          function n() {
            (f(),
              A.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
                i(h, l));
          }
          if (w) {
            n();
            return;
          }
          var r = N != null;
          if (!(!T && !r)) {
            if (r && M != null) {
              var a = M.getCurrentState(),
                s = null;
              return (
                (s = M.subscribe(function () {
                  var e = M.getCurrentState(),
                    t = o("VideoPlayerStateTransitionHelpers").didStartPlaying(
                      a,
                      e,
                    ),
                    r = o("VideoPlayerStateTransitionHelpers").didLoadData(
                      a,
                      e,
                    );
                  if (((a = e), r && M.play("product_initiated"), t)) {
                    var i;
                    ((i = s) == null || i.remove(), n());
                  }
                })),
                function () {
                  var e;
                  (e = s) == null || e.remove();
                }
              );
            }
            (t = y.current) == null ||
              t
                .play()
                .then(n)
                .catch(function (t) {
                  var n = o("WAWebNormalizeStack").normalizeError(t);
                  o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to play status video",
                        ])),
                    )
                    .sendLogs("failed-to-play-status-video: " + n.name, {
                      sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                    });
                });
          }
        },
        [w, N, M, i, A.mediaStage, l, f, h, T],
      );
      var O =
          r("WAWebEnvironment").isWindows === !0
            ? s._(/*BTDS*/ "Video playback is not supported on this device.")
            : s._(/*BTDS*/ "Your browser doesn't support video playback."),
        B = o("WAWebSNAPLLoggingConfig").createWAWebSNAPLLoggingProps(R);
      return c.jsx("div", {
        className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d",
        onMouseDown: u,
        onMouseUp: d,
        "data-testid": void 0,
        children: c.jsx(r("WAWebObjectFit.react"), {
          type: "contain",
          size: { width: A.fullWidth, height: A.fullHeight },
          children: c.jsxs("div", {
            className:
              "x1n2onr6 xh8yej3 x5yr21d x6ikm8r x10wlt62 xyi3aci xwf5gio x1p453bz x1suzm8a",
            children: [
              c.jsx(r("WAWebVideoTag.react"), {
                cvpApi: t.cvpApi,
                canChangeVolume: S,
                videoCallbacks: E,
                className:
                  "x1n2onr6 x1lliihq xh8yej3 x5yr21d xyi3aci xwf5gio x1p453bz x1suzm8a",
                msg: l,
                mediaData: A,
                autoPlay: w,
                muted: !S,
                refVideo: F,
                poster:
                  (a = o("WAWebMediaDataUtils").getHighestQualityThumbnailUrl(
                    A,
                  )) != null
                    ? a
                    : "",
                disableContextMenu: !0,
                loggingConfig: B.loggingConfig,
                loggingToSNAPLAdditionalData: B.loggingToSNAPLAdditionalData,
                mediaId: b == null ? void 0 : b.musicContentMediaId,
                subOrigin: "whatsapp_web_status_viewer",
                children: O,
              }),
              l.interactiveAnnotations &&
                l.interactiveAnnotations.length > 0 &&
                c.jsx(r("WAWebAnnotation.react"), {
                  annotations: l.interactiveAnnotations,
                  onTooltipDisplay: t.onMouseDown,
                  onTooltipDismiss: t.onMouseUp,
                }),
              $ &&
                P &&
                c.jsx("div", {
                  className:
                    "x10l6tqk x1kiq0my x78zum5 x6s0dn4 xl56j7k xh8yej3",
                  children: c.jsx(r("WAWebStatusButton.react"), {
                    text: $,
                    url: P,
                  }),
                }),
            ],
          }),
        }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
