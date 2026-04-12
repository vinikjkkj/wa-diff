__d(
  "useWAWebNewsletterVideoPlayMetric",
  [
    "WAWebChannelsVideoPlayWamEvent",
    "WAWebMsgGetters",
    "WAWebWamEnumVideoPlayOrigin",
    "WAWebWamEnumVideoPlayResult",
    "WAWebWamEnumVideoPlayType",
    "react",
    "useLazyRef",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.experimental_useEffectEvent,
      c = s.useEffect,
      d = s.useRef;
    function m(e, t, n) {
      return new (o(
        "WAWebChannelsVideoPlayWamEvent",
      ).ChannelsVideoPlayWamEvent)({
        cid: t,
        postId: n,
        videoPlayOrigin: o("WAWebWamEnumVideoPlayOrigin").VIDEO_PLAY_ORIGIN
          .CHANNELS,
        videoPlayType: o("WAWebWamEnumVideoPlayType").VIDEO_PLAY_TYPE.STREAM,
        videoPlayResult: o("WAWebWamEnumVideoPlayResult").VIDEO_PLAY_RESULT.OK,
        watchingModule: o("WAWebMsgGetters").isNewsletterMsgWithMusic(e)
          ? "whatsapp_channels_non_ugc"
          : "whatsapp_channels",
      });
    }
    function p(e, t, n) {
      var a,
        i = d(!0),
        l = r("useLazyRef")(function () {
          return m(e, t, n);
        }),
        s = u(function (r) {
          var o = function () {
            (r.commit(),
              (i.current = !0),
              (l.current = m(e, t, n)),
              window.removeEventListener("unload", o));
          };
          return o;
        });
      c(
        function () {
          var e = l.current,
            t = s(e);
          return (window.addEventListener("unload", t), t);
        },
        [l],
      );
      var p = (a = r("useWAWebStableCallback"))(function (e) {
          var t, n, r, a, i, s;
          l.current.videoPlayResult = o(
            "WAWebWamEnumVideoPlayResult",
          ).VIDEO_PLAY_RESULT.OK;
          var u =
              (t = (n = e.current) == null ? void 0 : n.videoHeight) != null
                ? t
                : 0,
            c =
              (r = (a = e.current) == null ? void 0 : a.videoWidth) != null
                ? r
                : 0;
          ((l.current.height = u),
            (l.current.width = c),
            (l.current.videoDuration = Math.floor(
              (i = (s = e.current) == null ? void 0 : s.duration) != null
                ? i
                : 0,
            )));
        }),
        _ = a(function (e) {
          var t;
          l.current.videoPlayT =
            ((t = l.current.videoPlayT) != null ? t : 0) + Math.floor(e);
        }),
        f = a(function () {
          i.current && l.current.startVideoInitialBufferingT();
        }),
        g = a(function () {
          i.current &&
            (l.current.markVideoInitialBufferingT(), (i.current = !1));
        }),
        h = a(function (e, t) {
          var n, r;
          l.current.finishCount = t;
          var o =
            ((n = (r = e.current) == null ? void 0 : r.duration) != null
              ? n
              : 0) * t;
          l.current.videoPlayT = Math.floor(o);
        }),
        y = a(function (e) {
          var t,
            n,
            r =
              (t =
                (n = e.current) == null || (n = n.error) == null
                  ? void 0
                  : n.code) != null
                ? t
                : null;
          r != null &&
            (l.current.videoPlayResult = o(
              "WAWebWamEnumVideoPlayResult",
            ).VIDEO_PLAY_RESULT.ERROR_PLAYER);
        });
      return {
        channelsVideoPlayRef: l,
        videoProps: {
          onChannelVideoPlaying: p,
          onChannelVideoPause: _,
          onChannelVideoWaiting: f,
          onChannelVideoCanPlay: g,
          onChannelVideoEnded: h,
          onChannelVideoError: y,
        },
      };
    }
    l.useWAWebNewsletterVideoPlayMetric = p;
  },
  98,
);
