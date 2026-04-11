__d(
  "WAWebRollerCounter.react",
  [
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebL10N",
    "WAWebUseRollerCounter",
    "lodash",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebPrevious",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.memo,
      m = c.useEffect,
      p = c.useRef,
      _ = "xwqjvqw-B",
      f = "xtjl24w-B",
      g = "xuttrn-B",
      h = "x8xa006-B",
      y = {
        rollerContainer: {
          height: "xlup9mm",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          marginInlineStart: "x1wbi8v6",
          marginInlineEnd: "x1p8j9ns",
          $$css: !0,
        },
        counterContainer: {
          minHeight: "x1hshjfz",
          height: "xlup9mm",
          alignItems: "x6s0dn4",
          display: "x78zum5",
          $$css: !0,
        },
        rollerAnimation: {
          animationDuration: "x4afe7t",
          animationTimingFunction: "x933yfc",
          animationFillMode: "x10e4vud",
          backfaceVisibility: "xlp1x4z",
          $$css: !0,
        },
        animateFirstUp: { animationName: "x1ra8wus", $$css: !0 },
        animateSecondUp: { animationName: "x1wkmh82", $$css: !0 },
        animateFirstDown: {
          animationName: "x8so7cb",
          position: "x1n2onr6",
          top: "x9gwk0z",
          $$css: !0,
        },
        animateSecondDown: {
          position: "x1n2onr6",
          animationName: "x1849bfk",
          top: "x13vifvy",
          $$css: !0,
        },
      };
    function C(t) {
      var n = o("react-compiler-runtime").c(25),
        a = t.counter,
        i = t.rollerCounterOptions,
        l = t.shouldAnimate,
        s = r("useWAWebPrevious")(a),
        c = o("WAWebUseRollerCounter").useRollerCounter(s, a),
        d = c.currentValueProp != null ? c.currentValueProp : 0,
        m,
        p;
      if (
        n[0] !== a ||
        n[1] !== d ||
        n[2] !== (i == null ? void 0 : i.showOneToTwoAnimation) ||
        n[3] !== c.previousValueProp ||
        n[4] !== l
      ) {
        p = Symbol.for("react.early_return_sentinel");
        e: {
          var _ = r("WAWebL10N").d(d);
          if (((m = []), d === 1 && i != null && i.showOneToTwoAnimation)) {
            p = null;
            break e;
          }
          var f = 0;
          if (
            (c.previousValueProp != null && (f = a - c.previousValueProp),
            c.previousValueProp != null &&
              c.previousValueProp !== d &&
              l &&
              f !== 0)
          ) {
            var g = c.previousValueProp > 999 ? "999+" : c.previousValueProp,
              h;
            (n[7] !== g || n[8] !== c.previousValueProp
              ? ((h =
                  c.previousValueProp != null
                    ? r("WAWebL10N").d(c.previousValueProp)
                    : g),
                (n[7] = g),
                (n[8] = c.previousValueProp),
                (n[9] = h))
              : (h = n[9]),
              (g = h));
            var C = g,
              v = _,
              S = y.animateFirstUp,
              R = y.animateSecondUp;
            (f < 0 &&
              ((C = _),
              (v = g),
              (S = y.animateFirstDown),
              (R = y.animateSecondDown)),
              c.previousValueProp === 1 &&
                d === 2 &&
                i != null &&
                i.showOneToTwoAnimation &&
                (C = " "));
            var L = String(C),
              E;
            n[10] !== S
              ? ((E = (e || (e = r("stylex"))).props([
                  y.counterContainer,
                  y.rollerAnimation,
                  S,
                ])),
                (n[10] = S),
                (n[11] = E))
              : (E = n[11]);
            var k;
            n[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((k = { className: "x1f6kntn x2b8uid xhslqc4" }), (n[12] = k))
              : (k = n[12]);
            var I = u.jsx(
                "span",
                babelHelpers.extends({}, k, { children: r("WAWebL10N").n(C) }),
              ),
              T;
            n[13] !== L || n[14] !== E || n[15] !== I
              ? ((T = u.jsx(
                  "div",
                  babelHelpers.extends({}, E, { children: I }),
                  L,
                )),
                (n[13] = L),
                (n[14] = E),
                (n[15] = I),
                (n[16] = T))
              : (T = n[16]);
            var D = T,
              x = u.jsx(
                b,
                { animationStyle: R, direction: f, value: v },
                String(v),
              );
            m.push(D, x);
          } else {
            var $ = String(_),
              P,
              N;
            n[17] === Symbol.for("react.memo_cache_sentinel")
              ? ((P = { className: "x1hshjfz xlup9mm x6s0dn4 x78zum5" }),
                (N = { className: "x1f6kntn x2b8uid xhslqc4" }),
                (n[17] = P),
                (n[18] = N))
              : ((P = n[17]), (N = n[18]));
            var M = u.jsx(
                "span",
                babelHelpers.extends({}, N, { children: r("WAWebL10N").n(_) }),
              ),
              w;
            n[19] !== $ || n[20] !== P || n[21] !== M
              ? ((w = u.jsx(
                  "div",
                  babelHelpers.extends({}, P, { children: M }),
                  $,
                )),
                (n[19] = $),
                (n[20] = P),
                (n[21] = M),
                (n[22] = w))
              : (w = n[22]);
            var A = w;
            m.push(A);
          }
        }
        ((n[0] = a),
          (n[1] = d),
          (n[2] = i == null ? void 0 : i.showOneToTwoAnimation),
          (n[3] = c.previousValueProp),
          (n[4] = l),
          (n[5] = m),
          (n[6] = p));
      } else ((m = n[5]), (p = n[6]));
      if (p !== Symbol.for("react.early_return_sentinel")) return p;
      var F;
      return (
        n[23] !== m
          ? ((F = u.jsx(r("WAWebFlexItem.react"), {
              align: "center",
              shrink: 0,
              children: u.jsx(o("WAWebFlex.react").FlexColumn, {
                xstyle: y.rollerContainer,
                children: m,
              }),
            })),
            (n[23] = m),
            (n[24] = F))
          : (F = n[24]),
        F
      );
    }
    function b(t) {
      var n = o("react-compiler-runtime").c(13),
        a = t.animationStyle,
        i = t.direction,
        l = t.value,
        s = p(null),
        c,
        d;
      (n[0] !== i
        ? ((c = function () {
            var e = s.current;
            if (e != null) {
              var t = function () {
                e.style.display = i < 0 ? "none" : "flex";
              };
              return (
                e.addEventListener("animationend", t),
                function () {
                  e.removeEventListener("animationend", t);
                }
              );
            }
          }),
          (d = [i]),
          (n[0] = i),
          (n[1] = c),
          (n[2] = d))
        : ((c = n[1]), (d = n[2])),
        m(c, d));
      var _;
      n[3] !== a
        ? ((_ = (e || (e = r("stylex"))).props([
            y.counterContainer,
            y.rollerAnimation,
            a,
          ])),
          (n[3] = a),
          (n[4] = _))
        : (_ = n[4]);
      var f;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { className: "x1f6kntn x2b8uid xhslqc4" }), (n[5] = f))
        : (f = n[5]);
      var g;
      n[6] !== l
        ? ((g = r("WAWebL10N").n(l)), (n[6] = l), (n[7] = g))
        : (g = n[7]);
      var h;
      n[8] !== g
        ? ((h = u.jsx("span", babelHelpers.extends({}, f, { children: g }))),
          (n[8] = g),
          (n[9] = h))
        : (h = n[9]);
      var C;
      return (
        n[10] !== _ || n[11] !== h
          ? ((C = u.jsx(
              "div",
              babelHelpers.extends({ ref: s }, _, { children: h }),
            )),
            (n[10] = _),
            (n[11] = h),
            (n[12] = C))
          : (C = n[12]),
        C
      );
    }
    function v(e, t) {
      return r("lodash").isEqual(e, t);
    }
    var S = d(C, v);
    l.default = S;
  },
  98,
);
