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
    "react-compiler-runtime",
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
        r = o("react-compiler-runtime").c(75),
        a = e.allowPartialCards,
        i = e.cardWidth,
        l = e.carouselMargins,
        u = e.children,
        c = e.enableWheelScroll,
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
        $ = x[1],
        P = f(!1),
        N = P[0],
        M = P[1],
        w = f(!0),
        A = w[0],
        F = w[1],
        O = i + C,
        B;
      r[0] !== l
        ? ((B = function () {
            var e = k.current;
            return e == null
              ? null
              : l != null
                ? e.clientWidth - l.left - l.right
                : e.clientWidth;
          }),
          (r[0] = l),
          (r[1] = B))
        : (B = r[1]);
      var W = B,
        q;
      r[2] !== O || r[3] !== $
        ? ((q = function (t) {
            $(t * O, !0);
          }),
          (r[2] = O),
          (r[3] = $),
          (r[4] = q))
        : (q = r[4]);
      var U = q,
        V;
      (r[5] !== U
        ? ((V = function () {
            return { outerDivRef: E, scrollToCard: U };
          }),
          (r[5] = U),
          (r[6] = V))
        : (V = r[6]),
        d(h, V));
      var H;
      r[7] !== W || r[8] !== I || r[9] !== O || r[10] !== $
        ? ((H = function (t) {
            var e = I.getScrollLeft(),
              n = W();
            if (!(e == null || n == null)) {
              var r = Math.ceil((e - g) / O),
                a = Math.floor((n + g) / O);
              ($((r - a) * O), o("WAWebStopEvent").stopPropagation(t));
            }
          }),
          (r[7] = W),
          (r[8] = I),
          (r[9] = O),
          (r[10] = $),
          (r[11] = H))
        : (H = r[11]);
      var G = H,
        z;
      r[12] !== W || r[13] !== I || r[14] !== O || r[15] !== $
        ? ((z = function (t) {
            var e = I.getScrollLeft(),
              n = W();
            if (!(e == null || n == null)) {
              var r = Math.floor((e + n + g) / O);
              ($(r * O), o("WAWebStopEvent").stopPropagation(t));
            }
          }),
          (r[12] = W),
          (r[13] = I),
          (r[14] = O),
          (r[15] = $),
          (r[16] = z))
        : (z = r[16]);
      var j = z,
        K;
      if (r[17] !== i || r[18] !== u) {
        var Q;
        (r[20] !== i
          ? ((Q = function (t, n) {
              return s.jsx(b, { width: i, children: t }, n);
            }),
            (r[20] = i),
            (r[21] = Q))
          : (Q = r[21]),
          (K = u.map(Q)),
          (r[17] = i),
          (r[18] = u),
          (r[19] = K));
      } else K = r[19];
      var X = K,
        Y;
      if (r[22] !== X || r[23] !== C) {
        Y = [];
        for (var J = 0; J < X.length; J++)
          (Y.push(X[J]),
            J < X.length - 1 &&
              Y.push(
                s.jsx(
                  "div",
                  { className: "x1rg5ohu", style: { width: C + "px" } },
                  "spacer-post-" + J,
                ),
              ));
        ((r[22] = X), (r[23] = C), (r[24] = Y));
      } else Y = r[24];
      var Z;
      r[25] !== p || r[26] !== I
        ? ((Z = function () {
            var e = I.getScrollLeft(),
              t = k.current;
            if (!(e == null || t == null)) {
              var n = t.scrollWidth - t.clientWidth - e > g,
                r = e > g;
              (M(p ? n : r), F(p ? r : n));
            }
          }),
          (r[25] = p),
          (r[26] = I),
          (r[27] = Z))
        : (Z = r[27]);
      var ee = Z,
        te = _(u.length),
        ne,
        re;
      (r[28] !== u.length || r[29] !== ee
        ? ((ne = function () {
            if (E.current != null) {
              var e = E.current,
                t = te.current;
              return (
                (te.current = u.length),
                t !== u.length && ee(),
                o("WAWebResizeObserver").observe(e, ee)
              );
            }
          }),
          (re = [u.length, ee]),
          (r[28] = u.length),
          (r[29] = ee),
          (r[30] = ne),
          (r[31] = re))
        : ((ne = r[30]), (re = r[31])),
        m(ne, re));
      var oe, ae;
      (r[32] !== c || r[33] !== $
        ? ((oe = function () {
            if (c === !0) {
              var e = E.current;
              if (e != null) {
                var t = function (t) {
                  var e = k.current;
                  e != null &&
                    t.deltaX !== 0 &&
                    ($(null),
                    t.preventDefault(),
                    t.stopPropagation(),
                    (e.scrollLeft = e.scrollLeft + t.deltaX));
                };
                return (
                  e.addEventListener("wheel", t, { passive: !1 }),
                  function () {
                    e.removeEventListener("wheel", t);
                  }
                );
              }
            }
          }),
          (ae = [c, $]),
          (r[32] = c),
          (r[33] = $),
          (r[34] = oe),
          (r[35] = ae))
        : ((oe = r[34]), (ae = r[35])),
        m(oe, ae));
      var ie;
      r[36] !== l
        ? ((ie = l
            ? { paddingInlineStart: l.left, paddingInlineEnd: l.right }
            : null),
          (r[36] = l),
          (r[37] = ie))
        : (ie = r[37]);
      var le = ie,
        se = (t = l == null ? void 0 : l.left) != null ? t : C / 2,
        ue = (n = l == null ? void 0 : l.right) != null ? n : C / 2,
        ce;
      r[38] !== a || r[39] !== i || r[40] !== ue || r[41] !== se || r[42] !== C
        ? ((ce =
            a === !0
              ? { width: "100%" }
              : {
                  marginInlineStart: se,
                  marginInlineEnd: ue,
                  width: y({
                    cardWidth: i,
                    marginEnd: ue,
                    marginInlineStart: se,
                    spacing: C,
                  }),
                }),
          (r[38] = a),
          (r[39] = i),
          (r[40] = ue),
          (r[41] = se),
          (r[42] = C),
          (r[43] = ce))
        : (ce = r[43]);
      var de = ce,
        me;
      r[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((me = "x1n2onr6"), (r[44] = me))
        : (me = r[44]);
      var pe;
      r[45] !== p || r[46] !== N || r[47] !== G || r[48] !== v || r[49] !== j
        ? ((pe =
            N &&
            (v == null ? void 0 : v.hideButtons) !== !0 &&
            s.jsx(L, {
              direction: "left",
              onClick: p ? j : G,
              stepButtonProps: v,
            })),
          (r[45] = p),
          (r[46] = N),
          (r[47] = G),
          (r[48] = v),
          (r[49] = j),
          (r[50] = pe))
        : (pe = r[50]);
      var _e;
      r[51] !== p || r[52] !== A || r[53] !== G || r[54] !== v || r[55] !== j
        ? ((_e =
            A &&
            (v == null ? void 0 : v.hideButtons) !== !0 &&
            s.jsx(L, {
              direction: "right",
              onClick: p ? G : j,
              stepButtonProps: v,
            })),
          (r[51] = p),
          (r[52] = A),
          (r[53] = G),
          (r[54] = v),
          (r[55] = j),
          (r[56] = _e))
        : (_e = r[56]);
      var fe;
      r[57] === Symbol.for("react.memo_cache_sentinel")
        ? ((fe = {
            className: "x1n2onr6 xh8yej3 x14aock7 x1rife3k x1rohswg xfk6m8",
          }),
          (r[57] = fe))
        : (fe = r[57]);
      var ge;
      r[58] !== $
        ? ((ge = function () {
            return $(null);
          }),
          (r[58] = $),
          (r[59] = ge))
        : (ge = r[59]);
      var he;
      r[60] !== l
        ? ((he = {
            0: { className: "x1n2onr6 x3nfvp2 x1q0g3np x1iyjqo2" },
            1: { className: "x1n2onr6 x3nfvp2 x1q0g3np x1iyjqo2 x9f619" },
          }[!!l << 0]),
          (r[60] = l),
          (r[61] = he))
        : (he = r[61]);
      var ye;
      r[62] !== Y || r[63] !== le || r[64] !== he
        ? ((ye = s.jsx(
            "div",
            babelHelpers.extends({}, he, { style: le, children: Y }),
          )),
          (r[62] = Y),
          (r[63] = le),
          (r[64] = he),
          (r[65] = ye))
        : (ye = r[65]);
      var Ce;
      r[66] !== ee || r[67] !== ge || r[68] !== ye
        ? ((Ce = s.jsx(
            "div",
            babelHelpers.extends({ ref: k }, fe, {
              onWheel: ge,
              onScroll: ee,
              children: ye,
            }),
          )),
          (r[66] = ee),
          (r[67] = ge),
          (r[68] = ye),
          (r[69] = Ce))
        : (Ce = r[69]);
      var be;
      return (
        r[70] !== de || r[71] !== pe || r[72] !== _e || r[73] !== Ce
          ? ((be = s.jsxs("div", {
              className: me,
              ref: E,
              style: de,
              children: [pe, _e, Ce],
            })),
            (r[70] = de),
            (r[71] = pe),
            (r[72] = _e),
            (r[73] = Ce),
            (r[74] = be))
          : (be = r[74]),
        be
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        r = e.width,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = "x1rg5ohu x6ikm8r x10wlt62"), (t[0] = a))
        : (a = t[0]);
      var i = r + "px",
        l;
      t[1] !== i ? ((l = { width: i }), (t[1] = i), (t[2] = l)) : (l = t[2]);
      var u;
      return (
        t[3] !== n || t[4] !== l
          ? ((u = s.jsx("div", { className: a, style: l, children: n })),
            (t[3] = n),
            (t[4] = l),
            (t[5] = u))
          : (u = t[5]),
        u
      );
    }
    var v = 45,
      S = -40,
      R = 30;
    function L(e) {
      var t,
        n,
        a,
        i,
        l = o("react-compiler-runtime").c(14),
        u = e.direction,
        c = e.onClick,
        d = e.stepButtonProps,
        m = (t = d == null ? void 0 : d.size) != null ? t : v,
        p = (n = d == null ? void 0 : d.offset) != null ? n : S,
        _ = (a = d == null ? void 0 : d.iconSize) != null ? a : R,
        f = d == null ? void 0 : d.verticalOffset,
        g = d == null ? void 0 : d.tabIndex,
        y = (i = d == null ? void 0 : d.useWdsIcons) != null ? i : !1,
        C = d != null,
        b;
      l[0] !== p || l[1] !== m || l[2] !== u || l[3] !== C || l[4] !== f
        ? ((b = C
            ? babelHelpers.extends(
                {
                  width: m,
                  height: m,
                  top:
                    "calc(50% - " +
                    m / 2 +
                    "px" +
                    (f != null ? " + " + f + "px" : "") +
                    ")",
                },
                u === "left" ? { left: p } : { right: p },
              )
            : void 0),
          (l[0] = p),
          (l[1] = m),
          (l[2] = u),
          (l[3] = C),
          (l[4] = f),
          (l[5] = b))
        : (b = l[5]);
      var L = b,
        E;
      return (
        l[6] !== _ ||
        l[7] !== u ||
        l[8] !== C ||
        l[9] !== c ||
        l[10] !== L ||
        l[11] !== g ||
        l[12] !== y
          ? ((E =
              u === "left"
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
                      }[!!C << 0],
                      {
                        style: L,
                        onClick: c,
                        tabIndex: g,
                        children: y
                          ? s.jsx(r("WDSIconIcChevronLeft.react"), {
                              width: _,
                              height: _,
                              iconXstyle: h.chevronCentered,
                            })
                          : s.jsx(
                              o("WAWebChevronCustomIcons")
                                .ChevronLeftCustomIcon,
                              {
                                width: _,
                                height: _,
                                xstyle: [
                                  C ? h.chevronCentered : h.leftChevron,
                                  o("WAWebUISpacing").uiPadding.allAuto,
                                ],
                              },
                            ),
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
                      }[!!C << 0],
                      {
                        style: L,
                        onClick: c,
                        tabIndex: g,
                        children: y
                          ? s.jsx(r("WDSIconIcChevronRight.react"), {
                              width: _,
                              height: _,
                              iconXstyle: h.chevronCentered,
                            })
                          : s.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                              width: _,
                              height: _,
                              xstyle: C ? h.chevronCentered : h.rightChevron,
                            }),
                      },
                    ),
                  )),
            (l[6] = _),
            (l[7] = u),
            (l[8] = C),
            (l[9] = c),
            (l[10] = L),
            (l[11] = g),
            (l[12] = y),
            (l[13] = E))
          : (E = l[13]),
        E
      );
    }
    var E = 50,
      k = 0.08,
      I = 1;
    function T(e, t, n) {
      var a = o("react-compiler-runtime").c(14),
        i = f(null),
        l = i[0],
        s = i[1],
        u = f(!1),
        c = u[0],
        d = u[1],
        m = _(null),
        p;
      a[0] !== e || a[1] !== l || a[2] !== n || a[3] !== t
        ? ((p = function () {
            var r = e.getScrollLeft();
            if (r == null || l == null) {
              d(!1);
              return;
            }
            var o = l,
              a = r;
            if (a === o) {
              d(!1);
              return;
            }
            var i = t != null ? t : E,
              s = Math.abs(o - a),
              u;
            n === !0 ? (u = Math.max(Math.min(s * k, i), I)) : (u = i);
            var c = s < u ? o : a + Math.sign(o - a) * u;
            e.scrollTo({ left: c, behavior: "instant" });
            var p = m.current == null || e.getScrollLeft() !== m.current;
            ((m.current = e.getScrollLeft()), p || d(!1));
          }),
          (a[0] = e),
          (a[1] = l),
          (a[2] = n),
          (a[3] = t),
          (a[4] = p))
        : (p = a[4]);
      var g = p,
        h;
      (a[5] !== c ? ((h = { active: c }), (a[5] = c), (a[6] = h)) : (h = a[6]),
        r("useWAWebAnimationFrames")(g, h));
      var y;
      a[7] !== e
        ? ((y = function (n, r) {
            if (r === !0 && n != null) {
              e.scrollTo({ left: n, behavior: "instant" });
              return;
            }
            (s(n), d(!0));
          }),
          (a[7] = e),
          (a[8] = y))
        : (y = a[8]);
      var C = y,
        b;
      a[9] !== C
        ? ((b = function (t, n) {
            return C(t, n);
          }),
          (a[9] = C),
          (a[10] = b))
        : (b = a[10]);
      var v;
      return (
        a[11] !== l || a[12] !== b
          ? ((v = [l, b]), (a[11] = l), (a[12] = b), (a[13] = v))
          : (v = a[13]),
        v
      );
    }
    function D(e, t) {
      var n = o("react-compiler-runtime").c(3),
        r;
      return (
        n[0] !== t || n[1] !== e
          ? ((r = {
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
            }),
            (n[0] = t),
            (n[1] = e),
            (n[2] = r))
          : (r = n[2]),
        r
      );
    }
    l.default = C;
  },
  98,
);
