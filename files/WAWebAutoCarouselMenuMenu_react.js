__d(
  "WAWebAutoCarouselMenuMenu.react",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebAutoCarouselMenuTabMarker.react",
    "WAWebChevronCustomIcons",
    "WAWebChevronIcon.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebPanelsMenuContainer.react",
    "WAWebPanelsMenuTab.react",
    "WAWebResizeObserver.react",
    "WAWebUnstyledButton.react",
    "clamp",
    "react",
    "react-compiler-runtime",
    "useWAWebIsKeyboardUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useImperativeHandle,
      f = d.useLayoutEffect,
      g = d.useRef,
      h = d.useState,
      y = n("$InternalEnum").Mirrored(["Left", "Right"]),
      C = {
        button: {
          position: "x10l6tqk",
          zIndex: "x1vjfegm",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          height: "x5yr21d",
          backgroundColor: "xgcd1z6",
          $$css: !0,
        },
        buttonIcon: { color: "xhslqc4", $$css: !0 },
        floatRight: {
          top: "x13vifvy",
          right: "x3m8u43",
          insetInlineStart: null,
          insetInlineEnd: null,
          $$css: !0,
        },
        floatLeft: {
          top: "x13vifvy",
          left: "xu96u03",
          insetInlineStart: null,
          insetInlineEnd: null,
          $$css: !0,
        },
      },
      b = 3,
      v = function (t, n, o, a) {
        if (!t || !n) return !1;
        var e = t.getBoundingClientRect(),
          i = n.getBoundingClientRect(),
          l = (o == null ? void 0 : o.clientWidth) || 0,
          s = (a == null ? void 0 : a.clientWidth) || 0;
        return (
          i.right > e.right - (r("WAWebL10N").isRTL() ? s : l) ||
          i.left < e.left + (r("WAWebL10N").isRTL() ? l : s)
        );
      };
    function S(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.direction,
        a = e.onClick,
        i = e.onRef,
        l = e.xstyle,
        s;
      t[0] !== n
        ? ((s =
            n === y.Left
              ? c.jsx(o("WAWebChevronCustomIcons").ChevronLeftCustomIcon, {
                  xstyle: C.buttonIcon,
                })
              : c.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                  xstyle: C.buttonIcon,
                })),
          (t[0] = n),
          (t[1] = s))
        : (s = t[1]);
      var u = s,
        d;
      t[2] !== l ? ((d = [C.button, l]), (t[2] = l), (t[3] = d)) : (d = t[3]);
      var m;
      return (
        t[4] !== u || t[5] !== a || t[6] !== i || t[7] !== d
          ? ((m = c.jsx(r("WAWebUnstyledButton.react"), {
              ref: i,
              xstyle: d,
              onClick: a,
              children: u,
            })),
            (t[4] = u),
            (t[5] = a),
            (t[6] = i),
            (t[7] = d),
            (t[8] = m))
          : (m = t[8]),
        m
      );
    }
    function R(t) {
      var n = o("react-compiler-runtime").c(90),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, s)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = h(0),
        u = l[0],
        d = l[1],
        m = h(0),
        R = m[0],
        L = m[1],
        E = h(0),
        k = E[0],
        I = E[1],
        T = h(!1),
        D = T[0],
        x = T[1],
        $ = h(0),
        P = $[0],
        N = $[1],
        M = h(0),
        w = M[0],
        A = M[1],
        F = R <= 0,
        O = r("useWAWebIsKeyboardUser")(),
        B = O.isKeyboardUser,
        W = a,
        q = W.buttonStyle,
        U = W.numItems,
        V = W.onItemClick,
        H = W.renderItem,
        G = W.selectedIndex,
        z;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = []), (n[3] = z))
        : (z = n[3]);
      var j = g(z),
        K;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = []), (n[4] = K))
        : (K = n[4]);
      var Q = g(K),
        X = g(null),
        Y = g(null),
        J = g(null),
        Z,
        ee;
      (n[5] !== U || n[6] !== V || n[7] !== G
        ? ((Z = function () {
            if (V) {
              var t = r("clamp")(G, 0, U);
              (t !== G &&
                (V(t),
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Selection out of bounds",
                      ])),
                  )
                  .sendLogs(
                    "auto_carousel_menu: selectedIndex (" +
                      G +
                      ") is out of bounds (0-" +
                      U +
                      ")",
                  )),
                G > U ? V(U) : G < 0 && V(0));
            }
          }),
          (ee = [G, U, V]),
          (n[5] = U),
          (n[6] = V),
          (n[7] = G),
          (n[8] = Z),
          (n[9] = ee))
        : ((Z = n[8]), (ee = n[9])),
        p(Z, ee));
      var te;
      n[10] !== u || n[11] !== R || n[12] !== G
        ? ((te = function () {
            var e,
              t = function (t) {
                return t
                  ? r("WAWebL10N").isRTL()
                    ? u - t.offsetLeft - t.clientWidth
                    : t.offsetLeft
                  : 0;
              },
              n = function (n, r) {
                return n ? t(n) + n.clientWidth - r : 0;
              },
              o = j.current[G],
              a = j.current[R],
              i = j.current[j.current.length - 1],
              l = t(a),
              s = n(i, l);
            (N((o == null ? void 0 : o.clientWidth) || 0),
              A((o == null ? void 0 : o.offsetLeft) || 0),
              I(l),
              x(s <= u),
              (e = Q.current[G]) == null || e.focus());
          }),
          (n[10] = u),
          (n[11] = R),
          (n[12] = G),
          (n[13] = te))
        : (te = n[13]);
      var ne;
      (n[14] !== u || n[15] !== U || n[16] !== R || n[17] !== G
        ? ((ne = [G, R, u, U]),
          (n[14] = u),
          (n[15] = U),
          (n[16] = R),
          (n[17] = G),
          (n[18] = ne))
        : (ne = n[18]),
        f(te, ne));
      var re;
      n[19] !== V
        ? ((re = function (t, n) {
            V && V(t, n);
          }),
          (n[19] = V),
          (n[20] = re))
        : (re = n[20]);
      var oe = re,
        ae;
      n[21] !== D || n[22] !== U || n[23] !== R
        ? ((ae = function () {
            D || L(r("clamp")(R + b, 0, U));
          }),
          (n[21] = D),
          (n[22] = U),
          (n[23] = R),
          (n[24] = ae))
        : (ae = n[24]);
      var ie = ae,
        le;
      n[25] !== U || n[26] !== R
        ? ((le = function () {
            R !== 0 && L(r("clamp")(R - b, 0, U));
          }),
          (n[25] = U),
          (n[26] = R),
          (n[27] = le))
        : (le = n[27]);
      var se = le,
        ue;
      n[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((ue = function (t) {
            var e = t.width;
            d(e);
          }),
          (n[28] = ue))
        : (ue = n[28]);
      var ce = ue,
        de;
      n[29] !== G
        ? ((de = function () {
            var e;
            (e = Q.current[G]) == null || e.focus();
          }),
          (n[29] = G),
          (n[30] = de))
        : (de = n[30]);
      var me = de,
        pe;
      n[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((pe = r("WAWebL10N").isRTL()
            ? [C.floatRight, C.floatLeft]
            : [C.floatLeft, C.floatRight]),
          (n[31] = pe))
        : (pe = n[31]);
      var _e = pe,
        fe = _e[0],
        ge = _e[1],
        he;
      n[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((he = r("WAWebL10N").isRTL()
            ? [y.Right, y.Left]
            : [y.Left, y.Right]),
          (n[32] = he))
        : (he = n[32]);
      var ye = he,
        Ce = ye[0],
        be = ye[1],
        ve;
      n[33] !== q ? ((ve = [q, fe]), (n[33] = q), (n[34] = ve)) : (ve = n[34]);
      var Se;
      n[35] === Symbol.for("react.memo_cache_sentinel")
        ? ((Se = function (t) {
            J.current = t;
          }),
          (n[35] = Se))
        : (Se = n[35]);
      var Re;
      n[36] !== se || n[37] !== ve
        ? ((Re = c.jsx(S, {
            xstyle: ve,
            direction: Ce,
            onClick: se,
            onRef: Se,
          })),
          (n[36] = se),
          (n[37] = ve),
          (n[38] = Re))
        : (Re = n[38]);
      var Le = Re,
        Ee;
      n[39] !== q ? ((Ee = [q, ge]), (n[39] = q), (n[40] = Ee)) : (Ee = n[40]);
      var ke;
      n[41] === Symbol.for("react.memo_cache_sentinel")
        ? ((ke = function (t) {
            Y.current = t;
          }),
          (n[41] = ke))
        : (ke = n[41]);
      var Ie;
      n[42] !== ie || n[43] !== Ee
        ? ((Ie = c.jsx(S, {
            xstyle: Ee,
            direction: be,
            onClick: ie,
            onRef: ke,
          })),
          (n[42] = ie),
          (n[43] = Ee),
          (n[44] = Ie))
        : (Ie = n[44]);
      var Te = Ie,
        De = (r("WAWebL10N").isRTL() ? 1 : -1) * k,
        xe = "translateX(" + De + "px)",
        $e;
      n[45] !== oe || n[46] !== ie || n[47] !== se || n[48] !== U || n[49] !== G
        ? (($e = function (t) {
            var e = r("WAWebL10N").isRTL() ? -1 : 1,
              n = r("clamp")(G + e, 0, U - 1),
              o = Q.current[n];
            (v(X.current, o, Y.current, J.current) &&
              (r("WAWebL10N").isRTL() ? se() : ie()),
              oe(n, t),
              t.preventDefault());
          }),
          (n[45] = oe),
          (n[46] = ie),
          (n[47] = se),
          (n[48] = U),
          (n[49] = G),
          (n[50] = $e))
        : ($e = n[50]);
      var Pe = $e,
        Ne;
      n[51] !== oe || n[52] !== ie || n[53] !== se || n[54] !== U || n[55] !== G
        ? ((Ne = function (t) {
            var e = r("WAWebL10N").isRTL() ? 1 : -1,
              n = r("clamp")(G + e, 0, U - 1),
              o = Q.current[n];
            (v(X.current, o, Y.current, J.current) &&
              (r("WAWebL10N").isRTL() ? ie() : se()),
              oe(n, t),
              t.preventDefault());
          }),
          (n[51] = oe),
          (n[52] = ie),
          (n[53] = se),
          (n[54] = U),
          (n[55] = G),
          (n[56] = Ne))
        : (Ne = n[56]);
      var Me = Ne,
        we;
      n[57] === Symbol.for("react.memo_cache_sentinel")
        ? ((we = function () {
            var e;
            return (
              ((e = X.current) == null
                ? void 0
                : e.contains(document.activeElement)) || !1
            );
          }),
          (n[57] = we))
        : (we = n[57]);
      var Ae = we,
        Fe;
      (n[58] !== me
        ? ((Fe = function () {
            return { focus: me, hasFocus: Ae };
          }),
          (n[58] = me),
          (n[59] = Fe))
        : (Fe = n[59]),
        _(i, Fe));
      var Oe;
      n[60] !== Me || n[61] !== Pe
        ? ((Oe = { left: Me, right: Pe }),
          (n[60] = Me),
          (n[61] = Pe),
          (n[62] = Oe))
        : (Oe = n[62]);
      var Be = Oe,
        We = a.theme,
        qe;
      n[63] === Symbol.for("react.memo_cache_sentinel")
        ? ((qe = "x5yr21d xh8yej3 xgcd1z6"), (n[63] = qe))
        : (qe = n[63]);
      var Ue = !F && Le,
        Ve;
      n[64] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ve = { className: "x6ikm8r x10wlt62 xuxw1ft" }), (n[64] = Ve))
        : (Ve = n[64]);
      var He;
      n[65] === Symbol.for("react.memo_cache_sentinel")
        ? ((He = "x11xpdln x1d8287x xwji4o3"), (n[65] = He))
        : (He = n[65]);
      var Ge;
      n[66] !== xe
        ? ((Ge = { transform: xe }), (n[66] = xe), (n[67] = Ge))
        : (Ge = n[67]);
      var ze;
      n[68] !== oe || n[69] !== B || n[70] !== U || n[71] !== H || n[72] !== G
        ? ((ze = Array.from({ length: U }, function (e, t) {
            var n = G === t;
            return c.jsx(
              "div",
              {
                className: "x1rg5ohu x13fj5qh x1xegmmw",
                ref: function (n) {
                  j.current[t] = n;
                },
                children: c.jsx(
                  o("WAWebPanelsMenuTab.react").MenuTab,
                  {
                    role: "tab",
                    onRef: function (n) {
                      Q.current[t] = n;
                    },
                    onClick: oe,
                    sectionId: t,
                    selected: n,
                    showFocusIndicator: B,
                    theme: o("WAWebPanelsMenuTab.react").THEMES.NONE,
                    children: H(t),
                  },
                  t,
                ),
              },
              t,
            );
          })),
          (n[68] = oe),
          (n[69] = B),
          (n[70] = U),
          (n[71] = H),
          (n[72] = G),
          (n[73] = ze))
        : (ze = n[73]);
      var je;
      n[74] !== G || n[75] !== w || n[76] !== P
        ? ((je = c.jsx(r("WAWebAutoCarouselMenuTabMarker.react"), {
            selectedTabIndex: G,
            width: P,
            offsetPx: w,
            animate: !0,
          })),
          (n[74] = G),
          (n[75] = w),
          (n[76] = P),
          (n[77] = je))
        : (je = n[77]);
      var Ke;
      n[78] !== Be || n[79] !== Ge || n[80] !== ze || n[81] !== je
        ? ((Ke = c.jsx(
            "div",
            babelHelpers.extends({ ref: X }, Ve, {
              children: c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
                className: He,
                style: Ge,
                role: "tablist",
                handlers: Be,
                tabIndex: null,
                children: [ze, je],
              }),
            }),
          )),
          (n[78] = Be),
          (n[79] = Ge),
          (n[80] = ze),
          (n[81] = je),
          (n[82] = Ke))
        : (Ke = n[82]);
      var Qe = !D && Te,
        Xe;
      n[83] !== Ue || n[84] !== Ke || n[85] !== Qe
        ? ((Xe = c.jsxs(r("WAWebResizeObserver.react"), {
            className: qe,
            onResize: ce,
            children: [Ue, Ke, Qe],
          })),
          (n[83] = Ue),
          (n[84] = Ke),
          (n[85] = Qe),
          (n[86] = Xe))
        : (Xe = n[86]);
      var Ye;
      return (
        n[87] !== a.theme || n[88] !== Xe
          ? ((Ye = c.jsx(o("WAWebPanelsMenuContainer.react").MenuContainer, {
              theme: We,
              children: Xe,
            })),
            (n[87] = a.theme),
            (n[88] = Xe),
            (n[89] = Ye))
          : (Ye = n[89]),
        Ye
      );
    }
    l.default = R;
  },
  98,
);
