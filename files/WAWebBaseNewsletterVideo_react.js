__d(
  "WAWebBaseNewsletterVideo.react",
  [
    "WAWebFrontendMsgGetters",
    "WAWebNewsletterVideoPlayLoggingContext",
    "react",
    "react-compiler-runtime",
    "useWAWebBaseVideoCommon",
    "useWAWebCanPlaybackAudio",
    "useWAWebNewsletterVideoPlayMetric",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["autoPlay", "children", "className", "msg", "ref", "srcObject"],
      s = ["videoCallbacks"],
      u;
    function c(e) {
      if (e == null) throw new TypeError("Cannot destructure " + e);
    }
    var d = u || (u = o("react")),
      m = u,
      p = m.useContext,
      _ = m.useImperativeHandle;
    function f(t) {
      var n,
        a = o("react-compiler-runtime").c(75),
        i,
        l,
        u,
        m,
        f,
        g,
        h;
      a[0] !== t
        ? ((i = t.autoPlay),
          (l = t.children),
          (u = t.className),
          (m = t.msg),
          (g = t.ref),
          (h = t.srcObject),
          (f = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l),
          (a[3] = u),
          (a[4] = m),
          (a[5] = f),
          (a[6] = g),
          (a[7] = h))
        : ((i = a[1]),
          (l = a[2]),
          (u = a[3]),
          (m = a[4]),
          (f = a[5]),
          (g = a[6]),
          (h = a[7]));
      var y, C;
      if (a[8] !== f) {
        var b = f;
        ((C = b.videoCallbacks),
          (y = babelHelpers.objectWithoutPropertiesLoose(b, s)),
          (a[8] = f),
          (a[9] = y),
          (a[10] = C));
      } else ((y = a[9]), (C = a[10]));
      var v = p(r("WAWebNewsletterVideoPlayLoggingContext")),
        S = v.finishCount,
        R = v.setFinishCount,
        L;
      if (a[11] !== m) {
        var E;
        (a[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = /@.*/), (a[13] = E))
          : (E = a[13]),
          (L = o("WAWebFrontendMsgGetters")
            .getChat(m)
            .id.toString()
            .replace(E, "")),
          (a[11] = m),
          (a[12] = L));
      } else L = a[12];
      var k = L,
        I = (n = m.serverId) != null ? n : 0,
        T = o("useWAWebCanPlaybackAudio").useCanPlaybackAudio(m),
        D;
      a[14] !== I
        ? ((D = I.toString()), (a[14] = I), (a[15] = D))
        : (D = a[15]);
      var x = o(
          "useWAWebNewsletterVideoPlayMetric",
        ).useWAWebNewsletterVideoPlayMetric(m, k, D),
        $ = x.videoProps,
        P;
      a[16] !== $
        ? ((P = babelHelpers.extends({}, (c($), $))), (a[16] = $), (a[17] = P))
        : (P = a[17]);
      var N;
      a[18] !== P
        ? ((N = {
            onPlayingExtra: function (t) {
              P.onChannelVideoPlaying == null || P.onChannelVideoPlaying(t);
            },
            onPauseExtra: function (t) {
              P.onChannelVideoPause == null || P.onChannelVideoPause(t);
            },
          }),
          (a[18] = P),
          (a[19] = N))
        : (N = a[19]);
      var M = r("useWAWebBaseVideoCommon")(i, h, f.src, y, N),
        w = M.getAudioDisabled,
        A = M.getBuffered,
        F = M.getCurrentTime,
        O = M.getDuration,
        B = M.getMuted,
        W = M.getPaused,
        q = M.getPlaybackRate,
        U = M.getVolume,
        V = M.pause,
        H = M.pauseAndReset,
        G = M.play,
        z = M.setCurrentTime,
        j = M.setDuration,
        K = M.setMuted,
        Q = M.setPlaybackRate,
        X = M.setRefVideo,
        Y = M.setVolume,
        J = M.underlyingVideo,
        Z = M.videoRef,
        ee = M.wrappedProps,
        te;
      a[20] !== T || a[21] !== w
        ? ((te = function () {
            return T ? w() : !0;
          }),
          (a[20] = T),
          (a[21] = w),
          (a[22] = te))
        : (te = a[22]);
      var ne = r("useWAWebStableCallback")(te),
        re;
      a[23] !== T || a[24] !== B
        ? ((re = function () {
            return T ? B() : !0;
          }),
          (a[23] = T),
          (a[24] = B),
          (a[25] = re))
        : (re = a[25]);
      var oe = r("useWAWebStableCallback")(re),
        ae;
      a[26] !== T || a[27] !== K
        ? ((ae = function (t) {
            K(T ? t : !0);
          }),
          (a[26] = T),
          (a[27] = K),
          (a[28] = ae))
        : (ae = a[28]);
      var ie = r("useWAWebStableCallback")(ae),
        le;
      a[29] !== P
        ? ((le = function () {
            P.onChannelVideoWaiting == null || P.onChannelVideoWaiting();
          }),
          (a[29] = P),
          (a[30] = le))
        : (le = a[30]);
      var se = r("useWAWebStableCallback")(le),
        ue;
      a[31] !== P
        ? ((ue = function () {
            P.onChannelVideoCanPlay == null || P.onChannelVideoCanPlay();
          }),
          (a[31] = P),
          (a[32] = ue))
        : (ue = a[32]);
      var ce = r("useWAWebStableCallback")(ue),
        de;
      a[33] !== P || a[34] !== Z
        ? ((de = function () {
            P.onChannelVideoError == null || P.onChannelVideoError(Z);
          }),
          (a[33] = P),
          (a[34] = Z),
          (a[35] = de))
        : (de = a[35]);
      var me = r("useWAWebStableCallback")(de),
        pe;
      a[36] !== S || a[37] !== R || a[38] !== P || a[39] !== Z
        ? ((pe = function () {
            (R(S + 1),
              P.onChannelVideoEnded == null || P.onChannelVideoEnded(Z, S));
          }),
          (a[36] = S),
          (a[37] = R),
          (a[38] = P),
          (a[39] = Z),
          (a[40] = pe))
        : (pe = a[40]);
      var _e = r("useWAWebStableCallback")(pe),
        fe,
        ge;
      (a[41] !== ce ||
      a[42] !== _e ||
      a[43] !== A ||
      a[44] !== F ||
      a[45] !== O ||
      a[46] !== ne ||
      a[47] !== oe ||
      a[48] !== W ||
      a[49] !== q ||
      a[50] !== U ||
      a[51] !== me ||
      a[52] !== se ||
      a[53] !== V ||
      a[54] !== H ||
      a[55] !== G ||
      a[56] !== z ||
      a[57] !== j ||
      a[58] !== ie ||
      a[59] !== Q ||
      a[60] !== Y ||
      a[61] !== J
        ? ((fe = function () {
            return {
              getAudioDisabled: ne,
              play: G,
              pause: V,
              getPaused: W,
              getCurrentTime: F,
              setCurrentTime: z,
              getDuration: O,
              setDuration: j,
              getVolume: U,
              setVolume: Y,
              getMuted: oe,
              setMuted: ie,
              getPlaybackRate: q,
              setPlaybackRate: Q,
              getBuffered: A,
              underlyingVideo: J,
              pauseAndReset: H,
              onWaiting: se,
              canPlay: ce,
              end: _e,
              onError: me,
            };
          }),
          (ge = [
            ne,
            G,
            V,
            W,
            F,
            z,
            O,
            j,
            U,
            Y,
            oe,
            ie,
            q,
            Q,
            A,
            J,
            H,
            se,
            ce,
            _e,
            me,
          ]),
          (a[41] = ce),
          (a[42] = _e),
          (a[43] = A),
          (a[44] = F),
          (a[45] = O),
          (a[46] = ne),
          (a[47] = oe),
          (a[48] = W),
          (a[49] = q),
          (a[50] = U),
          (a[51] = me),
          (a[52] = se),
          (a[53] = V),
          (a[54] = H),
          (a[55] = G),
          (a[56] = z),
          (a[57] = j),
          (a[58] = ie),
          (a[59] = Q),
          (a[60] = Y),
          (a[61] = J),
          (a[62] = fe),
          (a[63] = ge))
        : ((fe = a[62]), (ge = a[63])),
        _(g, fe, ge));
      var he = f.src != null ? i : void 0,
        ye;
      a[64] !== u
        ? ((ye = u != null ? u : "x1lliihq xh8yej3 x5yr21d"),
          (a[64] = u),
          (a[65] = ye))
        : (ye = a[65]);
      var Ce = !T || y.muted === !0,
        be;
      return (
        a[66] !== l ||
        a[67] !== y ||
        a[68] !== X ||
        a[69] !== he ||
        a[70] !== ye ||
        a[71] !== Ce ||
        a[72] !== C ||
        a[73] !== ee
          ? ((be = d.jsx(
              "video",
              babelHelpers.extends(
                {},
                C,
                { ref: X, autoPlay: he, className: ye },
                y,
                ee,
                { muted: Ce, children: l },
              ),
            )),
            (a[66] = l),
            (a[67] = y),
            (a[68] = X),
            (a[69] = he),
            (a[70] = ye),
            (a[71] = Ce),
            (a[72] = C),
            (a[73] = ee),
            (a[74] = be))
          : (be = a[74]),
        be
      );
    }
    l.default = f;
  },
  98,
);
