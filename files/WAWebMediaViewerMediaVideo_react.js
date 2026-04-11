__d(
  "WAWebMediaViewerMediaVideo.react",
  [
    "fbt",
    "WAWebAddOnBubbleType",
    "WAWebAddOnBubblesContainer.react",
    "WAWebAnnotation.react",
    "WAWebBlurredImage.react",
    "WAWebEnvironment",
    "WAWebGetDisplayType",
    "WAWebMediaTypes",
    "WAWebMediaViewerStyles",
    "WAWebMsgGetters",
    "WAWebNoop",
    "WAWebObjectFit.react",
    "WAWebPipConst",
    "WAWebPipFloatingVideoPlayer.react",
    "WAWebPipMsgVideoPlayer.react",
    "WAWebReactionsUtils",
    "WAWebStopEvent",
    "WAWebVideo.react",
    "WAWebVideoUtils",
    "WAWebWamEnumWebcRmrReasonCode",
    "isNonZeroNumber",
    "react",
    "stylex",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useImperativeHandle,
      f = m.useMemo,
      g = m.useRef,
      h = m.useState;
    function y(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.autoPlay,
        c = i.msg,
        m = i.onClose,
        y = i.onLoad,
        b = i.onLoadedData,
        v = i.startTime,
        S = v === void 0 ? 0 : v,
        R = o("useWAWebModelValues").useModelValues(i.mediaData, [
          "mediaStage",
          "fullWidth",
          "fullHeight",
          "isGif",
          "isViewOnce",
          "preview",
          "renderableUrl",
          "streamable",
        ]),
        L = h(!1),
        E = L[0],
        k = L[1],
        I = h(!0),
        T = I[0],
        D = I[1],
        x = g(),
        $ = f(
          function () {
            return (R.mediaStage ===
              o("WAWebMediaTypes").MediaDataStage.RESOLVED ||
              o("WAWebVideoUtils").isMsgStreamable(c)) &&
              o("isNonZeroNumber").isNonZeroNumber(R.fullWidth) &&
              o("isNonZeroNumber").isNonZeroNumber(R.fullHeight)
              ? C(R)
              : { width: 0, height: 0 };
          },
          [R, c],
        );
      p(function () {
        if (!o("WAWebVideoUtils").isMsgStreamable(c))
          return (
            c.downloadMedia({
              downloadEvenIfExpensive: !0,
              rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .MEDIA_VIEWER,
              isUserInitiated: !0,
            }),
            function () {
              c.mediaObject && c.cancelDownload();
            }
          );
      }, []);
      var P = function (t) {
        k(t);
      };
      _(a, function () {
        return {
          getContainerElement: function () {
            return x.current;
          },
          closingMedia: function () {
            D(!1);
          },
        };
      });
      var N = R.isGif,
        M =
          R.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED ||
          o("WAWebVideoUtils").isMsgStreamable(c),
        w = null,
        A = o("WAWebGetDisplayType").getDisplayType(c),
        F = o("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER;
      if (
        (c &&
          o("WAWebReactionsUtils").shouldShowReactionBubble(c, F) &&
          (w = d.jsx(r("WAWebAddOnBubblesContainer.react"), {
            isOutgoingMsg: o("WAWebMsgGetters").getIsSentByMe(c),
            displayType: A,
            bubbleType: F,
            parentIds: [c.id.toString()],
            displayReactionBubble: T,
          })),
        M)
      ) {
        var O =
            r("WAWebEnvironment").isWindows === !0
              ? s._(/*BTDS*/ "Video playback is not supported on this device.")
              : s._(/*BTDS*/ "Your browser doesn't support video playback."),
          B;
        !E &&
          c != null &&
          c.interactiveAnnotations &&
          c.interactiveAnnotations.length > 0 &&
          (B = d.jsx(r("WAWebAnnotation.react"), {
            annotations: c.interactiveAnnotations,
          }));
        var W;
        return (
          N
            ? (W = d.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  (u || (u = r("stylex"))).props(
                    r("WAWebMediaViewerStyles").content,
                  ),
                  {
                    ref: x,
                    "data-testid": void 0,
                    children: [
                      d.jsx(r("WAWebVideo.react"), {
                        src: R.renderableUrl,
                        onClick: o("WAWebStopEvent").stopPropagation,
                        autoPlay: !0,
                        loop: !0,
                        onLoadedData: b,
                        children: O,
                      }),
                      B,
                    ],
                  },
                ),
              ))
            : (W = d.jsx(
                "div",
                babelHelpers.extends(
                  { ref: x },
                  (u || (u = r("stylex"))).props(
                    r("WAWebMediaViewerStyles").content,
                  ),
                  {
                    onClick: o("WAWebStopEvent").stopPropagation,
                    "data-testid": void 0,
                    children: d.jsx(
                      o("WAWebPipMsgVideoPlayer.react").WrappedMsgVideoPlayer,
                      {
                        msg: c,
                        mediaData: R,
                        startTime: S,
                        onClose: m,
                        onError: r("WAWebNoop"),
                        onFullscreenToggle: P,
                        autoPlay: l,
                        type: o("WAWebPipConst").PlayerType.MEDIA_VIEWER,
                        overlays: B,
                        noPip: c == null ? void 0 : c.isViewOnce,
                        onLoadedData: b,
                      },
                    ),
                  },
                ),
              )),
          d.jsxs(r("WAWebObjectFit.react"), {
            type: "scaleDown",
            position: "relative",
            objectPosition: "relative",
            size: $,
            onObjectLoad: y,
            children: [W, w],
          })
        );
      }
      return d.jsxs(r("WAWebObjectFit.react"), {
        type: "scaleDown",
        position: "relative",
        objectPosition: "relative",
        size: { width: R.fullWidth, height: R.fullHeight },
        children: [
          d.jsx(r("WAWebBlurredImage.react"), {
            altText: (n = c.caption) != null ? n : "",
            mediaData: R,
          }),
          w,
        ],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      if (e.isGif) {
        var t = 330;
        return e.fullWidth >= t
          ? { width: e.fullWidth, height: e.fullHeight }
          : { width: t, height: (e.fullHeight * t) / e.fullWidth };
      }
      return e.fullWidth >= o("WAWebPipFloatingVideoPlayer.react").MIN_WIDTH
        ? { width: e.fullWidth, height: e.fullHeight }
        : {
            width: o("WAWebPipFloatingVideoPlayer.react").MIN_WIDTH,
            height: e.fullHeight,
          };
    }
    l.default = y;
  },
  226,
);
