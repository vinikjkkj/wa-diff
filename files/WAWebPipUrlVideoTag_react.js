__d(
  "WAWebPipUrlVideoTag.react",
  [
    "WAWebBaseNewsletterVideo.react",
    "WAWebBaseVideo.react",
    "WAWebBaseVideoNewsletterContextProvider",
    "WAWebDebounce",
    "WAWebMsgGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebUserPrefsGeneral",
    "WAWebVideoPlayerSurface.react",
    "WAWebVideoPlayerX.react",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebOnUnmount",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = r("WAWebDebounce")(function (e, t) {
        o("WAWebUserPrefsGeneral").setMediaVolumeSettings(e, t);
      }, 500);
    function f(t) {
      var n = o("react-compiler-runtime").c(115),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.onBufferUpdate,
        c = l.onError,
        f = l.onLoadedMetadata,
        h = l.onPlaying,
        y = l.onTimeUpdate,
        C = l.onVolumeChange,
        b = l.startTime,
        v = m(null),
        S = r("useMergeRefs")(i, v),
        R = p(!1),
        L = R[0],
        E = R[1];
      r("useWAWebOnUnmount")(g);
      var k;
      n[3] !== C || n[4] !== a.callbacks
        ? ((k = function (t) {
            var e,
              n = v.current;
            if (
              ((e = a.callbacks) == null ||
                e.onVolumeChange == null ||
                e.onVolumeChange(t),
              n)
            ) {
              var r = n.getVolume(),
                o = n.getMuted(),
                i =
                  (n.getAudioDisabled == null
                    ? void 0
                    : n.getAudioDisabled()) === !0;
              (i || _(r, o), C({ volume: r, muted: o }));
            }
          }),
          (n[3] = C),
          (n[4] = a.callbacks),
          (n[5] = k))
        : (k = n[5]);
      var I = r("useWAWebStableCallback")(k),
        T;
      n[6] !== L || n[7] !== h || n[8] !== a.callbacks
        ? ((T = function (t) {
            if (!L && t) {
              var e;
              ((e = a.callbacks) == null ||
                e.onPlaying == null ||
                e.onPlaying(t),
                E(!0));
            }
            h();
          }),
          (n[6] = L),
          (n[7] = h),
          (n[8] = a.callbacks),
          (n[9] = T))
        : (T = n[9]);
      var D = r("useWAWebStableCallback")(T),
        x;
      n[10] !== b
        ? ((x = function () {
            v.current && typeof b == "number" && v.current.setCurrentTime(b);
          }),
          (n[10] = b),
          (n[11] = x))
        : (x = n[11]);
      var $ = r("useWAWebStableCallback")(x),
        P;
      n[12] !== f || n[13] !== a.callbacks || n[14] !== $ || n[15] !== b
        ? ((P = function (t) {
            if (b != null) {
              var e;
              ($(), (e = a.callbacks) == null || e.onLoadedMetadata(t));
            }
            var n = {
              duration: t.currentTarget.duration,
              volume: t.currentTarget.volume,
              muted: t.currentTarget.muted,
              videoWidth: t.currentTarget.videoWidth,
              videoHeight: t.currentTarget.videoHeight,
            };
            f(n);
          }),
          (n[12] = f),
          (n[13] = a.callbacks),
          (n[14] = $),
          (n[15] = b),
          (n[16] = P))
        : (P = n[16]);
      var N = r("useWAWebStableCallback")(P),
        M;
      n[17] !== s
        ? ((M = function () {
            v.current && s(v.current.getBuffered());
          }),
          (n[17] = s),
          (n[18] = M))
        : (M = n[18]);
      var w = M,
        A;
      n[19] !== y
        ? ((A = function (t) {
            var e = t.currentTarget.currentTime;
            y(e);
          }),
          (n[19] = y),
          (n[20] = A))
        : (A = n[20]);
      var F = A,
        O;
      n[21] !== c || n[22] !== a
        ? ((O = function (t) {
            var e,
              n,
              r =
                (e =
                  (n = v.current) == null || (n = n.underlyingVideo()) == null
                    ? void 0
                    : n.error) != null
                  ? e
                  : null;
            if (r == null && t.code != null) {
              var o;
              (c(t.code),
                a.onError(),
                (o = a.callbacks) == null || o.onError(t));
              return;
            }
            c(r == null ? void 0 : r.code, r == null ? void 0 : r.message);
          }),
          (n[21] = c),
          (n[22] = a),
          (n[23] = O))
        : (O = n[23]);
      var B = O,
        W;
      n[24] !== C
        ? ((W = function (t) {
            var e = v.current;
            e && (_(t.volume, t.muted), C(t));
          }),
          (n[24] = C),
          (n[25] = W))
        : (W = n[25]);
      var q = r("useWAWebStableCallback")(W),
        U;
      n[26] !== L || n[27] !== h
        ? ((U = function () {
            (L || E(!0), h());
          }),
          (n[26] = L),
          (n[27] = h),
          (n[28] = U))
        : (U = n[28]);
      var V = r("useWAWebStableCallback")(U),
        H;
      n[29] !== f || n[30] !== $ || n[31] !== b
        ? ((H = function (t) {
            (b != null && $(), f(t));
          }),
          (n[29] = f),
          (n[30] = $),
          (n[31] = b),
          (n[32] = H))
        : (H = n[32]);
      var G = r("useWAWebStableCallback")(H),
        z;
      n[33] !== y
        ? ((z = function (t) {
            y(t);
          }),
          (n[33] = y),
          (n[34] = z))
        : (z = n[34]);
      var j = r("useWAWebStableCallback")(z),
        K;
      n[35] !== c
        ? ((K = function (t, n) {
            c(t, n);
          }),
          (n[35] = c),
          (n[36] = K))
        : (K = n[36]);
      var Q = r("useWAWebStableCallback")(K),
        X;
      n[37] !== a
        ? ((X = function () {
            var e;
            ((e = v.current) == null || e.end(), a.onEnded());
          }),
          (n[37] = a),
          (n[38] = X))
        : (X = n[38]);
      var Y = r("useWAWebStableCallback")(X),
        J;
      n[39] !== a
        ? ((J = function () {
            var e;
            ((e = v.current) == null || e.canPlay(),
              a.onCanPlay == null || a.onCanPlay());
          }),
          (n[39] = a),
          (n[40] = J))
        : (J = n[40]);
      var Z = r("useWAWebStableCallback")(J),
        ee;
      n[41] !== a
        ? ((ee = function () {
            var e;
            ((e = v.current) == null || e.onWaiting(),
              a.onWaiting == null || a.onWaiting());
          }),
          (n[41] = a),
          (n[42] = ee))
        : (ee = n[42]);
      var te = r("useWAWebStableCallback")(ee),
        ne;
      n[43] !== $
        ? ((ne = function () {
            $();
          }),
          (n[43] = $),
          (n[44] = ne))
        : (ne = n[44]);
      var re;
      (n[45] !== $ || n[46] !== b
        ? ((re = [b, $]), (n[45] = $), (n[46] = b), (n[47] = re))
        : (re = n[47]),
        d(ne, re));
      var oe, ae;
      (n[48] === Symbol.for("react.memo_cache_sentinel")
        ? ((oe = function () {
            var e = v.current;
            if (e) {
              var t = o("WAWebUserPrefsGeneral").getMediaVolumeSettings(),
                n = t.muted,
                r = t.volume;
              (r != null && e.setVolume(r), e.setMuted(n));
            }
          }),
          (ae = []),
          (n[48] = oe),
          (n[49] = ae))
        : ((oe = n[48]), (ae = n[49])),
        d(oe, ae));
      var ie = a,
        le = ie.msg,
        se =
          le != null &&
          o("WAWebMsgGetters").getIsNewsletterMsg(le) &&
          o("WAWebNewsletterGatingUtils").isNewsletterVideoPlayLoggingEnabled();
      if (
        le != null &&
        se &&
        o("WAWebNewsletterGatingUtils").isCometVideoPlayerEnabled()
      ) {
        var ue;
        n[50] !== Z ||
        n[51] !== Q ||
        n[52] !== G ||
        n[53] !== V ||
        n[54] !== j ||
        n[55] !== q ||
        n[56] !== Y ||
        n[57] !== te ||
        n[58] !== S ||
        n[59] !== s ||
        n[60] !== a.onPause
          ? ((ue = u.jsx(r("WAWebVideoPlayerSurface.react"), {
              ref: S,
              onBufferUpdate: s,
              onPause: a.onPause,
              onPlaying: V,
              onEnded: Y,
              onError: Q,
              onTimeUpdate: j,
              onLoadedMetadata: G,
              onVolumeChange: q,
              onCanPlay: Z,
              onWaiting: te,
            })),
            (n[50] = Z),
            (n[51] = Q),
            (n[52] = G),
            (n[53] = V),
            (n[54] = j),
            (n[55] = q),
            (n[56] = Y),
            (n[57] = te),
            (n[58] = S),
            (n[59] = s),
            (n[60] = a.onPause),
            (n[61] = ue))
          : (ue = n[61]);
        var ce;
        return (
          n[62] !== a.autoPlay ||
          n[63] !== a.loggingConfig ||
          n[64] !== a.loggingToSNAPLAdditionalData ||
          n[65] !== a.mediaId ||
          n[66] !== a.poster ||
          n[67] !== a.subOrigin ||
          n[68] !== a.url ||
          n[69] !== ue
            ? ((ce = u.jsx(r("WAWebVideoPlayerX.react"), {
                autoplayEnabled: a.autoPlay,
                loggingConfig: a.loggingConfig,
                loggingToSNAPLAdditionalData: a.loggingToSNAPLAdditionalData,
                mediaId: a.mediaId,
                poster: a.poster,
                src: a.url,
                subOrigin: a.subOrigin,
                children: ue,
              })),
              (n[62] = a.autoPlay),
              (n[63] = a.loggingConfig),
              (n[64] = a.loggingToSNAPLAdditionalData),
              (n[65] = a.mediaId),
              (n[66] = a.poster),
              (n[67] = a.subOrigin),
              (n[68] = a.url),
              (n[69] = ue),
              (n[70] = ce))
            : (ce = n[70]),
          ce
        );
      }
      if (le != null && se) {
        var de;
        return (
          n[71] !== w ||
          n[72] !== Z ||
          n[73] !== Y ||
          n[74] !== B ||
          n[75] !== N ||
          n[76] !== D ||
          n[77] !== F ||
          n[78] !== I ||
          n[79] !== S ||
          n[80] !== le ||
          n[81] !== a.autoPlay ||
          n[82] !== a.callbacks ||
          n[83] !== a.children ||
          n[84] !== a.className ||
          n[85] !== a.onLoadedData ||
          n[86] !== a.onPause ||
          n[87] !== a.onWaiting ||
          n[88] !== a.poster ||
          n[89] !== a.url
            ? ((de = u.jsx(r("WAWebBaseVideoNewsletterContextProvider"), {
                children: u.jsx(r("WAWebBaseNewsletterVideo.react"), {
                  msg: le,
                  ref: S,
                  src: a.url,
                  poster: a.poster,
                  className: a.className,
                  onVolumeChange: I,
                  onEnded: Y,
                  onError: B,
                  onPause: a.onPause,
                  onPlaying: D,
                  onProgress: w,
                  onTimeUpdate: F,
                  onLoadedMetadata: N,
                  autoPlay: a.autoPlay,
                  onCanPlay: Z,
                  onWaiting: a.onWaiting,
                  onLoadedData: a.onLoadedData,
                  videoCallbacks: a.callbacks,
                  children: a.children,
                }),
              })),
              (n[71] = w),
              (n[72] = Z),
              (n[73] = Y),
              (n[74] = B),
              (n[75] = N),
              (n[76] = D),
              (n[77] = F),
              (n[78] = I),
              (n[79] = S),
              (n[80] = le),
              (n[81] = a.autoPlay),
              (n[82] = a.callbacks),
              (n[83] = a.children),
              (n[84] = a.className),
              (n[85] = a.onLoadedData),
              (n[86] = a.onPause),
              (n[87] = a.onWaiting),
              (n[88] = a.poster),
              (n[89] = a.url),
              (n[90] = de))
            : (de = n[90]),
          de
        );
      }
      var me;
      return (
        n[91] !== w ||
        n[92] !== Z ||
        n[93] !== Q ||
        n[94] !== G ||
        n[95] !== j ||
        n[96] !== q ||
        n[97] !== Y ||
        n[98] !== B ||
        n[99] !== N ||
        n[100] !== te ||
        n[101] !== D ||
        n[102] !== F ||
        n[103] !== I ||
        n[104] !== S ||
        n[105] !== s ||
        n[106] !== a.autoPlay ||
        n[107] !== a.callbacks ||
        n[108] !== a.children ||
        n[109] !== a.className ||
        n[110] !== a.onLoadedData ||
        n[111] !== a.onPause ||
        n[112] !== a.poster ||
        n[113] !== a.url
          ? ((me = u.jsx(r("WAWebBaseVideo.react"), {
              ref: S,
              src: a.url,
              poster: a.poster,
              className: a.className,
              onVolumeChange: I,
              onVolumeChangeComet: q,
              onEnded: Y,
              onError: B,
              onErrorComet: Q,
              onPause: a.onPause,
              onPlaying: D,
              onProgress: w,
              onBufferUpdateComet: s,
              onTimeUpdate: F,
              onTimeUpdateComet: j,
              onLoadedMetadata: N,
              onLoadedMetadataComet: G,
              autoPlay: a.autoPlay,
              onCanPlay: Z,
              onWaiting: te,
              onLoadedData: a.onLoadedData,
              videoCallbacks: a.callbacks,
              children: a.children,
            })),
            (n[91] = w),
            (n[92] = Z),
            (n[93] = Q),
            (n[94] = G),
            (n[95] = j),
            (n[96] = q),
            (n[97] = Y),
            (n[98] = B),
            (n[99] = N),
            (n[100] = te),
            (n[101] = D),
            (n[102] = F),
            (n[103] = I),
            (n[104] = S),
            (n[105] = s),
            (n[106] = a.autoPlay),
            (n[107] = a.callbacks),
            (n[108] = a.children),
            (n[109] = a.className),
            (n[110] = a.onLoadedData),
            (n[111] = a.onPause),
            (n[112] = a.poster),
            (n[113] = a.url),
            (n[114] = me))
          : (me = n[114]),
        me
      );
    }
    function g() {
      _.flush();
    }
    l.default = f;
  },
  98,
);
