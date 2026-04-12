__d(
  "WAWebVoipAudioWaveform.react",
  ["WAWebVelocityAnimate", "react", "stylex"],
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
      var n = t.accentColor,
        o = t.audioLevel,
        a = o === void 0 ? 0 : o,
        i = t.barCount,
        l = i === void 0 ? p : i,
        s = t.isActive,
        c = s === void 0 ? !0 : s,
        _ = t.scale,
        g = _ === void 0 ? 1 : _,
        h = m([]),
        b = m([]),
        S = m(null),
        R = m(null),
        E = m(null);
      return (
        d(
          function () {
            if (
              (R.current != null &&
                (window.clearTimeout(R.current), (R.current = null)),
              !c || a === 0)
            ) {
              (h.current.forEach(function (e) {
                e && (e.style.height = y + f * 2 + "px");
              }),
                b.current.forEach(function (e) {
                  e && (e.style.height = y + "px");
                }),
                S.current != null &&
                  (window.cancelAnimationFrame(S.current), (S.current = null)),
                (R.current = window.setTimeout(function () {
                  E.current &&
                    r("WAWebVelocityAnimate")(
                      E.current,
                      { opacity: [0, 1] },
                      { duration: 300, easing: "easeOutQuart" },
                    );
                }, v)));
              return;
            }
            E.current &&
              r("WAWebVelocityAnimate")(
                E.current,
                { opacity: [1, E.current.style.opacity || 0] },
                { duration: 300, easing: "easeOutQuart" },
              );
            var e = Math.max(0, Math.min(1, a)),
              t = C - y,
              n = Array.from({ length: l }, function (n, r) {
                var o = Math.abs(r - Math.floor(l / 2)),
                  a = 1 - o / Math.floor(l / 2),
                  i = 0.7 + Math.random() * 0.3,
                  s = a * i * e;
                return y + t * s;
              });
            return (
              h.current.forEach(function (e, t) {
                if (e) {
                  var r,
                    o = (r = n[t]) != null ? r : y;
                  e.style.height = o + f * 2 + "px";
                }
              }),
              b.current.forEach(function (e, t) {
                if (e) {
                  var r,
                    o = (r = n[t]) != null ? r : y;
                  e.style.height = o + "px";
                }
              }),
              function () {
                R.current != null &&
                  (window.clearTimeout(R.current), (R.current = null));
              }
            );
          },
          [a, l, c],
        ),
        u.jsx("div", {
          ref: E,
          children: u.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(L.scaleWrapper(g)),
              {
                children: u.jsx("div", {
                  className: "xlup9mm x17dzmu4",
                  children: u.jsx(
                    "div",
                    babelHelpers.extends({}, e.props(L.barsContainer(l)), {
                      children: Array.from({ length: l }, function (t, o) {
                        return u.jsxs(
                          "div",
                          {
                            className:
                              "x1n2onr6 xci0xqf xlup9mm x78zum5 x6s0dn4 xl56j7k x2lah0s",
                            children: [
                              u.jsx("div", {
                                ref: function (t) {
                                  h.current[o] = t;
                                },
                                className:
                                  "x10l6tqk xci0xqf xt8t1vi x1xc408v x129tdwq x15urzxu xcrclan x5uqrmk x1od0jb8 x1hagigm",
                              }),
                              u.jsx(
                                "div",
                                babelHelpers.extends(
                                  {
                                    ref: function (t) {
                                      b.current[o] = t;
                                    },
                                  },
                                  (e || (e = r("stylex"))).props(
                                    L.accentBar,
                                    n != null && L.accentBarColor(n),
                                  ),
                                ),
                              ),
                            ],
                          },
                          o,
                        );
                      }),
                    }),
                  ),
                }),
              },
            ),
          ),
        })
      );
    }
    ((E.displayName = E.name + " [from " + i.id + "]"), (l.default = E));
  },
  98,
);
