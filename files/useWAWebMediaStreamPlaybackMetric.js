__d(
  "useWAWebMediaStreamPlaybackMetric",
  [
    "WAWebMediaStreamPlaybackWamEvent",
    "WAWebPipVideoStreaming",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumPlaybackOriginType",
    "WAWebWamEnumPlaybackStateType",
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
    function m(e) {
      return new (o(
        "WAWebMediaStreamPlaybackWamEvent",
      ).MediaStreamPlaybackWamEvent)({
        playbackOrigin: e,
        mediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.VIDEO,
        didPlay: !1,
        playbackState: o("WAWebWamEnumPlaybackStateType").PLAYBACK_STATE_TYPE
          .IDLE,
      });
    }
    function p(e, t, n, a) {
      var i = o("react-compiler-runtime").c(46),
        l =
          a === void 0
            ? o("WAWebWamEnumPlaybackOriginType").PLAYBACK_ORIGIN_TYPE
                .CONVERSATION
            : a,
        s = d(!0),
        p;
      i[0] !== l
        ? ((p = function () {
            return m(l);
          }),
          (i[0] = l),
          (i[1] = p))
        : (p = i[1]);
      var _ = r("useLazyRef")(p),
        f;
      i[2] !== _ || i[3] !== l
        ? ((f = function (t) {
            var e = function () {
              (t.commit(),
                (s.current = !0),
                (_.current = m(l)),
                window.removeEventListener("unload", e));
            };
            return e;
          }),
          (i[2] = _),
          (i[3] = l),
          (i[4] = f))
        : (f = i[4]);
      var g = u(f),
        h;
      i[5] !== _ || i[6] !== g || i[7] !== e
        ? ((h = function () {
            if (
              !(
                e == null ||
                !e.startsWith(o("WAWebPipVideoStreaming").VIDEO_STREAM_URL)
              )
            ) {
              var t = _.current,
                n = g(t);
              return (window.addEventListener("unload", n), n);
            }
          }),
          (i[5] = _),
          (i[6] = g),
          (i[7] = e),
          (i[8] = h))
        : (h = i[8]);
      var y;
      (i[9] !== _ || i[10] !== e
        ? ((y = [e, _]), (i[9] = _), (i[10] = e), (i[11] = y))
        : (y = i[11]),
        c(h, y));
      var C;
      i[12] !== _ || i[13] !== n || i[14] !== t
        ? ((C = function (r) {
            (t.current &&
              (_.current.videoDuration = Math.floor(t.current.duration)),
              n.onDurationChange == null || n.onDurationChange(r));
          }),
          (i[12] = _),
          (i[13] = n),
          (i[14] = t),
          (i[15] = C))
        : (C = i[15]);
      var b = r("useWAWebStableCallback")(C),
        v;
      i[16] !== _ || i[17] !== n
        ? ((v = function (t) {
            ((_.current.playbackState = o(
              "WAWebWamEnumPlaybackStateType",
            ).PLAYBACK_STATE_TYPE.READY_PLAY),
              _.current.didPlay || (_.current.didPlay = !0),
              n.onPlaying == null || n.onPlaying());
          }),
          (i[16] = _),
          (i[17] = n),
          (i[18] = v))
        : (v = i[18]);
      var S = r("useWAWebStableCallback")(v),
        R;
      i[19] !== _ || i[20] !== n
        ? ((R = function (t) {
            (_.current.playbackState ===
              o("WAWebWamEnumPlaybackStateType").PLAYBACK_STATE_TYPE
                .READY_PLAY &&
              (_.current.playbackState = o(
                "WAWebWamEnumPlaybackStateType",
              ).PLAYBACK_STATE_TYPE.READY_PAUSE),
              n.onPause == null || n.onPause(t));
          }),
          (i[19] = _),
          (i[20] = n),
          (i[21] = R))
        : (R = i[21]);
      var L = r("useWAWebStableCallback")(R),
        E;
      i[22] !== _ || i[23] !== n
        ? ((E = function (t) {
            ((_.current.playbackState = o(
              "WAWebWamEnumPlaybackStateType",
            ).PLAYBACK_STATE_TYPE.BUFFERING),
              s.current
                ? _.current.startInitialBufferingT()
                : _.current.startTotalRebufferingT(),
              n.onWaiting == null || n.onWaiting(t));
          }),
          (i[22] = _),
          (i[23] = n),
          (i[24] = E))
        : (E = i[24]);
      var k = r("useWAWebStableCallback")(E),
        I;
      i[25] !== _ || i[26] !== n
        ? ((I = function (t) {
            ((_.current.playbackState = o(
              "WAWebWamEnumPlaybackStateType",
            ).PLAYBACK_STATE_TYPE.READY_PAUSE),
              s.current
                ? (_.current.markInitialBufferingT(), (s.current = !1))
                : _.current.markTotalRebufferingT(),
              n.onCanPlay == null || n.onCanPlay(t));
          }),
          (i[25] = _),
          (i[26] = n),
          (i[27] = I))
        : (I = i[27]);
      var T = r("useWAWebStableCallback")(I),
        D;
      i[28] !== _ || i[29] !== n
        ? ((D = function (t) {
            ((_.current.playbackState = o(
              "WAWebWamEnumPlaybackStateType",
            ).PLAYBACK_STATE_TYPE.ENDED),
              n.onEnded == null || n.onEnded(t));
          }),
          (i[28] = _),
          (i[29] = n),
          (i[30] = D))
        : (D = i[30]);
      var x = r("useWAWebStableCallback")(D),
        $;
      i[31] !== _ || i[32] !== n || i[33] !== t
        ? (($ = function (r) {
            var e, a, i;
            _.current.playbackState = o(
              "WAWebWamEnumPlaybackStateType",
            ).PLAYBACK_STATE_TYPE.ERROR;
            var l =
              (e =
                (a =
                  (i = t.current) == null || (i = i.error) == null
                    ? void 0
                    : i.code) != null
                  ? a
                  : r.code) != null
                ? e
                : null;
            (l != null && (_.current.playbackError = l),
              n.onError == null || n.onError(r));
          }),
          (i[31] = _),
          (i[32] = n),
          (i[33] = t),
          (i[34] = $))
        : ($ = i[34]);
      var P = r("useWAWebStableCallback")($),
        N;
      i[35] !== T ||
      i[36] !== b ||
      i[37] !== x ||
      i[38] !== P ||
      i[39] !== L ||
      i[40] !== S ||
      i[41] !== k
        ? ((N = {
            onDurationChange: b,
            onPlaying: S,
            onWaiting: k,
            onCanPlay: T,
            onEnded: x,
            onError: P,
            onPause: L,
          }),
          (i[35] = T),
          (i[36] = b),
          (i[37] = x),
          (i[38] = P),
          (i[39] = L),
          (i[40] = S),
          (i[41] = k),
          (i[42] = N))
        : (N = i[42]);
      var M;
      return (
        i[43] !== _ || i[44] !== N
          ? ((M = { mediaStreamPlaybackMetricRef: _, wrappedProps: N }),
            (i[43] = _),
            (i[44] = N),
            (i[45] = M))
          : (M = i[45]),
        M
      );
    }
    l.useMediaStreamPlaybackMetric = p;
  },
  98,
);
