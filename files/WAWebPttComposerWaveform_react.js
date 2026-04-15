__d(
  "WAWebPttComposerWaveform.react",
  [
    "$InternalEnum",
    "WAMemoizeOne",
    "WANullthrows",
    "WAPttComposerScaleWaveform",
    "WAPttWaveformGenerateHeightJitterValues",
    "WAWebClock",
    "WAWebPttComposerRangeInput.react",
    "WAWebThemeContext",
    "lodash",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebAnimationFrames",
    "useWAWebDebouncedCallback",
    "useWAWebDevicePixelRatio",
    "useWAWebMeasure",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = u.useEffect,
      p = u.useMemo,
      _ = u.useRef,
      f = u.useState,
      g = n("$InternalEnum").Mirrored([
        "DRAFT_PREVIEW",
        "INCOMING_UNPLAYED_MESSAGE",
        "INCOMING_PLAYED_MESSAGE",
        "OUTGOING_UNPLAYED_MESSAGE",
        "OUTGOING_PLAYED_MESSAGE",
        "STATUS_MESSAGE",
      ]),
      h = n("$InternalEnum").Mirrored(["RECORDER", "PREVIEW", "VOICE_STATUS"]);
    function y(e) {
      var t = o("react-compiler-runtime").c(11),
        n = r("useWAWebMeasure")(),
        a = n[0],
        i = n[1],
        l = i.height,
        u = i.width,
        c;
      t[0] !== l || t[1] !== e || t[2] !== u
        ? ((c =
            u === 0 || l === 0
              ? null
              : s.jsx(C, babelHelpers.extends({}, e, { width: u, height: l }))),
          (t[0] = l),
          (t[1] = e),
          (t[2] = u),
          (t[3] = c))
        : (c = t[3]);
      var d = c,
        m,
        p;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = { className: "x1n2onr6 x1iyjqo2" }),
          (p = { className: "x10l6tqk x13vifvy x1o0tod" }),
          (t[4] = m),
          (t[5] = p))
        : ((m = t[4]), (p = t[5]));
      var _;
      t[6] !== d
        ? ((_ = s.jsx("div", babelHelpers.extends({}, p, { children: d }))),
          (t[6] = d),
          (t[7] = _))
        : (_ = t[7]);
      var f;
      return (
        t[8] !== a || t[9] !== _
          ? ((f = s.jsx(
              "div",
              babelHelpers.extends({ ref: a }, m, { children: _ }),
            )),
            (t[8] = a),
            (t[9] = _),
            (t[10] = f))
          : (f = t[10]),
        f
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(75),
        n = _(),
        a = e.disabled,
        i = e.getCurrentTime,
        l = e.getDuration,
        u = e.getSamples,
        c = e.height,
        p = e.heightJitterFactor,
        g = e.jitterValuesCount,
        y = e.live,
        C = e.location,
        v = e.mode,
        R = e.onSeek,
        E = e.onSeekEnd,
        k = e.sampleRate,
        I = e.skipThumb,
        T = e.tabIndex,
        D = e.width,
        x = r("useWAWebDevicePixelRatio")(),
        $ = d(o("WAWebThemeContext").ThemeContext),
        P = $.theme,
        N;
      t[0] !== C || t[1] !== P
        ? ((N = L(P, C)), (t[0] = C), (t[1] = P), (t[2] = N))
        : (N = t[2]);
      var M = N,
        w = p != null ? p / 2 : 0,
        A;
      t[3] !== w || t[4] !== C
        ? ((A = S(C, w)), (t[3] = w), (t[4] = C), (t[5] = A))
        : (A = t[5]);
      var F = A,
        O = F.calculateInset,
        B = F.draw,
        W;
      t[6] !== w || t[7] !== g
        ? ((W = o(
            "WAPttWaveformGenerateHeightJitterValues",
          ).generateJitterDistributionArrays(w, g, g)),
          (t[6] = w),
          (t[7] = g),
          (t[8] = W))
        : (W = t[8]);
      var q = W,
        U = f(null),
        V = U[0],
        H = U[1],
        G;
      t[9] !== i ? ((G = i()), (t[9] = i), (t[10] = G)) : (G = t[10]);
      var z;
      t[11] !== l ? ((z = l()), (t[11] = l), (t[12] = z)) : (z = t[12]);
      var j;
      t[13] !== G || t[14] !== z
        ? ((j = { value: G, max: z }), (t[13] = G), (t[14] = z), (t[15] = j))
        : (j = t[15]);
      var K = f(j),
        Q = K[0],
        X = K[1],
        Y;
      t[16] !== i || t[17] !== l
        ? ((Y = function () {
            X({ value: i(), max: l() });
          }),
          (t[16] = i),
          (t[17] = l),
          (t[18] = Y))
        : (Y = t[18]);
      var J = r("useWAWebDebouncedCallback")(Y, 500),
        Z;
      t[19] !== J
        ? ((Z = function () {
            (J(), J.flush());
          }),
          (t[19] = J),
          (t[20] = Z))
        : (Z = t[20]);
      var ee = Z,
        te,
        ne;
      (t[21] !== v || t[22] !== ee
        ? ((te = function () {
            v === h.PREVIEW && ee();
          }),
          (ne = [v, ee]),
          (t[21] = v),
          (t[22] = ee),
          (t[23] = te),
          (t[24] = ne))
        : ((te = t[23]), (ne = t[24])),
        m(te, ne));
      var re = r("useLazyRef")(b),
        oe;
      t[25] !== M ||
      t[26] !== B ||
      t[27] !== i ||
      t[28] !== l ||
      t[29] !== u ||
      t[30] !== c ||
      t[31] !== q ||
      t[32] !== v ||
      t[33] !== x ||
      t[34] !== k ||
      t[35] !== re ||
      t[36] !== V ||
      t[37] !== I ||
      t[38] !== J ||
      t[39] !== D
        ? ((oe = function () {
            (J(),
              B({
                canvas: r("WANullthrows")(n.current),
                samples: u(),
                width: D,
                height: c,
                currentTime: V != null ? V : i(),
                duration: l(),
                sampleRate: k,
                colors: M,
                mode: v,
                pixelRatio: x,
                scaleSamples: re.current,
                skipThumb: I != null ? I : !1,
                jitterValues: q,
              }));
          }),
          (t[25] = M),
          (t[26] = B),
          (t[27] = i),
          (t[28] = l),
          (t[29] = u),
          (t[30] = c),
          (t[31] = q),
          (t[32] = v),
          (t[33] = x),
          (t[34] = k),
          (t[35] = re),
          (t[36] = V),
          (t[37] = I),
          (t[38] = J),
          (t[39] = D),
          (t[40] = oe))
        : (oe = t[40]);
      var ae = oe,
        ie;
      (t[41] !== y
        ? ((ie = { active: y }), (t[41] = y), (t[42] = ie))
        : (ie = t[42]),
        r("useWAWebAnimationFrames")(ae, ie));
      var le, se;
      (t[43] !== ae || t[44] !== y
        ? ((le = function () {
            y || ae();
          }),
          (se = [y, ae]),
          (t[43] = ae),
          (t[44] = y),
          (t[45] = le),
          (t[46] = se))
        : ((le = t[45]), (se = t[46])),
        m(le, se));
      var ue;
      t[47] !== ae || t[48] !== R
        ? ((ue = function (t) {
            (R == null || R(t), H(t), ae());
          }),
          (t[47] = ae),
          (t[48] = R),
          (t[49] = ue))
        : (ue = t[49]);
      var ce = ue,
        de;
      t[50] !== ae || t[51] !== R || t[52] !== E || t[53] !== ee
        ? ((de = function (t) {
            (H(null), R == null || R(t), E(t), ae(), ee());
          }),
          (t[50] = ae),
          (t[51] = R),
          (t[52] = E),
          (t[53] = ee),
          (t[54] = de))
        : (de = t[54]);
      var me = de,
        pe = x * D,
        _e = x * c,
        fe = D + "px",
        ge = c + "px",
        he;
      t[55] !== fe || t[56] !== ge
        ? ((he = { width: fe, height: ge }),
          (t[55] = fe),
          (t[56] = ge),
          (t[57] = he))
        : (he = t[57]);
      var ye;
      t[58] !== pe || t[59] !== _e || t[60] !== he
        ? ((ye = s.jsx("canvas", { ref: n, width: pe, height: _e, style: he })),
          (t[58] = pe),
          (t[59] = _e),
          (t[60] = he),
          (t[61] = ye))
        : (ye = t[61]);
      var Ce = ye;
      if (v === h.RECORDER) return Ce;
      var be = Q.max,
        ve = Q.value,
        Se =
          o("WAWebClock").Clock.durationStr(ve) +
          "/" +
          o("WAWebClock").Clock.durationStr(be),
        Re;
      t[62] !== O || t[63] !== D
        ? ((Re = O(D)), (t[62] = O), (t[63] = D), (t[64] = Re))
        : (Re = t[64]);
      var Le;
      return (
        t[65] !== Ce ||
        t[66] !== a ||
        t[67] !== ce ||
        t[68] !== me ||
        t[69] !== be ||
        t[70] !== ve ||
        t[71] !== Se ||
        t[72] !== Re ||
        t[73] !== T
          ? ((Le = s.jsx(r("WAWebPttComposerRangeInput.react"), {
              value: ve,
              valueText: Se,
              min: 0,
              max: be,
              smallSkip: 1,
              largeSkip: 10,
              onChange: ce,
              onCommit: me,
              disabled: a,
              tabIndex: T,
              inset: Re,
              children: Ce,
            })),
            (t[65] = Ce),
            (t[66] = a),
            (t[67] = ce),
            (t[68] = me),
            (t[69] = be),
            (t[70] = ve),
            (t[71] = Se),
            (t[72] = Re),
            (t[73] = T),
            (t[74] = Le))
          : (Le = t[74]),
        Le
      );
    }
    function b() {
      var e = r("WAMemoizeOne")(v);
      return function (t, n) {
        return e({ samples: t, inputSize: t.length, desiredSize: n });
      };
    }
    function v(e) {
      var t = e.desiredSize,
        n = e.samples;
      return r("WAPttComposerScaleWaveform")(n, t);
    }
    function S(e, t) {
      t === void 0 && (t = 0);
      var n = I(e),
        r = n.barSpacing,
        o = n.barWidth,
        a = r / 2,
        i = o + r,
        l = o,
        s = 7,
        u = 14,
        c = 6,
        d = 0;
      function m(e) {
        var n = e.canvas,
          r = e.colors,
          c = e.currentTime,
          m = e.duration,
          y = e.height,
          C = e.jitterValues,
          b = e.mode,
          v = e.pixelRatio,
          S = e.sampleRate,
          L = e.scaleSamples,
          E = e.width,
          k,
          I,
          T,
          D,
          x = m === 0 ? 0 : c / m;
        if (b === h.RECORDER) {
          k = e.samples;
          var $ = E - m * S * i;
          ((I = $ > 0 ? 0 : Math.floor(-$ / i)), (T = $ + I * i), (D = E));
        } else if (b === h.VOICE_STATUS) {
          var P = c / m,
            N = P * e.samples.length,
            M = N + S;
          ((k = e.samples.slice(N, M)), (I = 0), (T = 0), (D = E));
        } else {
          k = L(e.samples, f(E));
          var w = g(E),
            A = w[0],
            F = w[1];
          ((T = A - o / 2 - a), (I = 0));
          var O = A - o / 2,
            B = E - F + o / 2;
          D = O + x * (B - O);
        }
        var W = n.getContext("2d");
        ((W.lineCap = "round"),
          W.setTransform(v, 0, 0, v, 0, 0),
          W.clearRect(0, 0, E, y));
        for (var q = I; q < k.length; q++) {
          var U = T + (q - I) * i + a,
            V = U + o,
            H = void 0;
          if (b === h.PREVIEW) H = 1;
          else if (b === h.RECORDER) {
            var G = U,
              z = E - V;
            H = R(G < z ? Math.min(1, G / s) : Math.min(1, z / u));
          } else if (((H = 1), t != null)) {
            var j = Math.floor(d / C.length),
              K = C[(q + j) % C.length],
              Q = K[d % K.length],
              X = Math.abs(K[0]);
            (q % 2 === 0 && (Q *= -1), (H = H - X - Q));
          }
          var Y = Math.max(0, H * (l + k[q] * (y - l)));
          _(W, r, U, (y - Y) / 2, o, Y, D);
        }
        if (b === h.PREVIEW && !e.skipThumb) {
          var J = g(E),
            Z = J[0],
            ee = J[1],
            te = Z,
            ne = E - ee,
            re = te + x * (ne - te);
          p(W, re, y / 2, r.thumb);
        }
        d += 1;
      }
      function p(e, t, n, r) {
        (e.beginPath(),
          e.arc(t, n, c, 0, 2 * Math.PI, !1),
          (e.fillStyle = r),
          e.fill());
      }
      function _(e, t, n, r, o, a, i) {
        if (!(o === 0 || a === 0)) {
          var l = Math.min(o / 2, a / 2),
            s = i >= n + o ? t.barColorPlayed : t.barColorUnplayed;
          (a <= o
            ? ((e.fillStyle = s),
              e.beginPath(),
              e.arc(n + o / 2, r + a / 2, l, 0, 2 * Math.PI),
              e.fill())
            : ((e.strokeStyle = s),
              (e.lineWidth = l * 2),
              e.beginPath(),
              e.moveTo(n + o / 2, r + l),
              e.lineTo(n + o / 2, r + a - l),
              e.stroke()),
            i > n &&
              i < n + o &&
              ((e.globalCompositeOperation = "source-atop"),
              (e.fillStyle = t.barColorPlayed),
              e.rect(n, r, i - n, a),
              e.fill(),
              (e.globalCompositeOperation = "source-over")));
        }
      }
      function f(e) {
        var t = e - 2 * c;
        return Math.floor(t / i);
      }
      function g(e) {
        var t = i * (f(e) - 1),
          n = (e - t) / 2;
        return [n, n];
      }
      return { draw: m, calculateInset: g };
    }
    function R(e) {
      return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
    }
    var L = r("lodash").memoize(
      function (e, t) {
        return {
          barColorUnplayed: E("barColorUnplayed", t),
          barColorPlayed: E("barColorPlayed", t),
          thumb: E("thumb", t),
        };
      },
      function (e, t) {
        return e + " " + t;
      },
    );
    function E(e, t) {
      return getComputedStyle(r("WANullthrows")(document.body))
        .getPropertyValue(r("WANullthrows")(k.get(t))[e])
        .trim();
    }
    var k = new Map([
      [
        g.DRAFT_PREVIEW,
        {
          barColorUnplayed: "--ptt-waveform-preview-unplayed",
          barColorPlayed: "--ptt-waveform-preview-played",
          thumb: "--ptt-draft-thumb",
        },
      ],
      [
        g.INCOMING_UNPLAYED_MESSAGE,
        {
          barColorUnplayed: "--ptt-waveform-incoming-unplayed",
          barColorPlayed: "--ptt-waveform-incoming-played",
          thumb: "--ptt-thumb-incoming-unplayed",
        },
      ],
      [
        g.INCOMING_PLAYED_MESSAGE,
        {
          barColorUnplayed: "--ptt-waveform-incoming-unplayed",
          barColorPlayed: "--ptt-waveform-incoming-played",
          thumb: "--ptt-thumb-incoming-played",
        },
      ],
      [
        g.OUTGOING_UNPLAYED_MESSAGE,
        {
          barColorUnplayed: "--ptt-waveform-outgoing-unplayed",
          barColorPlayed: "--ptt-waveform-outgoing-played",
          thumb: "--ptt-thumb-outgoing-unplayed",
        },
      ],
      [
        g.OUTGOING_PLAYED_MESSAGE,
        {
          barColorUnplayed: "--ptt-waveform-outgoing-unplayed",
          barColorPlayed: "--ptt-waveform-outgoing-played",
          thumb: "--ptt-thumb-outgoing-played",
        },
      ],
      [
        g.STATUS_MESSAGE,
        {
          barColorUnplayed: "--status-primary",
          barColorPlayed: "--status-primary",
          thumb: "--status-primary",
        },
      ],
    ]);
    function I(e) {
      return e === g.STATUS_MESSAGE
        ? { barWidth: 3.75, barSpacing: 4.5 }
        : { barWidth: 2.5, barSpacing: 1.8 };
    }
    ((l.WaveformLocation = g),
      (l.WaveformMode = h),
      (l.Waveform = y),
      (l.getWaveformBarDimensions = I));
  },
  98,
);
