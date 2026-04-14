__d(
  "WAWebPipMsgVideoPlayer.react",
  [
    "WAWebCmd",
    "WAWebMediaMissingModal.react",
    "WAWebMediaNeedPokeModal.react",
    "WAWebMediaTypes",
    "WAWebMediaUnsupportedModal.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebPipController",
    "WAWebPipSharedVideoPlayer.react",
    "WAWebStateUtils",
    "react",
    "useWAWebModelValues",
    "useWAWebMsgValues",
    "useWAWebSendViewCount",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useImperativeHandle,
      p = c.useRef;
    function _(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.msg,
        l = a.onClose,
        s = a.onMissingMedia,
        c = a.onNeedPokeMedia,
        _ = a.onOpenMediaViewer,
        f = a.onOpenVideoFloater,
        g = a.onUnsupportedMedia,
        h = p(null),
        y = o("useWAWebMsgValues").useMsgValues(a.msg.id, [
          o("WAWebMsgGetters").getId,
        ]),
        C = y[0],
        b = o("useWAWebModelValues").useModelValues(a.mediaData, [
          "mediaStage",
          "preview",
          "streamable",
        ]),
        v = o("useWAWebSendViewCount").usePlaybackSendViewCount(a.msg.id, {
          mediaData: b,
        }),
        S = function () {
          return h.current ? h.current.getCurrentTimeFromVideo() : 0;
        },
        R = function () {
          (_ && _(),
            o("WAWebCmd").Cmd.mediaViewerModal({
              msg: o("WAWebStateUtils").unproxy(i),
              currentTime: S(),
            }));
        },
        L = function () {
          (f && f(),
            r("WAWebPipController").openPiP(
              o("WAWebStateUtils").unproxy(i),
              S(),
              null,
            ));
        },
        E = r("useWAWebStableCallback")(function () {
          (s && s(),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebMediaMissingModal.react"), { msg: i }),
            ),
            l());
        }),
        k = r("useWAWebStableCallback")(function () {
          (g && g(),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebMediaUnsupportedModal.react"), { msg: i }),
            ),
            l());
        }),
        I = r("useWAWebStableCallback")(function () {
          (c && c(),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebMediaNeedPokeModal.react"), { msg: i }),
            ),
            l());
        }),
        T = function () {
          var e;
          return (e = h.current) == null ? void 0 : e.getContainerElement();
        };
      (m(n, function () {
        return { getContainerElement: T };
      }),
        d(
          function () {
            switch (b.mediaStage) {
              case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
                E();
                break;
              case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
                k();
                break;
              case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
                I();
                break;
              default:
            }
          },
          [E, I, k, b.mediaStage],
        ));
      var D = { msg: i, mediaData: b };
      return u.jsx(
        o("WAWebPipSharedVideoPlayer.react").WrappedSharedVideoPlayer,
        {
          ref: h,
          type: a.type,
          msgVideoInfo: D,
          startTime: a.startTime,
          onClose: a.onClose,
          onVideoEnded: a.onVideoEnded,
          onError: a.onError,
          onOpenMediaViewer: R,
          onOpenVideoFloater: L,
          onMissingMedia: E,
          onUnsupportedMedia: k,
          onTimeUpdate: v,
          onLoadedData: a.onLoadedData,
          onFullscreenToggle: a.onFullscreenToggle,
          autoPlay: a.autoPlay,
          overlays: a.overlays,
          noPip: a.noPip,
          disablePiPControls: a.disablePiPControls,
          onRefSet: a.onRefSet,
          onVideoMetadataChange: a.onVideoMetadataChange,
          onSetFullscreenToggleCallback: a.onSetFullscreenToggleCallback,
        },
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    var f = _;
    l.WrappedMsgVideoPlayer = f;
  },
  98,
);
