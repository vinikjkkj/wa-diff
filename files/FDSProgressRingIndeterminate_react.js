__d(
  "FDSProgressRingIndeterminate.react",
  [
    "ix",
    "BaseLoadingStateElement.react",
    "CometImageFromIXValue.react",
    "FDSProgressRingUtils",
    "gkx",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useCurrentDisplayMode",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = "x1m1m39n-B",
      m = "x1k35ma4-B",
      p = "x2un0yo-B",
      _ = "xz9a51c-B",
      f = "x1bt8ye9-B",
      g = "xaeq8qu-B",
      h = "x1941mlr-B",
      y = "xjo493o-B",
      C = "xyllbq6-B",
      b = {
        foregroundCircle: {
          animationDuration: "x1c74tu6",
          animationFillMode: "x1u6ievf",
          animationIterationCount: "xa4qsjk",
          animationTimingFunction: "xuxiujg",
          transformOrigin: "x1bndym7",
          $$css: !0,
        },
        foregroundCircle12: { animationName: "x1iqdq0d", $$css: !0 },
        foregroundCircle16: { animationName: "x1koaglw", $$css: !0 },
        foregroundCircle20: { animationName: "x16tkgvi", $$css: !0 },
        foregroundCircle24: { animationName: "xiepp7r", $$css: !0 },
        foregroundCircle32: { animationName: "x1pb3rhs", $$css: !0 },
        foregroundCircle48: { animationName: "x1w90wak", $$css: !0 },
        foregroundCircle60: { animationName: "x1jrcm85", $$css: !0 },
        foregroundCircle72: { animationName: "xnw30k", $$css: !0 },
        root: { display: "x78zum5", $$css: !0 },
      },
      v = 2,
      S = "always-enable-animations";
    function R(t) {
      var n = o("react-compiler-runtime").c(21),
        a = t.color,
        i = t.isDecorative,
        l = t.size,
        s = t.testid,
        u = t.xstyle,
        d = t["aria-label"],
        m = t["aria-labelledby"],
        p = i === void 0 ? !1 : i,
        _;
      n[0] !== a
        ? ((_ = o("FDSProgressRingUtils").getRingColor(a)),
          (n[0] = a),
          (n[1] = _))
        : (_ = n[1]);
      var f = _,
        g = f.foregroundColor,
        h = (l - v) * Math.PI,
        y = r("useCurrentDisplayMode")(),
        C = y === "dark",
        R = C ? "dark" : "light",
        E;
      n[2] !== a || n[3] !== l || n[4] !== R
        ? ((E = L(a, l, R)), (n[2] = a), (n[3] = l), (n[4] = R), (n[5] = E))
        : (E = n[5]);
      var k = E,
        I;
      n[6] !== u ? ((I = [b.root, u]), (n[6] = u), (n[7] = I)) : (I = n[7]);
      var T;
      n[8] !== h || n[9] !== a || n[10] !== g || n[11] !== k || n[12] !== l
        ? ((T =
            a === "dark" && !r("gkx")("6275")
              ? c.jsx("svg", {
                  className: [
                    S,
                    "x1c74tu6 xa4qsjk x1kfoseq x1bndym7 x1u6ievf x1wnkzza",
                  ].join(" "),
                  height: l,
                  viewBox: "0 0 " + l + " " + l,
                  width: l,
                  children: c.jsx("circle", {
                    className: [
                      S,
                      (e || (e = r("stylex")))([
                        b.foregroundCircle,
                        l === 12 && b.foregroundCircle12,
                        l === 16 && b.foregroundCircle16,
                        l === 20 && b.foregroundCircle20,
                        l === 24 && b.foregroundCircle24,
                        l === 32 && b.foregroundCircle32,
                        l === 48 && b.foregroundCircle48,
                        l === 60 && b.foregroundCircle60,
                        l === 72 && b.foregroundCircle72,
                      ]),
                    ].join(" "),
                    cx: l / 2,
                    cy: l / 2,
                    fill: "none",
                    r: (l - v) / 2,
                    stroke: g,
                    strokeDasharray: h,
                    strokeWidth: v,
                  }),
                })
              : c.jsx("div", {
                  style: { height: l, width: l },
                  children: c.jsx(r("CometImageFromIXValue.react"), {
                    source: k,
                    testid: void 0,
                  }),
                })),
          (n[8] = h),
          (n[9] = a),
          (n[10] = g),
          (n[11] = k),
          (n[12] = l),
          (n[13] = T))
        : (T = n[13]);
      var D;
      return (
        n[14] !== d ||
        n[15] !== m ||
        n[16] !== p ||
        n[17] !== I ||
        n[18] !== T ||
        n[19] !== s
          ? ((D = c.jsx(r("BaseLoadingStateElement.react"), {
              "aria-label": d,
              "aria-labelledby": m,
              isDecorative: p,
              testid: void 0,
              xstyle: I,
              children: T,
            })),
            (n[14] = d),
            (n[15] = m),
            (n[16] = p),
            (n[17] = I),
            (n[18] = T),
            (n[19] = s),
            (n[20] = D))
          : (D = n[20]),
        D
      );
    }
    function L(e, t, n) {
      switch (t) {
        case 12:
          switch (n) {
            case "dark":
              switch (e) {
                case "blue":
                  return s("1876411");
                case "disabled_DEPRECATED":
                  return s("1876443");
                case "dark":
                  return s("1876427");
                case "light":
                  return s("1876427");
                default:
                  return s("1876427");
              }
            case "light":
              switch (e) {
                case "blue":
                  return s("1876419");
                case "disabled_DEPRECATED":
                  return s("1876451");
                case "dark":
                  return s("1876435");
                case "light":
                  return s("1876427");
                default:
                  return s("1876435");
              }
            default:
              return s("1876435");
          }
        case 16:
          switch (n) {
            case "dark":
              switch (e) {
                case "blue":
                  return s("1876412");
                case "disabled_DEPRECATED":
                  return s("1876444");
                case "dark":
                  return s("1876428");
                case "light":
                  return s("1876428");
                default:
                  return s("1876428");
              }
            case "light":
              switch (e) {
                case "blue":
                  return s("1876420");
                case "disabled_DEPRECATED":
                  return s("1876452");
                case "dark":
                  return s("1876436");
                case "light":
                  return s("1876428");
                default:
                  return s("1876436");
              }
            default:
              return s("1876436");
          }
        case 20:
          switch (n) {
            case "dark":
              switch (e) {
                case "blue":
                  return s("1876413");
                case "disabled_DEPRECATED":
                  return s("1876445");
                case "dark":
                  return s("1876429");
                case "light":
                  return s("1876429");
                default:
                  return s("1876429");
              }
            case "light":
              switch (e) {
                case "blue":
                  return s("1876421");
                case "disabled_DEPRECATED":
                  return s("1876453");
                case "dark":
                  return s("1876437");
                case "light":
                  return s("1876429");
                default:
                  return s("1876437");
              }
            default:
              return s("1876437");
          }
        case 24:
          switch (n) {
            case "dark":
              switch (e) {
                case "blue":
                  return s("1876414");
                case "disabled_DEPRECATED":
                  return s("1876446");
                case "dark":
                  return s("1876430");
                case "light":
                  return s("1876430");
                default:
                  return s("1876430");
              }
            case "light":
              switch (e) {
                case "blue":
                  return s("1876422");
                case "disabled_DEPRECATED":
                  return s("1876454");
                case "dark":
                  return s("1876438");
                case "light":
                  return s("1876430");
                default:
                  return s("1876438");
              }
            default:
              return s("1876438");
          }
        case 32:
          switch (n) {
            case "dark":
              switch (e) {
                case "blue":
                  return s("1876415");
                case "disabled_DEPRECATED":
                  return s("1876447");
                case "dark":
                  return s("1876431");
                case "light":
                  return s("1876431");
                default:
                  return s("1876431");
              }
            case "light":
              switch (e) {
                case "blue":
                  return s("1876423");
                case "disabled_DEPRECATED":
                  return s("1876455");
                case "dark":
                  return s("1876439");
                case "light":
                  return s("1876431");
                default:
                  return s("1876439");
              }
            default:
              return s("1876439");
          }
        case 48:
          switch (n) {
            case "dark":
              switch (e) {
                case "blue":
                  return s("1876416");
                case "disabled_DEPRECATED":
                  return s("1876448");
                case "dark":
                  return s("1876432");
                case "light":
                  return s("1876432");
                default:
                  return s("1876432");
              }
            case "light":
              switch (e) {
                case "blue":
                  return s("1876424");
                case "disabled_DEPRECATED":
                  return s("1876456");
                case "dark":
                  return s("1876440");
                case "light":
                  return s("1876432");
                default:
                  return s("1876440");
              }
            default:
              return s("1876440");
          }
        case 60:
          switch (n) {
            case "dark":
              switch (e) {
                case "blue":
                  return s("1940508");
                case "disabled_DEPRECATED":
                  return s("1940512");
                case "dark":
                  return s("1940510");
                case "light":
                  return s("1940510");
                default:
                  return s("1940510");
              }
            case "light":
              switch (e) {
                case "blue":
                  return s("1940509");
                case "disabled_DEPRECATED":
                  return s("1940513");
                case "dark":
                  return s("1940511");
                case "light":
                  return s("1940510");
                default:
                  return s("1940511");
              }
            default:
              return s("1940511");
          }
        case 72:
          switch (n) {
            case "dark":
              switch (e) {
                case "blue":
                  return s("1876418");
                case "disabled_DEPRECATED":
                  return s("1876450");
                case "dark":
                  return s("1876434");
                case "light":
                  return s("1876434");
                default:
                  return s("1876434");
              }
            case "light":
              switch (e) {
                case "blue":
                  return s("1876426");
                case "disabled_DEPRECATED":
                  return s("1876458");
                case "dark":
                  return s("1876442");
                case "light":
                  return s("1876434");
                default:
                  return s("1876442");
              }
            default:
              return s("1876442");
          }
        default:
          return s("1876439");
      }
    }
    l.default = R;
  },
  98,
);
