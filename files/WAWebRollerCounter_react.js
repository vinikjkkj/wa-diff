__d(
  "WAWebRollerCounter.react",
  [
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebL10N",
    "WAWebUseRollerCounter",
    "lodash",
    "react",
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
      var n = t.counter,
        a = t.rollerCounterOptions,
        i = t.shouldAnimate,
        l = "999+",
        s = r("useWAWebPrevious")(n),
        c = o("WAWebUseRollerCounter").useRollerCounter(s, n),
        d = c.currentValueProp != null ? c.currentValueProp : 0,
        m = r("WAWebL10N").d(d),
        p = [];
      if (d === 1 && a != null && a.showOneToTwoAnimation) return null;
      var _ = 0;
      if (
        (c.previousValueProp != null && (_ = n - c.previousValueProp),
        c.previousValueProp != null &&
          c.previousValueProp !== d &&
          i &&
          _ !== 0)
      ) {
        var f = c.previousValueProp > 999 ? l : c.previousValueProp;
        f =
          c.previousValueProp != null
            ? r("WAWebL10N").d(c.previousValueProp)
            : f;
        var g = f,
          h = m,
          C = y.animateFirstUp,
          v = y.animateSecondUp;
        (_ < 0 &&
          ((g = m),
          (h = f),
          (C = y.animateFirstDown),
          (v = y.animateSecondDown)),
          c.previousValueProp === 1 &&
            d === 2 &&
            a != null &&
            a.showOneToTwoAnimation &&
            (g = " "));
        var S = u.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props([
                y.counterContainer,
                y.rollerAnimation,
                C,
              ]),
              {
                children: u.jsx("span", {
                  className: "x1f6kntn x2b8uid xhslqc4",
                  children: r("WAWebL10N").n(g),
                }),
              },
            ),
            String(g),
          ),
          R = u.jsx(
            b,
            { animationStyle: v, direction: _, value: h },
            String(h),
          );
        p.push(S, R);
      } else {
        var L = u.jsx(
          "div",
          {
            className: "x1hshjfz xlup9mm x6s0dn4 x78zum5",
            children: u.jsx("span", {
              className: "x1f6kntn x2b8uid xhslqc4",
              children: r("WAWebL10N").n(m),
            }),
          },
          String(m),
        );
        p.push(L);
      }
      return u.jsx(r("WAWebFlexItem.react"), {
        align: "center",
        shrink: 0,
        children: u.jsx(o("WAWebFlex.react").FlexColumn, {
          xstyle: y.rollerContainer,
          children: p,
        }),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(t) {
      var n = t.animationStyle,
        o = t.direction,
        a = t.value,
        i = p(null);
      return (
        m(
          function () {
            var e = i.current;
            if (e != null) {
              var t = function () {
                e.style.display = o < 0 ? "none" : "flex";
              };
              return (
                e.addEventListener("animationend", t),
                function () {
                  e.removeEventListener("animationend", t);
                }
              );
            }
          },
          [o],
        ),
        u.jsx(
          "div",
          babelHelpers.extends(
            { ref: i },
            (e || (e = r("stylex"))).props([
              y.counterContainer,
              y.rollerAnimation,
              n,
            ]),
            {
              children: u.jsx("span", {
                className: "x1f6kntn x2b8uid xhslqc4",
                children: r("WAWebL10N").n(a),
              }),
            },
          ),
        )
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e, t) {
      return r("lodash").isEqual(e, t);
    }
    var S = d(C, v);
    l.default = S;
  },
  98,
);
