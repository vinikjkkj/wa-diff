__d(
  "useWAWebNewsletterVideoPlayMetric",
  [
    "WAWebChannelsVideoPlayWamEvent",
    "WAWebMsgGetters",
    "WAWebWamEnumVideoPlayOrigin",
    "WAWebWamEnumVideoPlayResult",
    "WAWebWamEnumVideoPlayType",
    "react",
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(36),
        i = d(!0),
        l;
      a[0] !== t || a[1] !== e || a[2] !== n
        ? ((l = function () {
            return m(e, t, n);
          }),
          (a[0] = t),
          (a[1] = e),
          (a[2] = n),
          (a[3] = l))
        : (l = a[3]);
      var s = r("useLazyRef")(l),
        p;
      a[4] !== s || a[5] !== t || a[6] !== e || a[7] !== n
        ? ((p = function (o) {
            var r = function () {
              (o.commit(),
                (i.current = !0),
                (s.current = m(e, t, n)),
                window.removeEventListener("unload", r));
            };
            return r;
          }),
          (a[4] = s),
          (a[5] = t),
          (a[6] = e),
          (a[7] = n),
          (a[8] = p))
        : (p = a[8]);
      var _ = u(p),
        f;
      a[9] !== s || a[10] !== _
        ? ((f = function () {
            var e = s.current,
              t = _(e);
            return (window.addEventListener("unload", t), t);
          }),
          (a[9] = s),
          (a[10] = _),
          (a[11] = f))
        : (f = a[11]);
      var g;
      (a[12] !== s ? ((g = [s]), (a[12] = s), (a[13] = g)) : (g = a[13]),
        c(f, g));
      var h;
      a[14] !== s
        ? ((h = function (t) {
            var e, n, r, a, i, l;
            s.current.videoPlayResult = o(
              "WAWebWamEnumVideoPlayResult",
            ).VIDEO_PLAY_RESULT.OK;
            var u =
                (e = (n = t.current) == null ? void 0 : n.videoHeight) != null
                  ? e
                  : 0,
              c =
                (r = (a = t.current) == null ? void 0 : a.videoWidth) != null
                  ? r
                  : 0;
            ((s.current.height = u),
              (s.current.width = c),
              (s.current.videoDuration = Math.floor(
                (i = (l = t.current) == null ? void 0 : l.duration) != null
                  ? i
                  : 0,
              )));
          }),
          (a[14] = s),
          (a[15] = h))
        : (h = a[15]);
      var y = r("useWAWebStableCallback")(h),
        C;
      a[16] !== s
        ? ((C = function (t) {
            var e;
            s.current.videoPlayT =
              ((e = s.current.videoPlayT) != null ? e : 0) + Math.floor(t);
          }),
          (a[16] = s),
          (a[17] = C))
        : (C = a[17]);
      var b = r("useWAWebStableCallback")(C),
        v;
      a[18] !== s
        ? ((v = function () {
            i.current && s.current.startVideoInitialBufferingT();
          }),
          (a[18] = s),
          (a[19] = v))
        : (v = a[19]);
      var S = r("useWAWebStableCallback")(v),
        R;
      a[20] !== s
        ? ((R = function () {
            i.current &&
              (s.current.markVideoInitialBufferingT(), (i.current = !1));
          }),
          (a[20] = s),
          (a[21] = R))
        : (R = a[21]);
      var L = r("useWAWebStableCallback")(R),
        E;
      a[22] !== s
        ? ((E = function (t, n) {
            var e, r;
            s.current.finishCount = n;
            var o =
              ((e = (r = t.current) == null ? void 0 : r.duration) != null
                ? e
                : 0) * n;
            s.current.videoPlayT = Math.floor(o);
          }),
          (a[22] = s),
          (a[23] = E))
        : (E = a[23]);
      var k = r("useWAWebStableCallback")(E),
        I;
      a[24] !== s
        ? ((I = function (t) {
            var e,
              n,
              r =
                (e =
                  (n = t.current) == null || (n = n.error) == null
                    ? void 0
                    : n.code) != null
                  ? e
                  : null;
            r != null &&
              (s.current.videoPlayResult = o(
                "WAWebWamEnumVideoPlayResult",
              ).VIDEO_PLAY_RESULT.ERROR_PLAYER);
          }),
          (a[24] = s),
          (a[25] = I))
        : (I = a[25]);
      var T = r("useWAWebStableCallback")(I),
        D;
      a[26] !== L ||
      a[27] !== k ||
      a[28] !== T ||
      a[29] !== b ||
      a[30] !== y ||
      a[31] !== S
        ? ((D = {
            onChannelVideoPlaying: y,
            onChannelVideoPause: b,
            onChannelVideoWaiting: S,
            onChannelVideoCanPlay: L,
            onChannelVideoEnded: k,
            onChannelVideoError: T,
          }),
          (a[26] = L),
          (a[27] = k),
          (a[28] = T),
          (a[29] = b),
          (a[30] = y),
          (a[31] = S),
          (a[32] = D))
        : (D = a[32]);
      var x;
      return (
        a[33] !== s || a[34] !== D
          ? ((x = { channelsVideoPlayRef: s, videoProps: D }),
            (a[33] = s),
            (a[34] = D),
            (a[35] = x))
          : (x = a[35]),
        x
      );
    }
    l.useWAWebNewsletterVideoPlayMetric = p;
  },
  98,
);
