__d(
  "WAWebVoipAudioWaveform.react",
  ["WAWebVelocityAnimate", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef,
      p = 7,
      _ = 3,
      f = 2,
      g = _ + f * 2,
      h = 0,
      y = 3,
      C = 16,
      b = 300,
      v = 1e3,
      S = { transform: "xsqj5wx", transformOrigin: "x1jpgh95", $$css: !0 },
      R = {
        display: "x78zum5",
        alignItems: "x6s0dn4",
        justifyContent: "xl56j7k",
        columnGap: "x1o1pmfc",
        width: "x5lhr3w",
        $$css: !0,
      },
      L = {
        scaleWrapper: function (t) {
          return [
            S,
            {
              "--x-transform":
                "scale(" + t + ") translateZ(0)" != null
                  ? "scale(" + t + ") translateZ(0)"
                  : void 0,
            },
          ];
        },
        barsContainer: function (t) {
          return [
            R,
            {
              "--x-width": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t * g + (t - 1) * h + "px"),
            },
          ];
        },
        accentBar: {
          position: "x10l6tqk",
          width: "x1g8rjiy",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          transition: "xcrclan",
          willChange: "x5uqrmk",
          backgroundColor: "xfn3atn",
          height: "xuoj239",
          $$css: !0,
        },
        accentBarColor: function (t) {
          return [
            { backgroundColor: t != null ? "xl8spv7" : t, $$css: !0 },
            { "--x-backgroundColor": t != null ? t : void 0 },
          ];
        },
      };
    function E(t) {
      var n = o("react-compiler-runtime").c(21),
        a = t.accentColor,
        i = t.audioLevel,
        l = t.barCount,
        s = t.isActive,
        c = t.scale,
        _ = i === void 0 ? 0 : i,
        g = l === void 0 ? p : l,
        h = s === void 0 ? !0 : s,
        b = c === void 0 ? 1 : c,
        S;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = []), (n[0] = S))
        : (S = n[0]);
      var R = m(S),
        E;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = []), (n[1] = E))
        : (E = n[1]);
      var T = m(E),
        D = m(null),
        x = m(null),
        $ = m(null),
        P,
        N;
      (n[2] !== _ || n[3] !== g || n[4] !== h
        ? ((P = function () {
            if (
              (x.current != null &&
                (window.clearTimeout(x.current), (x.current = null)),
              !h || _ === 0)
            ) {
              (R.current.forEach(I),
                T.current.forEach(k),
                D.current != null &&
                  (window.cancelAnimationFrame(D.current), (D.current = null)),
                (x.current = window.setTimeout(function () {
                  $.current &&
                    r("WAWebVelocityAnimate")(
                      $.current,
                      { opacity: [0, 1] },
                      { duration: 300, easing: "easeOutQuart" },
                    );
                }, v)));
              return;
            }
            $.current &&
              r("WAWebVelocityAnimate")(
                $.current,
                { opacity: [1, $.current.style.opacity || 0] },
                { duration: 300, easing: "easeOutQuart" },
              );
            var e = Math.max(0, Math.min(1, _)),
              t = C - y,
              n = Array.from({ length: g }, function (n, r) {
                var o = Math.abs(r - Math.floor(g / 2)),
                  a = 1 - o / Math.floor(g / 2),
                  i = 0.7 + Math.random() * 0.3,
                  l = a * i * e;
                return y + t * l;
              });
            return (
              R.current.forEach(function (e, t) {
                if (e) {
                  var r,
                    o = (r = n[t]) != null ? r : y;
                  e.style.height = o + f * 2 + "px";
                }
              }),
              T.current.forEach(function (e, t) {
                if (e) {
                  var r,
                    o = (r = n[t]) != null ? r : y;
                  e.style.height = o + "px";
                }
              }),
              function () {
                x.current != null &&
                  (window.clearTimeout(x.current), (x.current = null));
              }
            );
          }),
          (N = [_, g, h]),
          (n[2] = _),
          (n[3] = g),
          (n[4] = h),
          (n[5] = P),
          (n[6] = N))
        : ((P = n[5]), (N = n[6])),
        d(P, N));
      var M;
      n[7] !== b
        ? ((M = (e || (e = r("stylex"))).props(L.scaleWrapper(b))),
          (n[7] = b),
          (n[8] = M))
        : (M = n[8]);
      var w;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = { className: "xlup9mm x17dzmu4" }), (n[9] = w))
        : (w = n[9]);
      var A;
      n[10] !== g
        ? ((A = (e || (e = r("stylex"))).props(L.barsContainer(g))),
          (n[10] = g),
          (n[11] = A))
        : (A = n[11]);
      var F;
      n[12] !== a || n[13] !== g
        ? ((F = Array.from({ length: g }, function (t, n) {
            return u.jsxs(
              "div",
              {
                className:
                  "x1n2onr6 xci0xqf xlup9mm x78zum5 x6s0dn4 xl56j7k x2lah0s",
                children: [
                  u.jsx("div", {
                    ref: function (t) {
                      R.current[n] = t;
                    },
                    className:
                      "x10l6tqk xci0xqf xt8t1vi x1xc408v x129tdwq x15urzxu xcrclan x5uqrmk x1od0jb8 x1hagigm",
                  }),
                  u.jsx(
                    "div",
                    babelHelpers.extends(
                      {
                        ref: function (t) {
                          T.current[n] = t;
                        },
                      },
                      (e || (e = r("stylex"))).props(
                        L.accentBar,
                        a != null && L.accentBarColor(a),
                      ),
                    ),
                  ),
                ],
              },
              n,
            );
          })),
          (n[12] = a),
          (n[13] = g),
          (n[14] = F))
        : (F = n[14]);
      var O;
      n[15] !== A || n[16] !== F
        ? ((O = u.jsx(
            "div",
            babelHelpers.extends({}, w, {
              children: u.jsx(
                "div",
                babelHelpers.extends({}, A, { children: F }),
              ),
            }),
          )),
          (n[15] = A),
          (n[16] = F),
          (n[17] = O))
        : (O = n[17]);
      var B;
      return (
        n[18] !== O || n[19] !== M
          ? ((B = u.jsx("div", {
              ref: $,
              children: u.jsx(
                "div",
                babelHelpers.extends({}, M, { children: O }),
              ),
            })),
            (n[18] = O),
            (n[19] = M),
            (n[20] = B))
          : (B = n[20]),
        B
      );
    }
    function k(e) {
      e && (e.style.height = y + "px");
    }
    function I(e) {
      e && (e.style.height = y + f * 2 + "px");
    }
    l.default = E;
  },
  98,
);
