__d(
  "WAWebPipVideoControls.react",
  [
    "cx",
    "fbt",
    "WAWebClassnames",
    "WAWebClock",
    "WAWebExternalLink.react",
    "WAWebMediaGatingUtils",
    "WAWebPipCloseButton.react",
    "WAWebPipConst",
    "WAWebPipCtwaSourceButton.react",
    "WAWebPipFullscreenToggleButton.react",
    "WAWebRefreshIcon.react",
    "WAWebStopEvent",
    "WAWebSvgButton.react",
    "WAWebUA",
    "WAWebURLUtils",
    "WAWebVideoPauseIcon.react",
    "WAWebVideoPlayIcon.react",
    "WAWebVideoPlaybackSpeed",
    "WAWebVideoPlaybackSpeedButton.react",
    "WAWebVideoVolume1Icon.react",
    "WAWebVideoVolume2Icon.react",
    "WAWebVideoVolumeIcon.react",
    "WAWebVideoVolumeMutedIcon.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useRef,
      f = m.useState,
      g = 4.5,
      h = 5,
      y = 0.25;
    function C(e, t) {
      switch (!0) {
        case t:
          return o("WAWebVideoVolumeMutedIcon.react").VideoVolumeMutedIcon;
        case e < 0.5:
          return o("WAWebVideoVolume1Icon.react").VideoVolume1Icon;
        case e >= 1:
          return o("WAWebVideoVolumeIcon.react").VideoVolumeIcon;
      }
      return o("WAWebVideoVolume2Icon.react").VideoVolume2Icon;
    }
    function b(e) {
      return r("WAWebURLUtils").withoutWww(r("WAWebURLUtils").hostname(e));
    }
    function v(e, t, n, r) {
      return e
        ? {
            ariaLabel: u._(/*BTDS*/ "Pause"),
            Icon: o("WAWebVideoPauseIcon.react").VideoPauseIcon,
            onClick: n,
          }
        : t
          ? {
              ariaLabel: u._(/*BTDS*/ "Replay"),
              Icon: o("WAWebRefreshIcon.react").RefreshIcon,
              onClick: r,
            }
          : {
              ariaLabel: u._(/*BTDS*/ "Play"),
              Icon: o("WAWebVideoPlayIcon.react").VideoPlayIcon,
              onClick: r,
            };
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.duration,
        r = e.mouseOverProgressRatio;
      if (r === void 0) {
        var a;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = d.jsx("div", { className: "_ahbn" })), (t[0] = a))
            : (a = t[0]),
          a
        );
      }
      var i;
      t[1] !== n || t[2] !== r
        ? ((i = o("WAWebClock").Clock.durationStr(r * n)),
          (t[1] = n),
          (t[2] = r),
          (t[3] = i))
        : (i = t[3]);
      var l = i,
        s = r * 100 + "%",
        u = "_ahbn",
        c;
      t[4] !== s ? ((c = { left: s }), (t[4] = s), (t[5] = c)) : (c = t[5]);
      var m;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "_ahbp",
            "_ahbo",
          )),
          (t[6] = m))
        : (m = t[6]);
      var p;
      t[7] !== l
        ? ((p = d.jsx("div", { className: m, children: l })),
          (t[7] = l),
          (t[8] = p))
        : (p = t[8]);
      var _;
      return (
        t[9] !== c || t[10] !== p
          ? ((_ = d.jsx("div", { className: u, style: c, children: p })),
            (t[9] = c),
            (t[10] = p),
            (t[11] = _))
          : (_ = t[11]),
        _
      );
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(52),
        n = e.bufferedTime,
        r = e.duration,
        a = e.isFullscreenMode,
        i = e.isMouseOverProgressBar,
        l = e.mouseOverProgressRatio,
        s = e.onChange,
        u = e.onMouseDown,
        c = e.onMouseEnter,
        m = e.onMouseLeave,
        p = e.onMouseOverProgressRatioChange,
        _ = e.onMouseUp,
        f = e.progress,
        y = f / r;
      y > 1 && (y = 1);
      var C = y * 100 + "%",
        b;
      t[0] !== C ? ((b = { width: C }), (t[0] = C), (t[1] = b)) : (b = t[1]);
      var v = b,
        R = n / r;
      R > 1 && (R = 1);
      var L = R * 100 + "%",
        E;
      t[2] !== L ? ((E = { width: L }), (t[2] = L), (t[3] = E)) : (E = t[3]);
      var k = E,
        I;
      t[4] !== C ? ((I = { left: C }), (t[4] = C), (t[5] = I)) : (I = t[5]);
      var T = I,
        D = "_ahb8",
        x;
      t[6] !== m || t[7] !== p
        ? ((x = function (t) {
            (m(t), p(void 0));
          }),
          (t[6] = m),
          (t[7] = p),
          (t[8] = x))
        : (x = t[8]);
      var $;
      t[9] !== r || t[10] !== a || t[11] !== p || t[12] !== f
        ? (($ = function (t) {
            var e = a ? h : g,
              n = t.currentTarget.getBoundingClientRect().left,
              o = t.pageX,
              i = t.currentTarget.offsetWidth,
              l = o - n - e,
              s = i - 2 * e,
              u = (o - n - e) / s,
              c = s * (f / r),
              d = Math.abs(l - c) <= e;
            (u < 0 ? (u = d ? 0 : void 0) : u > 1 && (u = d ? 1 : void 0),
              p(u));
          }),
          (t[9] = r),
          (t[10] = a),
          (t[11] = p),
          (t[12] = f),
          (t[13] = $))
        : ($ = t[13]);
      var P = "_ahb9",
        N;
      t[14] !== r
        ? ((N = r.toLocaleString("en-US", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
            roundingMode: "trunc",
            useGrouping: !1,
          })),
          (t[14] = r),
          (t[15] = N))
        : (N = t[15]);
      var M;
      t[16] !== s || t[17] !== u || t[18] !== _ || t[19] !== f || t[20] !== N
        ? ((M = d.jsx("input", {
            tabIndex: -1,
            "data-testid": void 0,
            className: P,
            dir: "ltr",
            onChange: s,
            onMouseDown: u,
            onMouseUp: _,
            type: "range",
            min: "0",
            max: N,
            step: "any",
            value: f,
          })),
          (t[16] = s),
          (t[17] = u),
          (t[18] = _),
          (t[19] = f),
          (t[20] = N),
          (t[21] = M))
        : (M = t[21]);
      var w = "_ahba",
        A;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = d.jsx("div", {
            className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
              "_ahbb",
              "_ahbe",
            ),
          })),
          (t[22] = A))
        : (A = t[22]);
      var F = R === 1,
        O;
      if (t[23] !== F) {
        var B;
        ((O = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((B = {}), (B._ahbl = F), (B._ahbb = !0), (B._ahbd = !0), B),
        )),
          (t[23] = F),
          (t[24] = O));
      } else O = t[24];
      var W;
      t[25] !== k || t[26] !== O
        ? ((W = d.jsx("div", { className: O, style: k })),
          (t[25] = k),
          (t[26] = O),
          (t[27] = W))
        : (W = t[27]);
      var q = y === 1,
        U;
      if (t[28] !== q) {
        var V;
        ((U = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((V = {}), (V._ahbl = q), (V._ahbb = !0), (V._ahbc = !0), V),
        )),
          (t[28] = q),
          (t[29] = U));
      } else U = t[29];
      var H;
      t[30] !== v || t[31] !== U
        ? ((H = d.jsx("div", {
            "data-testid": void 0,
            className: U,
            style: v,
          })),
          (t[30] = v),
          (t[31] = U),
          (t[32] = H))
        : (H = t[32]);
      var G = !i,
        z;
      if (t[33] !== G) {
        var j;
        ((z = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((j = {}), (j._ahbg = G), (j._ahbf = !0), j),
        )),
          (t[33] = G),
          (t[34] = z));
      } else z = t[34];
      var K;
      t[35] !== z || t[36] !== T
        ? ((K = d.jsx("div", { className: z, style: T })),
          (t[35] = z),
          (t[36] = T),
          (t[37] = K))
        : (K = t[37]);
      var Q;
      t[38] !== r || t[39] !== l
        ? ((Q = d.jsx(S, { mouseOverProgressRatio: l, duration: r })),
          (t[38] = r),
          (t[39] = l),
          (t[40] = Q))
        : (Q = t[40]);
      var X;
      t[41] !== W || t[42] !== H || t[43] !== K || t[44] !== Q
        ? ((X = d.jsxs("div", { className: w, children: [A, W, H, K, Q] })),
          (t[41] = W),
          (t[42] = H),
          (t[43] = K),
          (t[44] = Q),
          (t[45] = X))
        : (X = t[45]);
      var Y;
      return (
        t[46] !== c || t[47] !== X || t[48] !== x || t[49] !== $ || t[50] !== M
          ? ((Y = d.jsxs("div", {
              className: D,
              onClick: o("WAWebStopEvent").stopPropagation,
              onMouseDown: o("WAWebStopEvent").stopPropagation,
              onMouseEnter: c,
              onMouseLeave: x,
              onMouseMove: $,
              children: [M, X],
            })),
            (t[46] = c),
            (t[47] = X),
            (t[48] = x),
            (t[49] = $),
            (t[50] = M),
            (t[51] = Y))
          : (Y = t[51]),
        Y
      );
    }
    var L = 0.05;
    function E(e) {
      var t = o("react-compiler-runtime").c(46),
        n = e.defaultValume,
        a = e.disableAudioControls,
        i = e.isVolumeControlActive,
        l = e.muted,
        s = e.onBlur,
        c = e.onFocus,
        m = e.onMouseEnter,
        p = e.onMouseLeave,
        _ = e.onMute,
        f = e.onUnmute,
        g = e.onVolumeValueChange,
        h = e.volume,
        b;
      t[0] !== g || t[1] !== h
        ? ((b = function (t) {
            var e = t.key;
            e === "ArrowRight" || e === "ArrowUp"
              ? (t.preventDefault(), t.stopPropagation(), g(Math.min(1, h + L)))
              : (e === "ArrowLeft" || e === "ArrowDown") &&
                (t.preventDefault(),
                t.stopPropagation(),
                g(Math.max(0, h - L)));
          }),
          (t[0] = g),
          (t[1] = h),
          (t[2] = b))
        : (b = t[2]);
      var v = b,
        S = a === !0 || l || h === 0,
        R;
      e: {
        if (a === !0) {
          var E;
          (t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((E = u._(/*BTDS*/ "Audio is disabled")), (t[3] = E))
            : (E = t[3]),
            (R = E));
          break e;
        }
        if (S) {
          var k;
          (t[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((k = u._(/*BTDS*/ "Unmute")), (t[4] = k))
            : (k = t[4]),
            (R = k));
          break e;
        }
        var I;
        (t[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = u._(/*BTDS*/ "Mute")), (t[5] = I))
          : (I = t[5]),
          (R = I));
      }
      var T = R,
        D;
      t[6] !== S || t[7] !== h
        ? ((D = C(h, S)), (t[6] = S), (t[7] = h), (t[8] = D))
        : (D = t[8]);
      var x;
      t[9] !== n || t[10] !== S || t[11] !== _ || t[12] !== f || t[13] !== g
        ? ((x = function () {
            (S ? f() : _(), n === 0 && g(y));
          }),
          (t[9] = n),
          (t[10] = S),
          (t[11] = _),
          (t[12] = f),
          (t[13] = g),
          (t[14] = x))
        : (x = t[14]);
      var $;
      t[15] !== D || t[16] !== x || t[17] !== T
        ? (($ = d.jsx(r("WAWebSvgButton.react"), {
            tabIndex: 0,
            "aria-label": T,
            Icon: D,
            displayInline: !0,
            onClick: x,
          })),
          (t[15] = D),
          (t[16] = x),
          (t[17] = T),
          (t[18] = $))
        : ($ = t[18]);
      var P = $,
        N = h * 100 + "%",
        M;
      t[19] !== N
        ? ((M = { width: N }), (t[19] = N), (t[20] = M))
        : (M = t[20]);
      var w = M,
        A = i && !l && a !== !0,
        F;
      if (t[21] !== A) {
        var O;
        ((F = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((O = {}), (O._ahbi = A), (O._ahbh = !0), O),
        )),
          (t[21] = A),
          (t[22] = F));
      } else F = t[22];
      var B = h === 1,
        W;
      if (t[23] !== B) {
        var q;
        ((W = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((q = {}),
          (q._ahbl = B),
          (q._ahbk = o("WAWebUA").UA.isGecko),
          (q._ahbj = !0),
          q),
        )),
          (t[23] = B),
          (t[24] = W));
      } else W = t[24];
      var U;
      t[25] !== W || t[26] !== w
        ? ((U = d.jsx("div", { className: W, style: w })),
          (t[25] = W),
          (t[26] = w),
          (t[27] = U))
        : (U = t[27]);
      var V;
      t[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = u._(/*BTDS*/ "Volume")), (t[28] = V))
        : (V = t[28]);
      var H;
      t[29] !== g
        ? ((H = function (t) {
            g(parseFloat(t.target.value));
          }),
          (t[29] = g),
          (t[30] = H))
        : (H = t[30]);
      var G;
      t[31] !== H || t[32] !== h
        ? ((G = d.jsx("input", {
            tabIndex: 0,
            "aria-label": V,
            className: "_ahbm",
            dir: "ltr",
            onChange: H,
            type: "range",
            min: "0",
            max: 1,
            step: "any",
            value: h,
          })),
          (t[31] = H),
          (t[32] = h),
          (t[33] = G))
        : (G = t[33]);
      var z;
      t[34] !== U || t[35] !== G || t[36] !== F
        ? ((z = d.jsxs("div", { className: F, children: [U, G] })),
          (t[34] = U),
          (t[35] = G),
          (t[36] = F),
          (t[37] = z))
        : (z = t[37]);
      var j = z,
        K;
      return (
        t[38] !== v ||
        t[39] !== s ||
        t[40] !== c ||
        t[41] !== m ||
        t[42] !== p ||
        t[43] !== j ||
        t[44] !== P
          ? ((K = d.jsxs("div", {
              className: "_ahb1",
              onClick: o("WAWebStopEvent").stopPropagation,
              onMouseEnter: m,
              onMouseLeave: p,
              onMouseDown: o("WAWebStopEvent").stopPropagation,
              onFocus: c,
              onBlur: s,
              onKeyDown: v,
              children: [P, j],
            })),
            (t[38] = v),
            (t[39] = s),
            (t[40] = c),
            (t[41] = m),
            (t[42] = p),
            (t[43] = j),
            (t[44] = P),
            (t[45] = K))
          : (K = t[45]),
        K
      );
    }
    function k(e, t) {
      var n = o("react-compiler-runtime").c(2),
        r = t === void 0 ? !1 : t,
        a = f(e),
        i = a[0],
        l = a[1],
        s = f(e),
        u = s[0],
        c = s[1];
      u !== e && !r && (l(e), c(e));
      var d;
      return (
        n[0] !== i ? ((d = [i, l]), (n[0] = i), (n[1] = d)) : (d = n[1]),
        d
      );
    }
    function I(t) {
      var n = o("react-compiler-runtime").c(97),
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
        s = l.className,
        u = l.ctwaSourceUrl,
        c = l.duration,
        m = l.isFullscreenMode,
        g = l.isVideoPlaying,
        h = l.newPiPStyle,
        y = l.onClose,
        C = l.onFullscreenToggle,
        S = l.onMutedValueChange,
        L = l.onPause,
        I = l.onPlay,
        T = l.onProgressChange,
        D = l.onVolumeValueChange,
        x = l.playbackRate,
        $ = l.onPlaybackRateChange,
        P = h === void 0 ? !1 : h,
        N =
          x === void 0
            ? o("WAWebVideoPlaybackSpeed").DEFAULT_VIDEO_PLAYBACK_RATE
            : x,
        M = _(null),
        w = _(null),
        A = f(!1),
        F = A[0],
        O = A[1],
        B = f(!1),
        W = B[0],
        q = B[1],
        U = f(!1),
        V = U[0],
        H = U[1],
        G = f(!1),
        z = G[0],
        j = G[1],
        K = f(void 0),
        Q = K[0],
        X = K[1],
        Y = k(a.muted),
        J = Y[0],
        Z = Y[1],
        ee = k(a.volume),
        te = ee[0],
        ne = ee[1],
        re = k(a.bufferedTime),
        oe = re[0],
        ae = re[1],
        ie = k(a.progress, V),
        le = ie[0],
        se = ie[1],
        ue,
        ce;
      (n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((ue = function () {
            var e;
            (e = w.current) == null || e.focus();
          }),
          (ce = []),
          (n[3] = ue),
          (n[4] = ce))
        : ((ue = n[3]), (ce = n[4])),
        p(ue, ce));
      var de;
      n[5] !== u
        ? ((de = function (t) {
            (t.preventDefault(),
              t.stopPropagation(),
              u != null && o("WAWebExternalLink.react").openExternalLink(u));
          }),
          (n[5] = u),
          (n[6] = de))
        : (de = n[6]);
      var me = de,
        pe;
      n[7] !== S || n[8] !== Z
        ? ((pe = function () {
            (S(!1), Z(!1));
          }),
          (n[7] = S),
          (n[8] = Z),
          (n[9] = pe))
        : (pe = n[9]);
      var _e = pe,
        fe;
      n[10] !== S || n[11] !== Z
        ? ((fe = function () {
            (S(!0), Z(!0));
          }),
          (n[10] = S),
          (n[11] = Z),
          (n[12] = fe))
        : (fe = n[12]);
      var ge = fe,
        he;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((he = function (t) {
            j(!0);
          }),
          (n[13] = he))
        : (he = n[13]);
      var ye = he,
        Ce;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ce = function (t) {
            j(!1);
          }),
          (n[14] = Ce))
        : (Ce = n[14]);
      var be = Ce,
        ve;
      n[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((ve = function (t) {
            O(!0);
          }),
          (n[15] = ve))
        : (ve = n[15]);
      var Se = ve,
        Re;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((Re = function (t) {
            O(!1);
          }),
          (n[16] = Re))
        : (Re = n[16]);
      var Le = Re,
        Ee;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ee = function () {
            q(!0);
          }),
          (n[17] = Ee))
        : (Ee = n[17]);
      var ke = Ee,
        Ie;
      n[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ie = function (t) {
            ((t.relatedTarget instanceof Node &&
              !t.currentTarget.contains(t.relatedTarget)) ||
              t.relatedTarget == null) &&
              q(!1);
          }),
          (n[18] = Ie))
        : (Ie = n[18]);
      var Te = Ie,
        De;
      n[19] !== D || n[20] !== ne
        ? ((De = function (t) {
            (ne(t), D(t));
          }),
          (n[19] = D),
          (n[20] = ne),
          (n[21] = De))
        : (De = n[21]);
      var xe = De,
        $e;
      n[22] !== g || n[23] !== L
        ? (($e = function (t) {
            (H(!0), (M.current = g), g && L());
          }),
          (n[22] = g),
          (n[23] = L),
          (n[24] = $e))
        : ($e = n[24]);
      var Pe = $e,
        Ne;
      n[25] !== I
        ? ((Ne = function (t) {
            (H(!1), M.current === !0 && I(), (M.current = null));
          }),
          (n[25] = I),
          (n[26] = Ne))
        : (Ne = n[26]);
      var Me = Ne,
        we;
      n[27] !== oe || n[28] !== c || n[29] !== T || n[30] !== ae || n[31] !== se
        ? ((we = function (t) {
            var e = parseFloat(t.target.value);
            T(e);
            var n = Math.abs(oe - c) < 0.1 ? oe : 0;
            (se(e), ae(n));
          }),
          (n[27] = oe),
          (n[28] = c),
          (n[29] = T),
          (n[30] = ae),
          (n[31] = se),
          (n[32] = we))
        : (we = n[32]);
      var Ae = we,
        Fe = F || W,
        Oe = Fe && !J,
        Be;
      n[33] !== m || n[34] !== le
        ? ((Be = m
            ? d.jsx("div", {
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease("_ahb7", "_ahb6"),
                onClick: o("WAWebStopEvent").stopPropagation,
                children: o("WAWebClock").Clock.durationStr(le),
              })
            : null),
          (n[33] = m),
          (n[34] = le),
          (n[35] = Be))
        : (Be = n[35]);
      var We = Be,
        qe;
      n[36] !== c || n[37] !== m
        ? ((qe = m
            ? d.jsx("div", {
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease("_ahb7", "_ahb2"),
                onClick: o("WAWebStopEvent").stopPropagation,
                children: o("WAWebClock").Clock.durationStr(c),
              })
            : null),
          (n[36] = c),
          (n[37] = m),
          (n[38] = qe))
        : (qe = n[38]);
      var Ue = qe,
        Ve = s != null ? s : "_aha-",
        He = P && Math.ceil(le) >= c,
        Ge;
      n[39] !== He || n[40] !== g || n[41] !== L || n[42] !== I
        ? ((Ge = v(g, He, L, I)),
          (n[39] = He),
          (n[40] = g),
          (n[41] = L),
          (n[42] = I),
          (n[43] = Ge))
        : (Ge = n[43]);
      var ze = Ge,
        je;
      if (n[44] !== Ve || n[45] !== m || n[46] !== P) {
        var Ke;
        ((je = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((Ke = {}), (Ke._aha_ = m), (Ke._ahb0 = P), (Ke[Ve] = !0), Ke),
        )),
          (n[44] = Ve),
          (n[45] = m),
          (n[46] = P),
          (n[47] = je));
      } else je = n[47];
      var Qe;
      n[48] !== ze.Icon || n[49] !== ze.ariaLabel || n[50] !== ze.onClick
        ? ((Qe = d.jsx("div", {
            className: "_ahb5",
            onClick: o("WAWebStopEvent").stopPropagation,
            onMouseDown: o("WAWebStopEvent").stopPropagation,
            onMouseUp: o("WAWebStopEvent").stopPropagation,
            children: d.jsx(r("WAWebSvgButton.react"), {
              ref: w,
              "aria-label": ze.ariaLabel,
              Icon: ze.Icon,
              displayInline: !0,
              onClick: ze.onClick,
            }),
          })),
          (n[48] = ze.Icon),
          (n[49] = ze.ariaLabel),
          (n[50] = ze.onClick),
          (n[51] = Qe))
        : (Qe = n[51]);
      var Xe;
      n[52] !== oe ||
      n[53] !== c ||
      n[54] !== Ae ||
      n[55] !== Pe ||
      n[56] !== Me ||
      n[57] !== m ||
      n[58] !== z ||
      n[59] !== Q ||
      n[60] !== a.progress
        ? ((Xe = d.jsx(R, {
            progress: a.progress,
            duration: c,
            bufferedTime: oe,
            isFullscreenMode: m,
            isMouseOverProgressBar: z,
            mouseOverProgressRatio: Q,
            onChange: Ae,
            onMouseDown: Pe,
            onMouseUp: Me,
            onMouseEnter: ye,
            onMouseLeave: be,
            onMouseOverProgressRatioChange: X,
          })),
          (n[52] = oe),
          (n[53] = c),
          (n[54] = Ae),
          (n[55] = Pe),
          (n[56] = Me),
          (n[57] = m),
          (n[58] = z),
          (n[59] = Q),
          (n[60] = a.progress),
          (n[61] = Xe))
        : (Xe = n[61]);
      var Ye;
      n[62] !== $ || n[63] !== N
        ? ((Ye =
            o("WAWebMediaGatingUtils").isVideoPlaybackSpeedEnabled() &&
            $ != null
              ? d.jsx("div", {
                  className: "xamitd3 x2fvf9 x182iqb8",
                  onClick: o("WAWebStopEvent").stopPropagation,
                  onMouseDown: o("WAWebStopEvent").stopPropagation,
                  children: d.jsx(r("WAWebVideoPlaybackSpeedButton.react"), {
                    playbackRate: N,
                    onClick: $,
                  }),
                })
              : null),
          (n[62] = $),
          (n[63] = N),
          (n[64] = Ye))
        : (Ye = n[64]);
      var Je;
      n[65] !== ge ||
      n[66] !== _e ||
      n[67] !== xe ||
      n[68] !== Fe ||
      n[69] !== J ||
      n[70] !== a.disableAudioControls ||
      n[71] !== a.volume ||
      n[72] !== te
        ? ((Je = d.jsx(E, {
            muted: J,
            volume: te,
            defaultValume: a.volume,
            onUnmute: _e,
            onMute: ge,
            onVolumeValueChange: xe,
            isVolumeControlActive: Fe,
            onFocus: ke,
            onBlur: Te,
            onMouseEnter: Se,
            onMouseLeave: Le,
            disableAudioControls: a.disableAudioControls,
          })),
          (n[65] = ge),
          (n[66] = _e),
          (n[67] = xe),
          (n[68] = Fe),
          (n[69] = J),
          (n[70] = a.disableAudioControls),
          (n[71] = a.volume),
          (n[72] = te),
          (n[73] = Je))
        : (Je = n[73]);
      var Ze;
      n[74] !== m || n[75] !== C
        ? ((Ze =
            C != null
              ? d.jsx("div", {
                  className: "_ahb3",
                  children: d.jsx(r("WAWebPipFullscreenToggleButton.react"), {
                    isFullscreenMode: m,
                    onClick: C,
                    isStatic: !0,
                  }),
                })
              : null),
          (n[74] = m),
          (n[75] = C),
          (n[76] = Ze))
        : (Ze = n[76]);
      var et;
      n[77] !== m || n[78] !== y
        ? ((et =
            y != null
              ? d.jsx("div", {
                  className: "_ahb4",
                  children: d.jsx(r("WAWebPipCloseButton.react"), {
                    isFullscreenMode: m,
                    onClick: y,
                    isStatic: !0,
                  }),
                })
              : null),
          (n[77] = m),
          (n[78] = y),
          (n[79] = et))
        : (et = n[79]);
      var tt;
      n[80] !== u || n[81] !== me || n[82] !== m || n[83] !== Oe
        ? ((tt =
            !Oe && u != null
              ? d.jsx(r("WAWebPipCtwaSourceButton.react"), {
                  isFullscreenMode: m,
                  onClick: me,
                  isInstagram: b(u) === o("WAWebPipConst").HOSTNAME.INSTAGRAM,
                })
              : null),
          (n[80] = u),
          (n[81] = me),
          (n[82] = m),
          (n[83] = Oe),
          (n[84] = tt))
        : (tt = n[84]);
      var nt;
      return (
        n[85] !== We ||
        n[86] !== Ue ||
        n[87] !== i ||
        n[88] !== je ||
        n[89] !== Qe ||
        n[90] !== Xe ||
        n[91] !== Ye ||
        n[92] !== Je ||
        n[93] !== Ze ||
        n[94] !== et ||
        n[95] !== tt
          ? ((nt = d.jsxs("div", {
              ref: i,
              className: je,
              children: [Qe, Xe, Ye, Je, We, Ue, Ze, et, tt],
            })),
            (n[85] = We),
            (n[86] = Ue),
            (n[87] = i),
            (n[88] = je),
            (n[89] = Qe),
            (n[90] = Xe),
            (n[91] = Ye),
            (n[92] = Je),
            (n[93] = Ze),
            (n[94] = et),
            (n[95] = tt),
            (n[96] = nt))
          : (nt = n[96]),
        nt
      );
    }
    l.default = I;
  },
  226,
);
