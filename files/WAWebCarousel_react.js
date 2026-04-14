__d(
  "WAWebCarousel.react",
  [
    "WAWebChevronCustomIcons",
    "WAWebChevronIcon.react",
    "WAWebResizeObserver",
    "WAWebStopEvent",
    "WAWebUISpacing",
    "WDSIconIcChevronLeft.react",
    "WDSIconIcChevronRight.react",
    "react",
    "useWAWebAnimationFrames",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useImperativeHandle,
      m = u.useLayoutEffect,
      p = u.useMemo,
      _ = u.useRef,
      f = u.useState,
      g = 25,
      h = {
        leftChevron: {
          position: "x1n2onr6",
          top: "xnfr1j",
          color: "x14ug900",
          $$css: !0,
        },
        rightChevron: {
          position: "x1n2onr6",
          insetInlineStart: "xjwk6fx",
          left: null,
          right: null,
          top: "xnfr1j",
          color: "x14ug900",
          $$css: !0,
        },
        chevronCentered: { color: "x14ug900", $$css: !0 },
      },
      y = function (t) {
        var e = t.cardWidth,
          n = t.marginEnd,
          r = t.marginInlineStart,
          o = t.spacing,
          a = e + o + "px",
          i = "calc(100% - " + r + "px - " + n + "px + " + o + "px)",
          l = "calc(round(down, " + i + ", " + a + ") - " + o + "px)";
        return "max(" + l + ", " + e + "px)";
      };
    function C(e) {
      var t,
        n,
        r = e.allowPartialCards,
        a = e.cardWidth,
        i = e.carouselMargins,
        l = e.children,
        u = e.enableWheelScroll,
        p = e.isRTL,
        h = e.ref,
        C = e.spacing,
        v = e.stepButtonProps,
        S = e.stepButtonScrollEasing,
        R = e.stepButtonScrollSpeed,
        E = _(),
        k = _(),
        I = D(k, p),
        x = T(I, R, S),
        $ = x[0],
        P = x[1],
        N = f(!1),
        M = N[0],
        w = N[1],
        A = f(!0),
        F = A[0],
        O = A[1],
        B = a + C,
        W = c(
          function () {
            var e = k.current;
            return e == null
              ? null
              : i != null
                ? e.clientWidth - i.left - i.right
                : e.clientWidth;
          },
          [i],
        ),
        q = c(
          function (e) {
            P(e * B, !0);
          },
          [P, B],
        );
      d(h, function () {
        return { outerDivRef: E, scrollToCard: q };
      });
      for (
        var U = c(
            function (e) {
              var t = I.getScrollLeft(),
                n = W();
              if (!(t == null || n == null)) {
                var r = Math.ceil((t - g) / B),
                  a = Math.floor((n + g) / B);
                (P((r - a) * B), o("WAWebStopEvent").stopPropagation(e));
              }
            },
            [W, I, B, P],
          ),
          V = c(
            function (e) {
              var t = I.getScrollLeft(),
                n = W();
              if (!(t == null || n == null)) {
                var r = Math.floor((t + n + g) / B);
                (P(r * B), o("WAWebStopEvent").stopPropagation(e));
              }
            },
            [W, I, B, P],
          ),
          H = l.map(function (e, t) {
            return s.jsx(b, { width: a, children: e }, t);
          }),
          G = [],
          z = 0;
        z < H.length;
        z++
      )
        (G.push(H[z]),
          z < H.length - 1 &&
            G.push(
              s.jsx(
                "div",
                { className: "x1rg5ohu", style: { width: C + "px" } },
                "spacer-post-" + z,
              ),
            ));
      var j = c(
          function () {
            var e = I.getScrollLeft(),
              t = k.current;
            if (!(e == null || t == null)) {
              var n = t.scrollWidth - t.clientWidth - e > g,
                r = e > g;
              (w(p ? n : r), O(p ? r : n));
            }
          },
          [p, I],
        ),
        K = _(l.length);
      (m(
        function () {
          if (E.current != null) {
            var e = E.current,
              t = K.current;
            return (
              (K.current = l.length),
              t !== l.length && j(),
              o("WAWebResizeObserver").observe(e, j)
            );
          }
        },
        [l.length, j],
      ),
        m(
          function () {
            if (u === !0) {
              var e = E.current;
              if (e != null) {
                var t = function (t) {
                  var e = k.current;
                  e != null &&
                    t.deltaX !== 0 &&
                    (P(null),
                    t.preventDefault(),
                    t.stopPropagation(),
                    (e.scrollLeft += t.deltaX));
                };
                return (
                  e.addEventListener("wheel", t, { passive: !1 }),
                  function () {
                    e.removeEventListener("wheel", t);
                  }
                );
              }
            }
          },
          [u, P],
        ));
      var Q = i
          ? { paddingInlineStart: i.left, paddingInlineEnd: i.right }
          : null,
        X = (t = i == null ? void 0 : i.left) != null ? t : C / 2,
        Y = (n = i == null ? void 0 : i.right) != null ? n : C / 2,
        J =
          r === !0
            ? { width: "100%" }
            : {
                marginInlineStart: X,
                marginInlineEnd: Y,
                width: y({
                  cardWidth: a,
                  marginEnd: Y,
                  marginInlineStart: X,
                  spacing: C,
                }),
              };
      return s.jsxs("div", {
        className: "x1n2onr6",
        ref: E,
        style: J,
        children: [
          M &&
            (v == null ? void 0 : v.hideButtons) !== !0 &&
            s.jsx(L, {
              direction: "left",
              onClick: p ? V : U,
              stepButtonProps: v,
            }),
          F &&
            (v == null ? void 0 : v.hideButtons) !== !0 &&
            s.jsx(L, {
              direction: "right",
              onClick: p ? U : V,
              stepButtonProps: v,
            }),
          s.jsx("div", {
            ref: k,
            className: "x1n2onr6 xh8yej3 x14aock7 x1rife3k x1rohswg xfk6m8",
            onWheel: function () {
              return P(null);
            },
            onScroll: j,
            children: s.jsx(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: { className: "x1n2onr6 x3nfvp2 x1q0g3np x1iyjqo2" },
                  1: { className: "x1n2onr6 x3nfvp2 x1q0g3np x1iyjqo2 x9f619" },
                }[!!i << 0],
                { style: Q, children: G },
              ),
            ),
          }),
        ],
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.children,
        n = e.width;
      return s.jsx("div", {
        className: "x1rg5ohu x6ikm8r x10wlt62",
        style: { width: n + "px" },
        children: t,
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    var v = 45,
      S = -40,
      R = 30;
    function L(e) {
      var t,
        n,
        a,
        i,
        l = e.direction,
        u = e.onClick,
        c = e.stepButtonProps,
        d = (t = c == null ? void 0 : c.size) != null ? t : v,
        m = (n = c == null ? void 0 : c.offset) != null ? n : S,
        p = (a = c == null ? void 0 : c.iconSize) != null ? a : R,
        _ = c == null ? void 0 : c.verticalOffset,
        f = c == null ? void 0 : c.tabIndex,
        g = (i = c == null ? void 0 : c.useWdsIcons) != null ? i : !1,
        y = c != null,
        C = y
          ? babelHelpers.extends(
              {
                width: d,
                height: d,
                top:
                  "calc(50% - " +
                  d / 2 +
                  "px" +
                  (_ != null ? " + " + _ + "px" : "") +
                  ")",
              },
              l === "left" ? { left: m } : { right: m },
            )
          : void 0;
      return l === "left"
        ? s.jsx(
            "button",
            babelHelpers.extends(
              {},
              {
                0: {
                  className:
                    "x10l6tqk xfo81ep x1tj73cw x1ekkm8c x1143rjc xum4auv xj21bgg xqvfhly xzuapc8 x1ypdohk x16w0wmm x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x11g758w x1q665ic xxm48n2 x17gydlx xphzr9 xar8odu",
                },
                1: {
                  className:
                    "x10l6tqk xfo81ep x1tj73cw x1ekkm8c x1143rjc xum4auv xj21bgg xqvfhly xzuapc8 x1ypdohk x16w0wmm x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x11g758w x1q665ic xxm48n2 x17gydlx xphzr9 xar8odu x78zum5 x6s0dn4 xl56j7k",
                },
              }[!!y << 0],
              {
                style: C,
                onClick: u,
                tabIndex: f,
                children: g
                  ? s.jsx(r("WDSIconIcChevronLeft.react"), {
                      width: p,
                      height: p,
                      iconXstyle: h.chevronCentered,
                    })
                  : s.jsx(o("WAWebChevronCustomIcons").ChevronLeftCustomIcon, {
                      width: p,
                      height: p,
                      xstyle: [
                        y ? h.chevronCentered : h.leftChevron,
                        o("WAWebUISpacing").uiPadding.allAuto,
                      ],
                    }),
              },
            ),
          )
        : s.jsx(
            "button",
            babelHelpers.extends(
              {},
              {
                0: {
                  className:
                    "x10l6tqk xfo81ep x1tj73cw x1ekkm8c x1143rjc xum4auv xj21bgg xqvfhly xzuapc8 x1ypdohk x16w0wmm x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x11g758w x1q665ic xxm48n2 x17gydlx xphzr9 x1mrsgf3",
                },
                1: {
                  className:
                    "x10l6tqk xfo81ep x1tj73cw x1ekkm8c x1143rjc xum4auv xj21bgg xqvfhly xzuapc8 x1ypdohk x16w0wmm x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x11g758w x1q665ic xxm48n2 x17gydlx xphzr9 x1mrsgf3 x78zum5 x6s0dn4 xl56j7k",
                },
              }[!!y << 0],
              {
                style: C,
                onClick: u,
                tabIndex: f,
                children: g
                  ? s.jsx(r("WDSIconIcChevronRight.react"), {
                      width: p,
                      height: p,
                      iconXstyle: h.chevronCentered,
                    })
                  : s.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                      width: p,
                      height: p,
                      xstyle: y ? h.chevronCentered : h.rightChevron,
                    }),
              },
            ),
          );
    }
    L.displayName = L.name + " [from " + i.id + "]";
    var E = 50,
      k = 0.08,
      I = 1;
    function T(e, t, n) {
      var o = f(null),
        a = o[0],
        i = o[1],
        l = f(!1),
        s = l[0],
        u = l[1],
        d = _(null),
        m = c(
          function () {
            var r = e.getScrollLeft();
            if (r == null || a == null) {
              u(!1);
              return;
            }
            var o = a,
              i = r;
            if (i === o) {
              u(!1);
              return;
            }
            var l = t != null ? t : E,
              s = Math.abs(o - i),
              c;
            n === !0 ? (c = Math.max(Math.min(s * k, l), I)) : (c = l);
            var m = s < c ? o : i + Math.sign(o - i) * c;
            e.scrollTo({ left: m, behavior: "instant" });
            var p = d.current == null || e.getScrollLeft() !== d.current;
            ((d.current = e.getScrollLeft()), p || u(!1));
          },
          [e, t, n, a],
        );
      r("useWAWebAnimationFrames")(m, { active: s });
      var p = c(
        function (t, n) {
          if (n === !0 && t != null) {
            e.scrollTo({ left: t, behavior: "instant" });
            return;
          }
          (i(t), u(!0));
        },
        [e],
      );
      return [
        a,
        function (e, t) {
          return p(e, t);
        },
      ];
    }
    function D(e, t) {
      return p(
        function () {
          return {
            getScrollLeft: function () {
              var n = e.current;
              return n == null ? null : t ? -n.scrollLeft : n.scrollLeft;
            },
            scrollTo: function (r) {
              var n = r.behavior,
                o = r.left,
                a = e.current;
              a != null && a.scrollTo({ left: t ? -o : o, behavior: n });
            },
          };
        },
        [t, e],
      );
    }
    l.default = C;
  },
  98,
);
