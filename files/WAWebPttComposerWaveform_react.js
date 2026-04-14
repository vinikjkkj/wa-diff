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
      var t = r("useWAWebMeasure")(),
        n = t[0],
        o = t[1],
        a = o.height,
        i = o.width,
        l =
          i === 0 || a === 0
            ? null
            : s.jsx(C, babelHelpers.extends({}, e, { width: i, height: a }));
      return s.jsx("div", {
        ref: n,
        className: "x1n2onr6 x1iyjqo2",
        children: s.jsx("div", {
          className: "x10l6tqk x13vifvy x1o0tod",
          children: l,
        }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = _(),
        n = e.disabled,
        a = e.getCurrentTime,
        i = e.getDuration,
        l = e.getSamples,
        u = e.height,
        g = e.heightJitterFactor,
        y = e.jitterValuesCount,
        C = e.live,
        v = e.location,
        R = e.mode,
        L = e.onSeek,
        E = e.onSeekEnd,
        k = e.sampleRate,
        I = e.skipThumb,
        T = e.tabIndex,
        D = e.width,
        x = r("useWAWebDevicePixelRatio")(),
        $ = d(o("WAWebThemeContext").ThemeContext),
        P = $.theme,
        N = S(P, v),
        M = g != null ? g / 2 : 0,
        w = p(
          function () {
            return b(v, M);
          },
          [v, M],
        ),
        A = w.calculateInset,
        F = w.draw,
        O = p(
          function () {
            return o(
              "WAPttWaveformGenerateHeightJitterValues",
            ).generateJitterDistributionArrays(M, y, y);
          },
          [M, y],
        ),
        B = f(null),
        W = B[0],
        q = B[1],
        U = f({ value: a(), max: i() }),
        V = U[0],
        H = U[1],
        G = r("useWAWebDebouncedCallback")(function () {
          H({ value: a(), max: i() });
        }, 500),
        z = c(
          function () {
            (G(), G.flush());
          },
          [G],
        );
      m(
        function () {
          R === h.PREVIEW && z();
        },
        [R, z],
      );
      var j = r("useLazyRef")(function () {
          var e = r("WAMemoizeOne")(function (e) {
            var t = e.desiredSize,
              n = e.inputSize,
              o = e.samples;
            return r("WAPttComposerScaleWaveform")(o, t);
          });
          return function (t, n) {
            return e({ samples: t, inputSize: t.length, desiredSize: n });
          };
        }),
        K = c(
          function () {
            (G(),
              F({
                canvas: r("WANullthrows")(t.current),
                samples: l(),
                width: D,
                height: u,
                currentTime: W != null ? W : a(),
                duration: i(),
                sampleRate: k,
                colors: N,
                mode: R,
                pixelRatio: x,
                scaleSamples: j.current,
                skipThumb: I != null ? I : !1,
                jitterValues: O,
              }));
          },
          [F, l, D, u, a, W, i, k, N, R, G, x, j, I, O],
        );
      (r("useWAWebAnimationFrames")(K, { active: C }),
        m(
          function () {
            C || K();
          },
          [C, K],
        ));
      var Q = c(
          function (e) {
            (L == null || L(e), q(e), K());
          },
          [q, L, K],
        ),
        X = c(
          function (e) {
            (q(null), L == null || L(e), E(e), K(), z());
          },
          [q, L, E, K, z],
        ),
        Y = s.jsx("canvas", {
          ref: t,
          width: x * D,
          height: x * u,
          style: { width: D + "px", height: u + "px" },
        });
      if (R === h.RECORDER) return Y;
      var J = V.max,
        Z = V.value,
        ee =
          o("WAWebClock").Clock.durationStr(Z) +
          "/" +
          o("WAWebClock").Clock.durationStr(J);
      return s.jsx(r("WAWebPttComposerRangeInput.react"), {
        value: Z,
        valueText: ee,
        min: 0,
        max: J,
        smallSkip: 1,
        largeSkip: 10,
        onChange: Q,
        onCommit: X,
        disabled: n,
        tabIndex: T,
        inset: A(D),
        children: Y,
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e, t) {
      t === void 0 && (t = 0);
      var n = E(e),
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
          S = e.pixelRatio,
          R = e.sampleRate,
          L = e.scaleSamples,
          E = e.width,
          k,
          I,
          T,
          D,
          x = m === 0 ? 0 : c / m;
        if (b === h.RECORDER) {
          k = e.samples;
          var $ = E - m * R * i;
          ((I = $ > 0 ? 0 : Math.floor(-$ / i)), (T = $ + I * i), (D = E));
        } else if (b === h.VOICE_STATUS) {
          var P = c / m,
            N = P * e.samples.length,
            M = N + R;
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
          W.setTransform(S, 0, 0, S, 0, 0),
          W.clearRect(0, 0, E, y));
        for (var q = I; q < k.length; q++) {
          var U = T + (q - I) * i + a,
            V = U + o,
            H = void 0;
          if (b === h.PREVIEW) H = 1;
          else if (b === h.RECORDER) {
            var G = U,
              z = E - V;
            H = v(G < z ? Math.min(1, G / s) : Math.min(1, z / u));
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
    function v(e) {
      return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
    }
    var S = r("lodash").memoize(
      function (e, t) {
        return {
          barColorUnplayed: R("barColorUnplayed", t),
          barColorPlayed: R("barColorPlayed", t),
          thumb: R("thumb", t),
        };
      },
      function (e, t) {
        return e + " " + t;
      },
    );
    function R(e, t) {
      return getComputedStyle(r("WANullthrows")(document.body))
        .getPropertyValue(r("WANullthrows")(L.get(t))[e])
        .trim();
    }
    var L = new Map([
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
    function E(e) {
      return e === g.STATUS_MESSAGE
        ? { barWidth: 3.75, barSpacing: 4.5 }
        : { barWidth: 2.5, barSpacing: 1.8 };
    }
    ((l.WaveformLocation = g),
      (l.WaveformMode = h),
      (l.Waveform = y),
      (l.getWaveformBarDimensions = E));
  },
  98,
);
